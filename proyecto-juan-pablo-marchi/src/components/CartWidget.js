import React from 'react';


const CartWidget = (props) => {
    console.log(props.baseArticulos)
    const propsArray = props.baseArticulos
    console.log(propsArray)
    
    return (
        <>
        
        <div style={{display: 'flex', marginTop: '2rem'}}>
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
