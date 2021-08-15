import React, { useState, useEffect, useContext } from "react";
import { Box, Button, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

export default function Item(props) {
    const [quantityToAdd, setQuantityToAdd] = useState(undefined);
    const [isHidden, setIsHidden] = useState(true);
    const context = useContext(CartContext);

    const onAdd = (number) => setQuantityToAdd(number);

    useEffect(() => {
        quantityToAdd ? setIsHidden(false) : setIsHidden(true);
    }, [quantityToAdd]);

    return (
        <Flex fontFamily='Coda' p='10px' m='5px' flexDirection='column' alignItems='center' justifyContent='center' w='auto'>
            <Grid templateRows='repeat(4, 1fr)' templateColumns='repeat(2, 1fr)' w='300' border='2px' gap={3} h='250px' w='300px' borderRadius='md' bgColor='white'>
                <GridItem rowSpan={4} ><Image src={props.products.coverLink} h='100%' /></GridItem>
                <GridItem  ><Text as='u'>Titulo:</Text><Link to={`/products/${props.products.id}`}> {props.products.title}</Link></GridItem>
                <GridItem  ><Text as='u'>Genero:</Text> {props.products.type}</GridItem>
                <GridItem  ><Text as='u'>Año:</Text> {props.products.releaseDate}</GridItem>
                <GridItem  ><Text as='u'>Precio:</Text> {props.products.price}</GridItem>
            </Grid>
            <ItemCount hideButton={!isHidden} stock={5} onAdd={onAdd} />
            <Button onClick={() => {
                if(!context.isInCart(props.products.id)){
                    const product = props.products
                    product.count = quantityToAdd
                    context.addToCart(product)
                } else {
                    alert("Este producto ya esta en tu carrito")}
                }}
            id="go-to-cart" hidden={isHidden} colorScheme="teal" as={Link} to="/cart">Ir al Carrito</Button>
        </Flex>
    );
}
