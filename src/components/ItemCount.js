import React, {useState} from 'react';
import {Box, Button} from '@chakra-ui/react';

function ItemCount({stock, hideButton, onAdd}){
    const [count, setCount] = useState(0)

    const restItem = () => {
        count > 0 ? setCount(count - 1) : alert('Las cantidades no pueden ser negativas')
    }
    const sumItem = () => {
        count < stock ? setCount(count + 1) : alert('Las cantidades no pueden superar al stock')
    }

    return (
        <>
        <Box marginTop='10px' hidden={hideButton}>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Button onClick={restItem} colorScheme='green'>-</Button>
            <span style={{padding: '5px'}}>{count}</span>
            <Button onClick={sumItem} colorScheme='green'>+</Button>
        </div>
        <Button onClick={() => onAdd(count)} colorScheme='green' style={{marginTop: '5px'}}>Agregar al Carrito</Button>
        </Box>
        <span hidden={!hideButton}>Cantidad a Comprar: {count}</span>
        </>
    )
}

export default ItemCount;