import React, { useContext, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom'
//Context
import {CartContext} from '../context/CartContext'
//Styles
import {Box, Button, Flex, Stack, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure} from '@chakra-ui/react'
import Swal from 'sweetalert2';
//Firebase
import {getFirestore} from '../firebase'
import firebase from 'firebase/app'

function CartWidget(){
    const context = useContext(CartContext)
    const [orderId, setOrderId] = useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { register, reset } = useForm()
    const finalRef = useRef()
    const purchaseTotal = context.cartContent.reduce((acum, item) => acum + item.count * item.price, 0)
    console.log('total', purchaseTotal)

    const createOrder = () => {
        const db = getFirestore()
        const order = db.collection('orders')

        const buyerInfo = {
            buyerName: document.getElementById('userName').value,
            buyerPhone: document.getElementById('userPhone').value,
            buyerEmail: document.getElementById('userEmail').value
        }
        const cartItems = context.cartContent
        const total = cartItems.reduce((acum, item) => acum + item.count * item.price, 0)
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
            Swal.fire({
                icon: 'success',
                title: 'Orden Exitosa',
                text: `Muchas gracias ${buyerInfo.buyerName}, tu pedido fue realizado con éxito. A la brevedad te enviaremos un correo a ${buyerInfo.buyerEmail} con los detalles de tu orden. Que tengas un buen dia!`,
                confirmButtonText: 'Cerrar esta ventana'
            })
        })
    }
    
    if(context.cartContent.length != 0){
        return (
            <Flex fontFamily='Coda' flexDirection="column" alignItems="center">
                <Button w="200px" colorScheme='blackAlpha' margin="5px" onClick={()=>context.clearCart()}>Vaciar carrito</Button>
                <Button ref={finalRef} w="200px" colorScheme='teal' margin="5px" as={Link} to="/products" >Seguir Comprando</Button>
                {context.cartContent.map((item)=>{
                    return (
                        <Flex justifyContent='center'>
                            <Box w="600px" h="auto" border="2px" borderColor="black" borderRadius='md' bgColor='whiteAlpha.800' m="10px" p='3'>
                                <h1>Producto: {item.title}</h1>
                                <Flex justifyContent='space-between'>
                                    <h2 style={{marginRight: '10px'}}>Cantidad: {item.count}</h2>
                                    <Box>
                                        Modificar Cantidades:
                                        <Button h='7' m='2' colorScheme='yellow' onClick={()=> context.modifyQty(item.id, item.count - 1)} >-</Button>
                                        <Button h='7' m='2' colorScheme='yellow' onClick={()=> context.modifyQty(item.id, item.count + 1)} >+</Button>
                                    </Box>
                                </Flex>
                                <h2>Precio: $ {item.price}</h2>
                                <h2 style={{fontWeight: "bold", marginTop: '7px', marginBottom: '7px'}}>Total: $ {item.count * item.price}</h2>
                                <Button bg='blackAlpha.400' onClick={()=>context.removeItem(item.id)}>Quitar producto</Button>
                            </Box>
                        </Flex>
                    )
                })}
                <Box m='10px' fontSize='larger' p='15px' bgColor='whiteAlpha.800' border='2px' borderRadius='md'>Total Compra: ${purchaseTotal}</Box>
                <Button onClick={onOpen} w="300px" colorScheme='teal' margin="5px">Finalizar Compra</Button>
                <Modal isOpen={isOpen} onClose={onClose} size='xl' isCentered>
                    <ModalOverlay />
                    <ModalContent alignItems='center' bg='gray.200'>
                        <ModalHeader>Completa el formulario con tus datos</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Stack alignItems='center' w='500px' spacing="4" margin="10px" padding="10" bgColor='blackAlpha.600'>
                                <Input {...register('nombre')} id="userName" focusBorderColor="black" placeholder="Nombre y Apellido" size="sm" bgColor='white' />
                                <Input {...register('apellido')} id="userPhone" focusBorderColor="black" placeholder="Numero de Teléfono" size="sm" bgColor='white' />
                                <Input {...register('email')} id="userEmail" focusBorderColor="black" placeholder="Correo Electrónico" size="sm" bgColor='white' />
                                <Button onClose={onClose} w="200px" bg='blackAlpha.800' color='white' margin="5px" onClick={()=> {
                                    createOrder()
                                }}>Generar Orden</Button>
                                <Button w="200px" bg='blackAlpha.800' color='white' margin="5px" onClick={()=>reset({nombre: '', apellido: '', email: ''})}>Limpiar Formulario</Button>
                            </Stack>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </Flex>
        )
    } else {
        return (
            <Flex flexDirection='column' alignItems='center' h='400px'>
                No hay elementos en el carrito
                <Button w="200px" as={Link} to="/products" bg='blackAlpha.600' color='white' margin="5px">Ver Productos</Button>
            </Flex>
        )
    }
}
export default CartWidget;