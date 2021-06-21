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

    botonCard = () => {
        const newArticle = {
            nombre: 'articulo nuevo',
            id: 444,
            precio: 40
        }
        this.setState({
            articulos: [ ... this.state.articulos, newArticle]
        })
    }

    render(){
        return (
            <div>
                <CartWidget baseArticulos={this.state.articulos} />
                <button onClick={this.botonCard}>Agregar Card</button>
            </div>
        )
    }

}

export default ItemListContainer;