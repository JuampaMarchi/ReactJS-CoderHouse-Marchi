import React from 'react';
import { useForm } from 'react-hook-form';
import { VStack, Box,Input, Select, Textarea, Text, Heading, Button, ButtonGroup } from '@chakra-ui/react'

export default function ContactForm(){
    const { register, reset } = useForm()
    return (
        <VStack bg='lightgray' p='10'>
            <Heading textAlign='center' size='lg' py='5'>Completá el siguiente formulario para Contactarnos!</Heading>
            <Box textAlign='center'>
                <Text as='u'>Nombre y Apellido</Text>
                <Input {...register('nombre')} bg='white' size='sm' focusBorderColor='black' placeholder='Tu Nombre' isRequired='true'/>
            </Box>
            <Box textAlign='center'>
                <Text as='u'>Correo Electrónico</Text>
                <Input {...register('email')} bg='white' size='sm' focusBorderColor='black' placeholder='correo@correo.com' isRequired='true'/>
            </Box>
            <Box textAlign='center'>
                <Text as='u'>Motivo del Contacto</Text>
                <Select bg='white'>
                    <option value='default'>-</option>
                    <option value='product'>Sugerir Producto</option>
                    <option value='job'>Contacto Laboral</option>
                    <option value='suggestion'>Sugerencia de Mejora</option>
                    <option value='issue'>Hacer Reclamo</option>
                </Select>
            </Box>
            <Box textAlign='center'>
                <Text as='u'>Agrega algún comentario</Text>
                <Textarea {...register('text')} bg='white' placeholder='Ingresá tus comentarios' focusBorderColor='black' />
            </Box>
            <ButtonGroup spacing='6'>
                <Button colorScheme='teal'>Enviar Formulario</Button>
                <Button colorScheme='teal' onClick={()=>{
                    reset({nombre: '', email: '', text: ''})
                }}>Limpiar Formulario</Button>
            </ButtonGroup>
        </VStack>
    )
}
