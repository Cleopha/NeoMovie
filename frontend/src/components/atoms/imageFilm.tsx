import * as React from 'react';

import { Box } from "native-base";
import { ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


interface IimageFilm {
    url: string,
    isPressed: boolean
    type: "like" | "viewed" | ""
}

export default function ImageFilm({ url, isPressed, type }: IimageFilm) {
    return (
        <Box
            rounded="8"
            m="1"
            style={{
                transform: [{ scale: isPressed ? 0.96 : 1, },],
            }}
        >
            <ImageBackground source={{ uri: url, }} style={{ width: 150, height: 200 }} imageStyle={{ borderRadius: 6 }}>
                <Box alignSelf={"flex-end"} position={"absolute"} bottom={0} >
                {type === "like" &&
                        <AntDesign name="heart" size={32} color={"red"} />
                    }
                    {type === "viewed" &&
                        <AntDesign name="eye" size={32} color={"violet"} />
                    }
                </Box>
            </ImageBackground>


        </Box>
    )

}