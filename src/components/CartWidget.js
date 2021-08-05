import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom'
//Context
import {CartContext} from '../context/CartContext'
//Styles
import {Box, Button, Flex, Stack, Input} from '@chakra-ui/react'
//Firebase
import {getFirestore} from '../firebase'
import firebase from 'firebase/app'

function CartWidget(){
    const context = useContext(CartContext)
    const [orderId, setOrderId] = useState('')

    const createOrder = () => {
        const db = getFirestore()
        const order = db.collection('orders')

        const buyerInfo = {
            buyerName: document.getElementById('userName').value,
            buyerPhone: document.getElementById('userPhone').value,
            buyerEmail: document.getElementById('userEmail').value
        }
        const cartItems = context.cartContent
        const total = cartItems.reduce((acum, item) => acum + item.count * item.cost, 0)
        const newOrder = {
            buyer: buyerInfo,
            items: cartItems,
            total,
            date: firebase.firestore.Timestamp.now(),
        }
        order.add(newOrder).then(({id}) => {
            setOrderId(id)
        }).catch(error => {
            console.log('error arrojado', error)
        }).finally(() => {
            context.setCartContent([])
            setOrderId('')
            alert(`Muchas Gracias por su compra ${buyerInfo.buyerName}. Se enviará un correo a ${buyerInfo.buyerEmail} con los detalles de su compra. Que tenga un buen dia! `)
        })
    }
    
    if(context.cartContent.length != 0){
        return (
            <Flex flexDirection="column" alignItems="center">
            {context.cartContent.map((item)=>{
                return (
                    <Box style={{display: 'flex', justifyContent: 'center'}}>
                        <Box w="600px" h="auto" border="2px" borderColor="black" backgroundColor="greenyellow" margin="10px">
                            <h1>Producto: {item.item}</h1>
                            <Flex justifyContent='space-between'>
                                <h2 style={{marginRight: '10px'}}>Cantidad: {item.count}</h2>
                                Modificar Cantidades:
                                <Button colorScheme='yellow' onClick={()=> context.modifyQty(item.id, item.count - 1)} >-</Button>
                                <Button colorScheme='yellow' onClick={()=> context.modifyQty(item.id, item.count + 1)} >+</Button>
                            </Flex>
                            <h2>Precio: $ {item.cost}</h2>
                            <h2 style={{fontWeight: "bold"}}>Total: $ {item.count * item.cost}</h2>
                            <Button onClick={()=>context.removeItem(item.id)}>Quitar producto</Button>
                        </Box>
                    </Box>
                )
            })}
            <Stack w='500px' spacing="4" margin="10px" padding="10" bgColor='green.300'>
                <Input id="userName" focusBorderColor="black" placeholder="Nombre y Apellido" size="sm" bgColor='white' />
                <Input id="userPhone" focusBorderColor="black" placeholder="Numero de Teléfono" size="sm" bgColor='white' />
                <Input id="userEmail" focusBorderColor="black" placeholder="Correo Electrónico" size="sm" bgColor='white' />
            </Stack>
            <Button w="200px" colorScheme="teal" margin="5px" onClick={()=>context.clearCart()}>Vaciar carrito</Button>
            <Button w="200px" colorScheme="cyan" margin="5px" as={Link} to="/products" >Seguir Comprando</Button>
            <Button w="300px" colorScheme="blue" margin="5px" onClick={()=>createOrder()}>Generar Orden</Button>
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