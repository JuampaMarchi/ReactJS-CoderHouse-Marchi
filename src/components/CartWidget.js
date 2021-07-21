import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
//Context
import {CartContext} from '../context/CartContext'
//Styles
import {Box, Button, Flex} from '@chakra-ui/react'

function CartWidget(){
    const cartItems = useContext(CartContext)
    console.log("cartItems",cartItems)

    const clearCart = ()=>{
        cartItems.setCartContent([])
    }
    const removeItem = (id)=>{
        cartItems.setCartContent(cartItems.cartContent.filter(currentItem => currentItem.id !== id))
    }
    return (
        <Flex flexDirection="column" alignItems="center">
        {cartItems.cartContent.map((item)=>{
            return (
                <Box style={{display: 'flex', justifyContent: 'center'}}>
                    <Box w="600px" h="auto" border="2px" borderColor="black" backgroundColor="greenyellow" margin="10px">
                        <h1>Producto: {item.item}</h1>
                        <Flex justifyContent='space-between'>
                            <h2 style={{marginRight: '10px'}}>Cantidad: {item.quantity}</h2>
                            Modificar Cantidades:
                            <Button colorScheme='yellow' onClick={()=>cartItems.restItem()}>-</Button>
                            <Button colorScheme='yellow' onClick={()=>cartItems.sumItem(5)}>+</Button>
                        </Flex>
                        <h2>Precio: $ {item.price}</h2>
                        <h2 style={{fontWeight: "bold"}}>Total: $ {item.quantity * item.price}</h2>
                        <Button onClick={()=>{ removeItem(item.id) }}>Quitar producto</Button>
                    </Box>
                </Box>
            )
        })}
        <Button w="200px" onClick={()=>clearCart()} colorScheme="teal">Vaciar carrito</Button>
        <Button w="200px" as={Link} to="/products" colorScheme="cyan" margin="5px">Seguir Comprando</Button>
        </Flex>
    )
}

export default CartWidget;