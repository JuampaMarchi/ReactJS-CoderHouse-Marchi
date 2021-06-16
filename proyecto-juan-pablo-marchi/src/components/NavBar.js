import React from 'react'
import {Box, Grid, GridItem, IconButton} from '@chakra-ui/react'
import {HiShoppingCart} from "react-icons/hi"

function NavBar(){
    return (
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            <Box textColor="white" w="100%" h="10" bg="green.500" >Home</Box>
            <Box textColor="white" w="100%" h="10" bg="green.500" >Quienes Somos</Box>
            <Box textColor="white" w="100%" h="10" bg="green.500" >Productos</Box>
            <IconButton aria-label="Cart" colorScheme="green" icon={<HiShoppingCart />} />
        </Grid>
    )
}

export default NavBar;