import React, {useState} from "react";
import {View, TextInput, Button, Alert} from "react-native";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../services/Firebase"; // Adjust the import path as necessary

export default function LoginScreen({navigation}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try{
            await signInWithEmailAndPassword(auth, email, password);
        }catch (error) {
            Alert.alert("Login Error", error.message);
        }
    }
    
    return (
        <View>
            <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
            <TextInput placeholder="Contraseña" value={password} onChangeText={setPassword}/>
            <Button title="Iniciar Sesión" onPress={handleLogin} />
            <Button title="Registrarse" onPress={() => navigation.navigate('Register')} />  
        </View>
    )

}