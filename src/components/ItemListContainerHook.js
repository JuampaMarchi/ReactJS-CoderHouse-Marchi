import React, {useState, useEffect} from 'react';
import CartWidget from './CartWidget';
import ItemCount from './ItemCount';

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

function ItemListHook(){
    const [articulos, setReferences] = useState(datosArticulos)

    const botonCard = () => {
        const newArticle = {
            nombre: 'articulo nuevo',
            id: 444,
            precio: 40
        }
        setReferences([ ... articulos, newArticle])
    }

    const onAdd = (number) => {
        alert(`se han agreado ${number} articulos al carrito`);
    }

    return (
        <>
        <div style={{display: 'flex', marginTop: '2rem'}}>
            {articulos.map((item) => <CartWidget {... item} />)}
        </div>
        <button onClick={botonCard}>Agregar Card</button>
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </>
    )
}
export default ItemListHook;
