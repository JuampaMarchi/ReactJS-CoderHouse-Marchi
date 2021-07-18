import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import {CartContext} from '../context/CartContext'
import {Box, Button, Flex} from '@chakra-ui/react'

function CartWidget(){
    const cartItems = useContext(CartContext)

    const clearCart = ()=>{
        cartItems.setCartContent([])
    }
    const removeItem = (id)=>{
        cartItems.setCartContent(cartItems.cartContent.filter(currentItem => currentItem.id !== id))
    }
    return (
        <Flex flexDirection="column" alignItems="center">
        {cartItems.cartContent.map((items)=>{
            return (
                <Box style={{display: 'flex', justifyContent: 'center'}}>
                    <Box w="600px" h="auto" border="2px" borderColor="black" backgroundColor="greenyellow" margin="10px">
                        <h1>{items.item}</h1>
                        <h2>{items.quantity}</h2>
                        <Button onClick={()=>{
                            removeItem(items.id)
                        }}>Quitar producto</Button>
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