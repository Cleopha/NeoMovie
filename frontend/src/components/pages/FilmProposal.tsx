
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';

import { Box, ScrollView, Spacer, View } from "native-base";
import { Animated, SafeAreaView, Text } from "react-native";
import { Modalize } from "react-native-modalize";
import { Host, Portal } from "react-native-portalize";
import { GenreData, GenreListData } from "../../SDK/Film/Film";
import { NeoMovieSDKContext } from "../../SDK/neoMovieSDK";
import { ModalFilmInfos } from "../molecules/modal";
import FilmSuggestion from "../organisms/FilmSuggestion";

export default function FilmProposal() {
    const SDK = React.useContext(NeoMovieSDKContext)
    const [genreList, setGenreList] = useState<GenreData[]>([])

    useEffect(() => {
        SDK.film.getGenreList().then((item: GenreListData) => {
            setGenreList(item.genres)
        })
    }, [])


    return (
        <Host>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Box h={10} />
                {genreList.map((genre: GenreData, sid) => (
                    <FilmSuggestion key={`slide-${sid}`} genre={genre} />
                ))}
            </ScrollView>
        </Host>
    )
}
