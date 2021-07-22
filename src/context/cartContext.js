import React,  {createContext, useState, useEffect} from 'react';

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

    return (
        <CartContext.Provider value={{cartContent, setCartContent, clearCart, removeItem, isInCart, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}