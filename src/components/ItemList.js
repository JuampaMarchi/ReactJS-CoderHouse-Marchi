import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';
import ItemCount from './ItemCount';
import {Box, Button} from '@chakra-ui/react'

export default function ItemList(props){
    const [quantityToAdd, setQuantityToAdd] = useState(undefined)
    const [isHidden, setIsHidden] = useState(true)
    const onAdd = (number) => {
        setQuantityToAdd(number)
        alert(`Se agregaron ${number} items al carrito`)
    }  
    useEffect(()=>{
        quantityToAdd ? setIsHidden(false) : setIsHidden(true)
    }, [quantityToAdd])
    return (
        props.games.map((item) =>
            <Box p="10px" m="5px" display="flex" flexDirection="column" alignItems="center" width="auto">
                <Item {... item} />
                <ItemCount hideButton={!isHidden} stock={5} initial={0} onAdd={onAdd} />
                <Button id="go-to-cart" hidden={isHidden} colorScheme="blue" as={Link} to="/cart">Terminar Compra</Button>
            </Box>
        )
    )
}


