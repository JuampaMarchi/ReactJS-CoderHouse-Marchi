import React, {useContext, useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
//Context
import {CartContext} from '../context/CartContext'
//Styles
import {Box, Button, Flex} from '@chakra-ui/react'

function CartWidget(){
    const context = useContext(CartContext)
    console.log("context.cartCount",context.cartCount)
    
    if(context.cartContent.length != 0){
        return (
            <Flex flexDirection="column" alignItems="center">
            {context.cartContent.map((item)=>{
                return (
                    <Box style={{display: 'flex', justifyContent: 'center'}}>
                        <Box w="600px" h="auto" border="2px" borderColor="black" backgroundColor="greenyellow" margin="10px">
                            <h1>Producto: {item.item}</h1>
                            <Flex justifyContent='space-between'>
                                <h2 style={{marginRight: '10px'}}>Cantidad: {context.cartCount}</h2>
                                Modificar Cantidades:
                                <Button colorScheme='yellow' onClick={()=>context.setCartCount(context.cartCount - 1)} >-</Button>
                                <Button colorScheme='yellow' onClick={()=>context.setCartCount(context.cartCount + 1)} >+</Button>
                            </Flex>
                            <h2>Precio: $ {item.cost}</h2>
                            <h2 style={{fontWeight: "bold"}}>Total: $ {context.cartCount * item.cost}</h2>
                            <Button onClick={()=>context.removeItem(item.id)}>Quitar producto</Button>
                        </Box>
                    </Box>
                )
            })}
            <Button w="200px" onClick={()=>context.clearCart()} colorScheme="teal">Vaciar carrito</Button>
            <Button w="200px" as={Link} to="/products" colorScheme="cyan" margin="5px">Seguir Comprando</Button>
            </Flex>
        )
    } else {
        return (
            <Box>
                No hay elementos en el carrito
                <Button w="200px" as={Link} to="/products" colorScheme="cyan" margin="5px">Ver Productos</Button>
            </Box>
        )
    }
}
export default CartWidget;