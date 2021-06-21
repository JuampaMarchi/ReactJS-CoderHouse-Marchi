import React, {useState, useEffect} from 'react';
import {Button} from '@chakra-ui/react';

function ItemCount({stock, initial, onAdd}){
    const [count, setCount] = useState(initial)

    const restItem = () => {
        count > 0 ? setCount(count - 1) : alert('Las cantidades no pueden ser negativas')
    }
    const sumItem = () => {
        count < stock ? setCount(count + 1) : alert('Las cantidades no pueden superar al stock')
    }

    return (
        <>
        <div>
            <Button onClick={restItem} colorScheme='green'>-</Button>
            <span style={{padding: '5px'}}>{count}</span>
            <Button onClick={sumItem} colorScheme='green'>+</Button>
        </div>
        <Button onClick={() => onAdd(count)} colorScheme='green' style={{marginTop: '5px'}}>Agregar al Carrito</Button>
        </>
    )
}

export default ItemCount;