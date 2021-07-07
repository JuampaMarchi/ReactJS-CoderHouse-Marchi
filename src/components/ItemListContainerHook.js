import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import ItemList from './ItemList';
import {Grid, GridItem} from '@chakra-ui/react'
import {DATA} from './json/games';

function ItemListHook(){
    const [games, setGames] = useState([])

    const getGames = ()=>{
        return new Promise((resolve, reject)=>{
            resolve(DATA)
        })
    };

    useEffect(()=>{
        getGames().then(setGames(DATA))
    }, [])

    return (
        <>
        <Grid templateColumns="repeat(5, 1fr)" gap={5} backgroundColor="pink" marginTop="5" pt="10px" pb="10px">
            <ItemList games={games} />
        </Grid>
        </>
    )
}
export default ItemListHook;
