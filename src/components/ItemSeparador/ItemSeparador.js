import { View } from "react-native";
import React from "react";
import estilos from "./ItemSeparadorEstilos.js";

const ItemSeparador = () => {
  return (
    <View style={estilos.viewSeparador}>
      <View style={estilos.linha}></View>
    </View>
  );
};
export default ItemSeparador;
