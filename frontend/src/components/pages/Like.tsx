import React, { useRef } from "react";

import { FlatList, Pressable } from "native-base"
import { Animated } from "react-native";
import { Host, Portal } from "react-native-portalize";
import { Modalize } from "react-native-modalize";

import ImageFilm from "../../components/atoms/imageFilm";
import { FilmsData } from "../../fakeData/films";
import { ModalFilmInfos } from "../../components/molecules/modal";

export default function Like() {
    const modalizeRef = useRef<Modalize>(null);
    const animated = useRef(new Animated.Value(0)).current;

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    return (
        <Host>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={FilmsData}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={{justifyContent: "space-evenly"}}
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() => { onOpen() }}
                        style={{ justifyContent: "center" }}
                    >
                        {({ isHovered, isFocused, isPressed }: any) => {
                            return (
                                <>
                                    <ImageFilm url={"https://image.tmdb.org/t/p/w300" + item.poster_path} isPressed={isPressed} type={"like"} />
                                    <Portal>
                                        <ModalFilmInfos ref={modalizeRef} animated={animated} film={item} />
                                    </Portal>
                                </>
                            )
                        }}
                    </Pressable>
                )} />

        </Host>
    )
}