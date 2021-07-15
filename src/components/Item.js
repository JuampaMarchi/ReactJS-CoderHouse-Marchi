import React, {useState, useEffect} from 'react';
import {Box, Button} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import ItemCount from './ItemCount';

export default function Item(props){
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
        <>
        <Box w="auto" h="auto" border="2px" borderColor="black" backgroundColor="greenyellow">
            <h1><Link to={`/products/${props.products.id}`}>{props.products.title}</Link></h1>
            <h2>{props.products.type}</h2>
            <h3>{props.products.cost}</h3>
        </Box>
        <ItemCount hideButton={!isHidden} stock={5} initial={0} onAdd={onAdd} />
        <Button id="go-to-cart" hidden={isHidden} colorScheme="blue" as={Link} to="/cart">Terminar Compra</Button>
        </>  
    )
}