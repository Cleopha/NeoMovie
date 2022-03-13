import React, { useEffect, useRef, useState } from "react";

import { Icon, Input, Spinner } from "native-base"
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from '@expo/vector-icons';
import { Animated, FlatList, Pressable } from "react-native";
import { Modalize } from "react-native-modalize";
import { Host, Portal } from "react-native-portalize";

import { ModalFilmInfos } from "../molecules/modal";
import { FilmInfoData, FilmInfosData } from "../../SDK/Film/Film";
import FilmCard from "../molecules/filmCard";
import { NeoMovieSDKContext } from "../../SDK/neoMovieSDK";

export default function Search() {
    const SDK = React.useContext(NeoMovieSDKContext)
    const [info, setInfo] = useState<FilmInfoData[]>([])
    const [available, setAvailable] = useState(false)


    const modalizeRef = useRef<Modalize>(null);
    const animated = useRef(new Animated.Value(0)).current;
    const [input, setInput] = useState<string>("")

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    const nextSearch = () => {
        console.log("next")
        if (input) {
            SDK.film.retrieveSearchFilmNext(input).then((item: FilmInfosData) => {
                setInfo([...info, ...item.results])
            })
        }
    }

    useEffect(() => {
        setAvailable(false)
        if (input) {
            SDK.film.getSearchFilm(input).then((item: FilmInfosData) => {
                setInfo(item.results)
                setAvailable(true)
            })
        }
    }, [input])


    return (
        <Host>
            <SafeAreaView>
                <Input
                    placeholder="Search"
                    variant="filled"
                    width="100%"
                    borderRadius="10"
                    borderColor="black"
                    bg="transparent"
                    py="3"
                    px="3"
                    placeholderTextColor="gray.500"
                    borderWidth="1"
                    onChangeText={(t) => {
                        setAvailable(false)
                        console.log(t)
                        setInput(t)
                    }}
                    InputLeftElement={
                        <Icon
                            ml="2"
                            size="5"
                            color="gray.500"
                            as={<AntDesign name="search1" size={50} />}
                        />
                    }
                />
                {available && (
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={info}
                        onEndReachedThreshold={0.5}
                        onEndReached={() => {
                            nextSearch()
                        }}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <Pressable
                                onPress={() => { onOpen() }}
                            >
                                {({ isHovered, isFocused, isPressed }: any) => {
                                    return (
                                        <>
                                            <FilmCard film={item} />
                                            <Portal>
                                                <ModalFilmInfos ref={modalizeRef} animated={animated} film={item} />
                                            </Portal>
                                        </>
                                    )
                                }}
                            </Pressable>
                        )} />
                )}
                {!available && (
                    <Spinner size="lg" />
                )}
            </SafeAreaView>

        </Host>
    )
}