import ProductForm from "../components/ProductForms";
import { updateDoc, doc } from "firebase/firestore";
import db from "../services/Firebase";

export default function EditProductScreen({route, navigation}){
    const {product} = route.params;

    const handleEdit = async (updated) => {
        await updateDoc(doc(db, "products", product.Id), updated);
        navigation.goBack();
    };

    return <ProductForm initialValues={product} onSubmit={handleEdit} />;
}