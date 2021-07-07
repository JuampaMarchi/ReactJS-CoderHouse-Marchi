import React from 'react'
import {Link} from 'react-router-dom'
import {Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, IconButton, Heading} from '@chakra-ui/react';
import {HiShoppingCart} from 'react-icons/hi'

function NavBar(){
    const accion = "accion"
    const survival = "survival"
    const platformer = "platformer"
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Heading as={Link} to="/" bg="lightgray">
                Bienvenido a Gaming Cove!!!
            </Heading>
            <Breadcrumb spacing="10px" separator="-" bg="yellowgreen">
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
                        <IconButton aria-label="cart" icon={<HiShoppingCart />} />  
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Breadcrumb>
                <h1 style={{fontWeight: 'bold', textDecoration: 'underline'}}>Categorias:</h1>
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
        </Box>
    )
}

export default NavBar;
