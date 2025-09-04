import ProductForm from "../components/ProductForms";

import { addDoc, collection } from "firebase/firestore";
import db from "../services/Firebase";

export default function AddProductScreen({navigation}){
    const handleAdd = async (product) => {
        await addDoc(collection(db, 'products'), product);
        navigation.goBack();
    }
    return <ProductForm onSubmit={handleAdd} />;
    
}