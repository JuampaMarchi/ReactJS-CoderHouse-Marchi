import React from 'react';
import Item from './Item';
import { Flex, WrapItem } from '@chakra-ui/react'

export default function ItemList(props){
    console.log('props', props.games)

    return (
        props.games.map((item) =>
            <WrapItem>
                <Item  products={item} />
            </WrapItem>
        )
    )
}


