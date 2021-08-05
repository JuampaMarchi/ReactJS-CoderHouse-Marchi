import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext'
import {Link} from 'react-router-dom'
import {Flex, Breadcrumb, BreadcrumbItem, BreadcrumbLink, IconButton, Heading} from '@chakra-ui/react';
import {HiShoppingCart} from 'react-icons/hi'

function NavBar(){
    const accion = "accion"
    const survival = "survival"
    const platformer = "platformer"
    const context = useContext(CartContext)
    return (
        <Flex flexDirection="column" alignItems="center" border='double' borderRadius='md'>
            <Heading as={Link} to="/" bg="lightgray" textAlign="center" p='5'>
                Bienvenido a Gaming Cove!!!
            </Heading>
            <Breadcrumb spacing="10px" separator="-" bg='lightblue' border='solid' borderRadius='md'>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to="/">
                        Inicio
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to="/about">
                        Quienes Somos
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to="/products">
                        Productos
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to="/contact">
                        Contacto
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink>
                        <IconButton aria-label="cart" icon={<HiShoppingCart />} as={Link} to="/cart"/>
                        ({context.cartContent.length})
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Breadcrumb>
                <Heading fontWeight='bold' fontSize='md' textDecoration='underline' textAlign='center'>Categorias:</Heading>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to={`/category/${accion}`}>
                        Acción
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to={`/category/${survival}`}>
                        Survival Horror
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to={`/category/${platformer}`}>
                        Plataformero
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </Flex>
    )
}

export default NavBar;
