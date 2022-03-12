import * as React from 'react';
import { useEffect, useRef, useState } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { ImageBackground, View, StyleSheet, Animated } from 'react-native';

import { data } from '../../fakeData/post'
import { Box, Center, FlatList, Image, Pressable, Text } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import ImageFilm from '../atoms/imageFilm';
import { Modalize } from 'react-native-modalize';
import { Host, Portal } from 'react-native-portalize';
import { ModalFilmInfos } from '../molecules/modal';
import { FilmsData } from '../../fakeData/films';
import { NeoMovieSDKContext } from '../../SDK/neoMovieSDK';
import { FilmInfoData, FilmInfosData, GenreData } from '../../SDK/Film/Film';

interface IFilmSuggestionProps {
    genre: GenreData
}

export default function FilmSuggestion({ genre }: IFilmSuggestionProps) {
    const SDK = React.useContext(NeoMovieSDKContext)
    const [info, setInfo] = useState<FilmInfoData[]>([])

    const modalizeRef = useRef<Modalize>(null);
    const animated = useRef(new Animated.Value(0)).current;

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    useEffect(() => {
        SDK.film.getFilmByGenre(genre.id).then((item: FilmInfosData) => {
            setInfo(item.results)
        })
    }, [])

    return (
        <View style={{ height: 220 }}>
            <Text bold fontSize="md">{genre.name}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={info}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() => { onOpen() }}
                        style={{ justifyContent: "center" }}
                    >
                        {({ isHovered, isFocused, isPressed }: any) => {
                            return (
                                <>
                                    <ImageFilm url={"https://image.tmdb.org/t/p/w300" + item.poster_path} isPressed={isPressed} />
                                    <Portal>
                                        <ModalFilmInfos ref={modalizeRef} animated={animated} film={item} />
                                    </Portal>
                                </>
                            )
                        }}
                    </Pressable>
                )} />

        </View>
    )
}