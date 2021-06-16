import React from 'react';
import cart from '../media/cart-icon.png'

const CartWidget = (props) => {
    console.log(props.baseArticulos)
    const propsArray = props.baseArticulos
    console.log(propsArray)
    
    return (
        <>
        <button>
            +
        </button>
        <div style={{display: 'flex'}}>
            {propsArray.map((item) => 
                <div style={{border: 'solid 3px', marginRight: '10px'}}>
                    <h1>{item.nombre} </h1>
                    <h2>{item.id} </h2>
                    <h3>{item.precio} </h3>
                </div>
            )}
        </div>
        </>
    )
}

export default CartWidget;
