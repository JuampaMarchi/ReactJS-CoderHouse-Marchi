import React, {useContext} from 'react'
import background from '../media/banner.jpg'
import { CartContext } from '../context/CartContext'
import {Link} from 'react-router-dom'
import {Box, Flex, Breadcrumb, BreadcrumbItem, BreadcrumbLink, IconButton, Heading, Menu, MenuButton, MenuItem, MenuList, useDisclosure } from '@chakra-ui/react';
import {HiShoppingCart} from 'react-icons/hi'

function NavBar(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const accion = 'accion'
    const survival = 'survival'
    const platformer = 'platformer'
    const fight = 'fight'
    const rpg = 'rpg'
    const strategy = 'strategy'
    const context = useContext(CartContext)
    return (
        <Flex flexDirection='column' alignItems='center' mb='5'>
            <Heading as={Link} to='/' color='lightgrey' w='100vw' p='5' bgImage={`url(${background})`}>
                <h1 style={{transform: 'skew(-30deg)', fontFamily: 'Goldman'}}>Bienvenido a Gaming Cove!</h1>
            </Heading>
            <Breadcrumb fontFamily='Oxanium' spacing='10px' separator='-' bg='whiteAlpha.800' border='solid' borderRadius='md'>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to='/'>
                        Inicio
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Menu isOpen={isOpen}>
                        <MenuButton onMouseEnter={onOpen} onMouseLeave={onClose}>
                            Juegos
                        </MenuButton>
                        <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                            <MenuItem as={Link} to='/products'>Todas las Categorias</MenuItem>
                            <MenuItem as={Link} to={`/category/${accion}`}>Accion</MenuItem>
                            <MenuItem as={Link} to={`/category/${survival}`}>Survival Horror</MenuItem>
                            <MenuItem as={Link} to={`/category/${rpg}`}>JRPG</MenuItem>
                            <MenuItem as={Link} to={`/category/${fight}`}>Lucha</MenuItem>
                            <MenuItem as={Link} to={`/category/${platformer}`}>Plataformero</MenuItem>
                            <MenuItem as={Link} to={`/category/${strategy}`}>Estrategia</MenuItem>
                        </MenuList>
                    </Menu>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to='/contact'>
                        Contacto
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink>
                        <IconButton aria-label='cart' icon={<HiShoppingCart />} as={Link} to='/cart'/>
                        ({context.cartContent.length})
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </Flex>
    )
}

export default NavBar;
