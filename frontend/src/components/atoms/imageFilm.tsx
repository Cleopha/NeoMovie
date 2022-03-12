import * as React from 'react';

import { Box, Image } from "native-base";


interface IimageFilm {
    url: string,
    isPressed: boolean
}

export default function ImageFilm({ url, isPressed }: IimageFilm) {
    return (
        <Box
            rounded="8"
            m="1"
            style={{
                transform: [{ scale: isPressed ? 0.96 : 1, },],
            }}>
            <Image
                source={{ uri: url, }}
                alt="Alternate Text"
                width={150}
                height={200}
                rounded="8"
            />
        </Box>
    )

}