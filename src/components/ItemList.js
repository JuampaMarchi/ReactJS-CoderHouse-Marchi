import React from 'react';
import Item from './Item';

export default function ItemList(props){
    return (
        props.games.map((item) => <Item {... item} />)
    )
}


