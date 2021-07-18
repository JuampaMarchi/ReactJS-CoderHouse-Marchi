import React from 'react';
import Item from './Item';
import {Box} from '@chakra-ui/react'

export default function ItemList(props){
    
    return (
        props.games.map((item) =>
            <Box p="10px" m="5px" display="flex" flexDirection="column" alignItems="center" width="auto">
                <Item  products={item} />
            </Box>
        )
    )
}


