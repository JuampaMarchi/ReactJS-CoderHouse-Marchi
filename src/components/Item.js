import React, {useContext} from 'react';
import {Box} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import { CartContext } from '../context/cartContext';

export default function Item(props){
    const precios = useContext(CartContext)
    return (
        <Box w="auto" h="auto" border="2px" borderColor="black" backgroundColor="greenyellow">
            <h1><Link to={`/products/${props.id}`}>{props.title}</Link></h1>
            <h2>{props.type}</h2>
            <h3>{props.cost}</h3>
            <h4>Otros Precios: {precios.map((param)=>{
                return <span>{param}</span>
            })}</h4>
        </Box>    
    )
}