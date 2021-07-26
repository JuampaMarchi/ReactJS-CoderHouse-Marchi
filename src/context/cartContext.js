import React,  {createContext, useState, useEffect} from 'react';
import {getFirestore} from '../firebase'

export const CartContext = createContext();

export const CartContextProvider = ({children}) =>{
    const [cartContent, setCartContent] = useState([])
    const [loading, setLoading] = useState(false)
    const [items, setItems] = useState([])

    useEffect(()=>{
        setLoading(true);
        const db = getFirestore()
        const itemCollection = db.collection("items");
        itemCollection.get().then((querySnapshot)=>{
            if(querySnapshot.size === 0){
                console.log('no results')
            }else{
                setItems(querySnapshot.docs.map(doc => doc.data()))
            }
        }).catch(error => {
            console.log('error', error)
        }).finally(()=>{
            setLoading(false)
        })
    }, [])

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
        <CartContext.Provider value={{cartContent, setCartContent, clearCart, removeItem, isInCart, addToCart,  items, modifyQty}}>
            {children}
        </CartContext.Provider>
    )
}