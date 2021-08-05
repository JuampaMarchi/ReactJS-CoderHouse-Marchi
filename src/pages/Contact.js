import React from 'react';
import { VStack, Box,Input, Select, Textarea, Text, Heading, Button, ButtonGroup } from '@chakra-ui/react'

function Contact(){
    return (
        <VStack bg='lightgray' p='10'>
            <Heading textAlign='center' size='lg' py='5'>Completá el siguiente formulario para Contactarnos!</Heading>
            <Box textAlign='center'>
                <Text as='u'>Nombre y Apellido</Text>
                <Input bg='white' size='sm' focusBorderColor='black' placeholder='Tu Nombre' isRequired='true'/>
            </Box>
            <Box textAlign='center'>
                <Text as='u'>Correo Electrónico</Text>
                <Input bg='white' size='sm' focusBorderColor='black' placeholder='correo@correo.com' isRequired='true'/>
            </Box>
            <Box textAlign='center'>
                <Text as='u'>Motivo del Contacto</Text>
                <Select bg='white' placeholder='Elige un motivo'>
                    <option value='product'>Sugerir Producto</option>
                    <option value='job'>Contacto Laboral</option>
                    <option value='suggestion'>Sugerencia de Mejora</option>
                    <option value='issue'>Hacer Reclamo</option>
                </Select>
            </Box>
            <Box textAlign='center'>
                <Text as='u'>Agrega algún comentario</Text>
                <Textarea bg='white' placeholder='Ingresá tus comentarios' focusBorderColor='black' />
            </Box>
            <ButtonGroup spacing='6'>
                <Button colorScheme='teal'>Enviar Formulario</Button>
                <Button type='reset' colorScheme='teal'>Limpiar Formulario</Button>
            </ButtonGroup>
        </VStack>
    )
}

export default Contact;