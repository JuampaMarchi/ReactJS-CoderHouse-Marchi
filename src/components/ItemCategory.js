import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';
import Loader from './Loader'
import { useParams } from 'react-router';
import { Box, Wrap } from '@chakra-ui/react';
import { getFirestore } from '../firebase';

export default function ItemCategory(){
    const [filteredItems, setFilteredItems] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()

    useEffect(()=>{
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

    if(!loading){
        return (
            <Wrap border='solid 8px' borderRadius='3xl' bgColor='#cfccd6' marginTop='5' p='15px' spacing='30px' justify='center'>
                <ItemList games={filteredItems} />
            </Wrap>
        )
    }
    return (
        <Box alignContent='center' p='10'>
            <Loader />
        </Box>
    )
}