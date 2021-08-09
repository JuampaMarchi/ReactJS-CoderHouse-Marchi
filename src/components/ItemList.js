import React from 'react';
import Item from './Item';
import { WrapItem } from '@chakra-ui/react'

export default function ItemList(props){

    return (
        props.games.map((item) =>
            <WrapItem>
                <Item  products={item} />
            </WrapItem>
        )
    )
}


