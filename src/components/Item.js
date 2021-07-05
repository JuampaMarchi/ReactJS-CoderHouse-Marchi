import React from 'react';
import {Box} from '@chakra-ui/react';
import {Link} from 'react-router-dom';

export default function Item(props){
    return (
        <Box w="auto" h="auto" border="2px" borderColor="black" backgroundColor="greenyellow">
            <h1><Link to={`/products/${props.id}`}>{props.title}</Link></h1>
            <h2>{props.type}</h2>
            <h3>{props.cost}</h3>
        </Box>    
    )
}