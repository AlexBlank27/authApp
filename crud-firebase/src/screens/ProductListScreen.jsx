import React,{useState, useEffect} from "react";
import {View, FlatList, Button} from "react-native";
import {collection, onSnapshot, deleteDoc, doc} from "firebase/firestore";
import {db, auth} from '..services/Firebase';
import ProductItem from '../components/ProducItem'

import { signOut } from "firebase/auth";

export default function ProductListScreen({navigation}){
    const[products, setProducts] = useState([]);

    useEffect(() => {
        const unsub = onSnapshot(collection(db, 'products'), (snapshot) => {
            setProducts(snapshot.docs.map(doc => ({...doc.data(), id: doc.id })));
        })
    }, []);

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, 'products', id));
    }   

    return(
        <View>
            <Button title='Agregar Producto' onPress={() => navigation.navigate('AddProduct')} />
            <Button title='Cerrar Sesión' onPress={() => signOut(auth)} />
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({item})=>(
                    <ProductItem
                        product={item}
                        onEdit={() => navigation.navigate('EditProduct', {productId: item.id})}
                        onDelete={handleDelete}
                    />
                )}
            />
        </View>

    )
}