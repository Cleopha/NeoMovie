import * as React from 'react';
import { useRef, forwardRef, useState } from 'react';

import { Animated, Dimensions } from 'react-native';
import { Text, Box,  Icon, IconButton, Image, View } from 'native-base';
import { Modalize } from 'react-native-modalize';
import { MaterialIcons, AntDesign, Entypo } from '@expo/vector-icons';


import { useCombinedRefs } from './utils';
import { FilmInfoData } from '../../SDK/Film/Film';


interface IpropsModal {
    animated: Animated.Value,
    film: FilmInfoData,
}

const { height, width } = Dimensions.get('window');

export const ModalFilmInfos = forwardRef(({ animated, film }: IpropsModal, ref) => {
    const modalizeRef = useRef(null);
    const combinedRef = useCombinedRefs(ref, modalizeRef);
    const [handle, setHandle] = useState(false);

    const handlePosition = (position: string) => {
        setHandle(position === 'top');
    };

    const renderContent = () => (
        <>
            <View>
                <Image
                    source={{ uri: "https://image.tmdb.org/t/p/w300" + film.backdrop_path, }}
                    roundedTop={10}
                    alt="ok"
                    style={{ flex: 1, width: width, height: height * 0.35 }}
                />
                <Box alignItems="center">
                    <Box alignItems="flex-start" flexDirection={'row'}>
                        <IconButton icon={<Icon as={AntDesign} name="hearto" size={16} />} borderRadius="full" />
                    </Box>
                    <IconButton icon={<Icon as={MaterialIcons} name="playlist-add" />} borderRadius="full" style={{ alignSelf: "flex-end", position: "absolute" }} />
                    <IconButton icon={<Icon as={AntDesign} name="eyeo" />} borderRadius="full" style={{ alignSelf: "flex-start", position: "absolute" }} />
                </Box>
                <Text bold fontSize={"lg"} alignSelf={"center"}>{film.title}</Text>

                <Text><Text bold>Sortie: </Text>{film.release_date}</Text>

                <Text bold fontSize={"lg"}>Description</Text>
                <Text>   {film.overview}</Text>

            </View>
        </>
    );

    return (
        <Modalize
            ref={combinedRef}
            panGestureAnimatedValue={animated}
            withHandle={handle}
            handlePosition="inside"
            handleStyle={{ top: 13, width: 40, height: handle ? 6 : 0, backgroundColor: 'black' }}
            onPositionChange={handlePosition}
            modalTopOffset={100}
        >
            {renderContent()}
        </Modalize>
    );
});
