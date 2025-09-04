import {useEffect, useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ProductListScreen from "../screens/ProductListScreen";
import AddProductScree from "../screens/AddProductScreen";
import EditProductScreen from "../screens/EditProductScreen";
import {auth} from "../services/Firebase";
import { onAuthStateChanged } from "firebase/auth";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return unsub;
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {user ? (
                    <>
                        <Stack.Screen name="Products" component={ProductListScreen} />
                        <Stack.Screen name="AddProduct" component={AddProductScree} />
                        <Stack.Screen name="EditProduct" component={EditProductScreen} />
                    </>
                ) : (
                    <> 
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="Register" component={RegisterScreen} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
