import { Text, View, Image } from "react-native";
import React from "react";
import estilos from "./CardFilmeEstilos";

const CardfFilme = ({ filme }) => {
  const { title, poster_path } = filme;
  return (
    <View>
      <Image
        style={estilos.imagem}
        source={{
          uri: `https://image.tmdb.org/t/p/original/${poster_path}`,
        }}
      />
      <Text>{title}</Text>
    </View>
  );
};
export default CardfFilme;
