import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Grid, GridItem, Box, Text, Image } from '@chakra-ui/react';
import { getFirestore } from '../firebase';
import Loader from './Loader'

export default function ItemDetail(){
    const [itemDb, setItemDb] = useState([])
    const [loading, setLoading] = useState(true)
    const {productId} = useParams()

    useEffect(()=>{
        const db = getFirestore()
        const itemCollection = db.collection('items')
        const productCollection = itemCollection.where('id', '==', productId)
        productCollection.get().then((querySnapshot)=>{
            if(querySnapshot.size === 0){
                console.log('no results')
            }else{
                setItemDb(querySnapshot.docs.map(doc => doc.data()))
            }
        }).catch(error =>{
            console.log('error', error)
        }).finally(()=> {
            setLoading(false)
        })
    }, [])

    if(loading){
        return (
            <Box m='10'>
                <Loader />
            </Box>
        )
    }
    if(itemDb.length === 0){
        return (
            <div>
                Ups! No hay elementos para mostrar.
            </div>
        )
    }

    return (
        <Grid templateRows='repeat(5, 1fr)' templateColumns='repeat(3, 1fr)' gap={4} bg='white' p='10'>
            <GridItem rowSpan={5} colSpan={1}>
                <Image src={itemDb[0].coverLink} />
            </GridItem>
            <GridItem colSpan={2}>
                <h1 style={{fontSize: '40px'}} >{itemDb[0].title}</h1>
            </GridItem>
            <GridItem colSpan={2}>
                <span >Género: {itemDb[0].type}</span>
            </GridItem>
            <GridItem colSpan={2}>
                <span >Lanzamiento: {itemDb[0].releaseDate}</span>
            </GridItem>
            <GridItem colSpan={2}>
                <span >Precio: ${itemDb[0].price}</span>
            </GridItem>
        </Grid>
    )
}