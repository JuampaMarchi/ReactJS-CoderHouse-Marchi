import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';

const itemData = {
    title:"The Last of Us",
    releaseDate:2013,
    genre:"accion",
    platform:["playstation"],
    type:"modern",
    cost:3000,
    coverLink:"https://pbs.twimg.com/media/ED3Th3RXkAIBPSN.jpg"
}

function ItemDetailContainer(){
    const [itemDetail, setItemDetail] = useState([])

    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(setItemDetail(itemData))
            }, 2000)
        })
    }
    useEffect(()=>{
        getItem()
    }, [])

    return (
        <div>
            <ItemDetail item={itemDetail} />
        </div>
    )
}

export default ItemDetailContainer;