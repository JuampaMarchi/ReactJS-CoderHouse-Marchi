import React, {useState, useEffect} from 'react';
import { getFirestore } from '../firebase';
import { Flex, Box, Wrap } from '@chakra-ui/react'
import ItemList from './ItemList';
import Loader from './Loader'


export default function ItemListHook(){
    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const db = getFirestore()
        const itemCollection = db.collection('items');
        itemCollection.get().then((querySnapshot)=>{
            if(querySnapshot.size === 0){
                console.log('no results')
            }else{
                setGames(querySnapshot.docs.map(doc => doc.data()))
                console.log('games', games)
            }
        }).catch(error => {
            console.log('error', error)
        }).finally(()=>{
            setLoading(false)
        })
    }, [])

    if(!loading){
        return (
            <Wrap backgroundColor='pink' marginTop='5' p='15px' spacing='30px'>
                <ItemList games={games} />
            </Wrap>
        )
    }

    return (
        <Box alignContent='center' p='10'>
            <Loader />
        </Box>
    )
}
