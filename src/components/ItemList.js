import React from 'react';
import Item from './Item';
import ItemCount from './ItemCount';
import {Box} from '@chakra-ui/react'

export default function ItemList(props){
    const onAdd = (number) => {
        alert(`se han agreado ${number} articulos al carrito`);
    }
    return (
        props.games.map((item) =>
            <Box p="10px" m="5px" display="flex" flexDirection="column" alignItems="center" width="auto">
                <Item {... item} />
                <ItemCount stock={5} initial={1} onAdd={onAdd} />
            </Box>
        )
    )
}


