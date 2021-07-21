import React,  {createContext, useState} from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({children}) =>{
    const [cartContent, setCartContent] = useState([])
    const [count, setCount] = useState(1)

    const restItem = () => {
        count > 0 ? setCount(count - 1) : alert('Las cantidades no pueden ser negativas')
    }
    const sumItem = (stock) => {
        count < stock ? setCount(count + 1) : alert('Las cantidades no pueden superar al stock')
    }

    const onAdd = (number) => setCount(number)

    return (
        <CartContext.Provider value={{cartContent, setCartContent, count, setCount, onAdd, restItem, sumItem}}>
            {children}
        </CartContext.Provider>
    )
}