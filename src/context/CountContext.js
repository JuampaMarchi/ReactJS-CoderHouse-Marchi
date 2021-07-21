import React, {useState,createContext} from 'react';

export const Context = createContext();

export const CountContext = ({ children }) => {
    const [cartCount, setCartCount] = useState(1)

    const onAdd = (number) => setCartCount(number)

    return (
        <Context.Provider value={{cartCount, setCartCount, onAdd}}>
            {children}
        </Context.Provider>
    )
}

