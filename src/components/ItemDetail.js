import React, {useContext} from 'react';
import {Box} from '@chakra-ui/react';


export default function ItemDetail(props){
  

    return (
        <Box w="auto" h="auto" border="2px" borderColor="black" backgroundColor="greenyellow">
            <h1>{props.item.title}</h1>
            <h2>{props.item.type}</h2>
            <h3>{props.item.cost}</h3>
            <img sizes="50%" src={props.item.coverLink} />
            <button >Terminar compra</button>
        </Box>    
    )
}