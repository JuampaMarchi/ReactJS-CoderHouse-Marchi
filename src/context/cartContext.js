import React,  { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({children}) =>{
    const [cartContent, setCartContent] = useState([])

    const clearCart = () => setCartContent([]);

    const isInCart = (id) => cartContent.filter((currentItem) => id === currentItem.id).length !== 0;

    const removeItem = (id)=>{
        setCartContent(cartContent.filter(currentItem => currentItem.id !== id))
    }

    const addToCart = (item) => {
        const purchaseItem = item
        setCartContent([...cartContent, purchaseItem]);
    };

    const modifyQty = (id, newQty)=>{
        const currentItem = cartContent.find((item)=> item.id === id)
        currentItem.count = newQty
        setCartContent([...cartContent])
    }

    return (
        <CartContext.Provider value={{cartContent, setCartContent, clearCart, removeItem, isInCart, addToCart, modifyQty}}>
            {children}
        </CartContext.Provider>
    )
}