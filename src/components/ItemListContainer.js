import React from 'react';
import CartWidget from './CartWidget';

const datosArticulos = [
        {
            nombre: 'articulo1',
            id: 111,
            precio: 10 
        },
        {
            nombre: 'articulo2',
            id: 222,
            precio: 20
        },
        {
            nombre: 'articulo3',
            id: 333,
            precio: 30
        }
    ]

class ItemListContainer extends React.Component{

    state = {
            articulos: datosArticulos,
        }

    componentDidUpdate(){
        console.log('me actualice')
    }

    render(){
        return (
            /*<div>
                Stock
                {this.state.articulos.map((item) => 
                    <div>
                        <h1>{item.nombre}</h1>
                        <h2>{item.id}</h2>
                        <h3>{item.precio}</h3>
                    </div>
                )}
            </div>*/
            <div>
                <CartWidget baseArticulos={this.state.articulos} />
            </div>
        )
    }

}

export default ItemListContainer;