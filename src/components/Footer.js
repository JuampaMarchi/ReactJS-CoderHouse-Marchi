import React from 'react';
import background from '../media/banner.jpg'
import { Box, Image } from '@chakra-ui/react';

export default function Footer(){


    return (
        <Box w='100%' mt='30px'>
            <Box h='3' bgColor='grey'></Box>
            <Image w='100vw' h='20' src={`${background}`} />
        </Box>
    )
}