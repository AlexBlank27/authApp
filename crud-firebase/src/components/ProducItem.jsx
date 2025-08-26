import React from "react";
import {View, Text, Button} from "react-native";
import {styles} from "../styles/StilesProductItem";

export default function ProductItem({product, onEdit, onDelete}) {
  return (
    <View style={styles.card}>
      <Text>{product.name} - ${product.price}</Text>
      <Button title="Editar" onPress={() => onEdit(product.id)} />
      <Button title="Eliminar" onPress={() => onDelete(product.id)} />
    </View>
  );
}