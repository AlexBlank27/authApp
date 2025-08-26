import React, {useState} from "react";
import {View, TextInput, Button, Alert} from "react-native";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../services/Firebase"; // Adjust the import path as necessary

export async function RegisterScreen({navigation}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try{
            await createUserWithEmailAndPassword(auth, email, password);
            //Alert.alert("Registro Exitoso", "Usuario registrado correctamente");
            navigation.navigate('Login'); // Navigate to Login screen after successful registration
        }catch (error) {
            Alert.alert("Registro Error", error.message);
        }
    }

    return (
        <View style={{flex:1,justifyContent:"center",padding:20}}>
            <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
            <TextInput placeholder="Contraseña" value={password} onChangeText={setPassword} secureTextEntry style={styles.input}/>
            <Button title="Registrarse" onPress={handleRegister} />

        </View>
    );
}