import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Box, Grid, GridItem} from '@chakra-ui/react';
import ItemList from '../components/ItemList';
import {DATA} from '../components/json/games'

function ProductCategory(){
    const[game, setGame] = useState([])
    const {categoryId} = useParams()

    const getGames = ()=>{
        return new Promise((resolve, reject)=>{
            resolve(DATA)
        })
    };

    const categoryFilter = ()=>{
        getGames().then((data)=>{
            const filteredData = data.filter(element => element.genre === categoryId);
            setGame(filteredData);
        })
    }

    useEffect(()=>{
        categoryFilter()
    }, [game])

    return (
        <Grid templateColumns="repeat(5, 1fr)" gap={5} backgroundColor="pink" marginTop="5" pt="10px" pb="10px">
            <ItemList games={game}/>
        </Grid>
    )
}

export default ProductCategory;