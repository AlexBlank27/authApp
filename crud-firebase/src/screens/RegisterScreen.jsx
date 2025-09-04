import {useState} from "react";
import {View, TextInput, Button, Alert} from "react-native";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../services/Firebase"; // Adjust the import path as necessary
import {styles} from "../styles/StylesRegister";

export default function RegisterScreen({navigation}){
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
        <View style={styles.container}>
            <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} autoCapitalize="none" />
            <TextInput placeholder="Contraseña" value={password} onChangeText={setPassword} secureTextEntry style={styles.input}/>
            <Button title="Registrarse" onPress={handleRegister} />
        </View>
    );
}