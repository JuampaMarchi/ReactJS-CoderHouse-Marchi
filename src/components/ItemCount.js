import React, {useContext} from 'react';
import { CartContext } from '../context/CartContext';
import {Box, Button} from '@chakra-ui/react';

function ItemCount({stock, hideButton, onAdd}){
    const itemCount = useContext(CartContext)

    return (
        <>
        <Box hidden={hideButton}>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Button onClick={itemCount.restItem} colorScheme='green'>-</Button>
            <span style={{padding: '5px'}}>{itemCount.count}</span>
            <Button onClick={()=> {itemCount.sumItem(stock)}} colorScheme='green'>+</Button>
        </div>
        <Button onClick={() => onAdd(itemCount.count)} colorScheme='green' style={{marginTop: '5px'}}>Agregar al Carrito</Button>
        </Box>
        <span hidden={!hideButton}>Cantidad a Comprar: {itemCount.count}</span>
        </>
    )
}

export default ItemCount;