import React from "react";
import { View, TextInput, Button } from "react-native";
import {styles} from "../styles/StilesProducForm";

export default function ProductForms({ produc, onEdit,onDelete }){
    
    const [name, setName] = useState(initialValues?.name || '');
    const [price, setPrice] = useState(initialValues?.price || '');
    
    return(
        <View  styles={styles.container}>
            <TextInput placeholder="Nombre del Producto" value={name} onChangeText={setName} style={styles.input} />
            <TextInput placeholder='Precio' value={price} onChangeText={setPrice} style={styles.input} />

            <Button title="Guardar" onPress={() => onSubmit({name, price:parseFloat(price)})} />     
        </View>
    )
} 