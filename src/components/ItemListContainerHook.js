import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';
import {Grid, GridItem} from '@chakra-ui/react'
import {DATA} from './json/games';

function ItemListHook(){
    const [games, setGames] = useState(DATA)

    const onAdd = (number) => {
        alert(`se han agreado ${number} articulos al carrito`);
    }

    const addGame = (gameList) => {
    
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                const newGame = {
                    title: 'articulo nuevo',
                    id:'newId',
                    releaseDate: '2021',
                    genre: 'juego',
                    platform: ['plataforma'],
                    type: 'juego',
                    cost: 40,
                    coverLink: 'link'
                }
                resolve ([... gameList , newGame])
            }, 2000)
        })
    }

    return (
        <>
        <Grid templateColumns="repeat(5, 1fr)" gap={5} backgroundColor="pink" marginTop="5" pt="10px" pb="10px">
            <ItemList games={games} />
        </Grid>
        <button onClick={()=>{
            addGame(games).then((resultado)=>
            setGames(resultado))
            }
        }>Agregar Articulo</button>
        </>
    )
}
export default ItemListHook;
