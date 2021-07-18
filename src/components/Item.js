import React, { useState, useEffect, useContext } from "react";
import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

export default function Item(props) {
    const [quantityToAdd, setQuantityToAdd] = useState(undefined);
    const [isHidden, setIsHidden] = useState(true);
    const cart = useContext(CartContext);

    const onAdd = (number) => setQuantityToAdd(number);

    const isInCart = (id) => cart.cartContent.filter((currentItem) => id === currentItem.id).length !== 0;

    const addToCart = (item, id, quantity) => {
        const purchase = {
            item: item,
            id: id,
            quantity: quantity,
        };
        cart.setCartContent([...cart.cartContent, purchase]);
    };
    useEffect(() => {
        quantityToAdd ? setIsHidden(false) : setIsHidden(true);
    }, [quantityToAdd]);

    return (
        <>
            <Box w="auto" h="auto" border="2px" borderColor="black" backgroundColor="greenyellow">
                <h1>
                    <Link to={`/products/${props.products.id}`}>{props.products.title}</Link>
                </h1>
                <h2>{props.products.type}</h2>
                <h3>{props.products.cost}</h3>
            </Box>
            <ItemCount hideButton={!isHidden} stock={5} initial={0} onAdd={onAdd} />
            <Button onClick={() => {
                !isInCart(props.products.id) ? addToCart(props.products.title, props.products.id, quantityToAdd)
                : alert("Este producto ya esta en tu carrito")}} id="go-to-cart" hidden={isHidden} colorScheme="blue" as={Link} to="/cart">Terminar Compra</Button>
        </>
    );
}
