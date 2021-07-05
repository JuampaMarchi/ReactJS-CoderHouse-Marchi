import React from 'react';
import {useParams} from 'react-router-dom';
import {DATA} from '../components/json/games';
import {Grid, GridItem} from '@chakra-ui/react'

function ProductDetail(){
    const {id} = useParams()
    const result = DATA.filter((game)=>{
        return game.id === id
    })[0]
    console.log(result)
    return(
        <Grid templateRows="repeat(5, 1fr)" templateColumns="repeat(3, 1fr)" gap={4} bg="yellowgreen">
            <GridItem rowSpan={5} colSpan={1}>
                <img src={result.coverLink} />
            </GridItem>
            <GridItem colSpan={2}>
                <span >Título: {result.title}</span>
            </GridItem>
            <GridItem colSpan={2}>
                <span >Género: {result.genre}</span>
            </GridItem>
            <GridItem colSpan={2}>
                <span >Lanzamiento: {result.releaseDate}</span>
            </GridItem>
            <GridItem colSpan={2}>
                <span >Precio: {result.cost}</span>
            </GridItem>
        </Grid>
    )
}

export default ProductDetail;