import React, {useState, useEffect} from 'react';
import Item from './Item';
import ItemCount from './ItemCount';
import {Box, Button} from '@chakra-ui/react'

export default function ItemList(props){
    const [quantityToAdd, setQuantityToAdd] = useState(undefined)
    const onAdd = (number) => {
        alert(`Se agregaron ${number} items al carrito`)
        setQuantityToAdd(number)
        if(!quantityToAdd){
            return 
        }
    }
    return (
        props.games.map((item) =>
            <Box p="10px" m="5px" display="flex" flexDirection="column" alignItems="center" width="auto">
                <Item {... item} />
                <Button hidden="true" colorScheme="blue">Terminar Compra</Button>
                <ItemCount stock={5} initial={1} onAdd={onAdd} />
            </Box>
        )
    )
}


