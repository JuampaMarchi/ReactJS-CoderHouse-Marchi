import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Grid, GridItem } from '@chakra-ui/react';
import { getFirestore } from '../firebase';

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
                console.log('query', querySnapshot)
                setItemDb(querySnapshot.docs.map(doc => doc.data()))
            }
        }).catch(error =>{
            console.log('error', error)
        }).finally(()=> {
            console.log('itemDb', itemDb)
            setLoading(false)
        })
    }, [])

    if(loading){
        return (
            <div>
                loading
            </div>
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
        <Grid templateRows="repeat(5, 1fr)" templateColumns="repeat(3, 1fr)" gap={4} bg="yellowgreen">
            <GridItem rowSpan={5} colSpan={1}>
                <img src={itemDb[0].coverLink} />
            </GridItem>
            <GridItem colSpan={2}>
                <span >Título: {itemDb[0].title}</span>
            </GridItem>
            <GridItem colSpan={2}>
                <span >Género: {itemDb[0].genre}</span>
            </GridItem>
            <GridItem colSpan={2}>
                <span >Lanzamiento: {itemDb[0].releaseDate}</span>
            </GridItem>
            <GridItem colSpan={2}>
                <span >Precio: {itemDb[0].cost}</span>
            </GridItem>
        </Grid>
    )
}