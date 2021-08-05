import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router';
import { Grid } from '@chakra-ui/react';
import { getFirestore } from '../firebase';

export default function ItemCategory(){
    const [filteredItems, setFilteredItems] = useState([])
    const [loading, setLoading] = useState(false)
    const {categoryId} = useParams()

    useEffect(()=>{
        setLoading(true)
        const db = getFirestore()
        const itemCollection = db.collection('items');
        const itemGroup = itemCollection.where('genre', '==', categoryId);
        itemGroup.get().then((querySnapshot)=> {
            if(querySnapshot.size === 0){
                console.log('no results')
            }else{
                setFilteredItems(querySnapshot.docs.map(doc => doc.data()))
            }
        }).catch(error => {
            console.log('error', error)
        }).finally(()=>{
            setLoading(false)
        })
    }, [filteredItems])

    return (
        <Grid templateColumns='repeat(5, 1fr)' gap={5} bg='pink' mt='5' pt='10px' pb='10px'>
            <ItemList games={filteredItems}/>
        </Grid>
    )
}