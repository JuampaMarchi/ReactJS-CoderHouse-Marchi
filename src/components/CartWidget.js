import React from 'react';

const CartWidget = (props) => {
   
    return (
        <>
        <div style={{border: 'solid 3px', marginRight: '10px'}}>
            <h1>{props.nombre} </h1>
            <h2>{props.id} </h2>
            <h3>{props.precio} </h3>
        </div>
        
        </>
    )
    
}

export default CartWidget;
