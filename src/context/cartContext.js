import React,  { createContext, useState } from 'react';
import { getFirestore } from '../firebase'

export const CartContext = createContext();

export const CartContextProvider = ({children}) =>{
    const [cartContent, setCartContent] = useState([])
    const [isLogged, setIsLogged] = useState(false)
    const [loading, setLoading] = useState(false)

    const signIn = (trueName, trueLastName, id, name, password, phoneNumber, mail) => {
        const db = getFirestore()
        const buyers = db.collection('buyers')

        const newUser = {
            userTrueName: trueName,
            userTrueLastName: trueLastName,
            userId: id,
            userName: name,
            userPassword: password,
            userPhoneNumber: phoneNumber,
            userEmail: mail
        }
        buyers.add(newUser)
    }

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