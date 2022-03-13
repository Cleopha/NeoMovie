import React from "react";

import { HStack, Icon, IconButton, Text, VStack } from "native-base"
import { MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons';
import { Dimensions } from "react-native";

import { FilmInfoData } from "../../SDK/Film/Film";
import ImageFilm from "../atoms/imageFilm";


const { height, width } = Dimensions.get('window');

interface IFilmCardProps {
    film: FilmInfoData,
}

export default function FilmCard({ film }: IFilmCardProps) {
    return (
        <HStack style={{ height: 210 }}>
            <ImageFilm url={film.poster_path === null ? "https://ih1.redbubble.net/image.959951874.3860/fposter,small,wall_texture,product,750x1000.jpg" : "https://image.tmdb.org/t/p/w300" + film.poster_path} isPressed={false} type={""} />
            <VStack flex={2} >
                <Text bold fontSize={"md"} isTruncated >{film.title}</Text>
                <Text textAlign={"justify"} flexWrap={"wrap"} noOfLines={7} fontSize={11} >{film.overview}</Text>
                <HStack position={"absolute"} width={width * 0.58} bottom={0} alignItems={"flex-end"} justifyContent={"space-between"} >
                    <IconButton icon={<Icon as={MaterialIcons} name="playlist-add" />} borderRadius="full" size={"sm"} />
                    <IconButton icon={<Icon as={AntDesign} name="hearto" />} borderRadius="full" size={"sm"} />
                    <IconButton icon={<Icon as={Ionicons} name="eye-outline" />} borderRadius="full" size={"sm"} />
                </HStack>
                <HStack position={"absolute"} width={width * 0.58} bottom={10} justifyContent={"space-between"} >
                    <Text bold>{film.release_date}</Text>
                    <Text bold>{film.vote_average}</Text>
                </HStack>
            </VStack>
        </HStack>
    )

}