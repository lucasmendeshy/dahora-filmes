import { Text, View, Image, Pressable, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import estilos from "./CardFilmeEstilos";
import { useNavigation } from "@react-navigation/native";

const CardFilme = ({ filme }) => {
  const { title, poster_path } = filme;

  /* Acessar recursos do React Navigation (sem props!) */
  const navigation = useNavigation();

  const leiaMais = () => {
    /*  Alert.alert("Vai!", "Detalhes do filme..."); */
    navigation.navigate("Detalhes", { filme });
  };
  return (
    <View style={estilos.card}>
      <Image
        style={estilos.imagem}
        resizeMode="cover"
        source={{
          uri: `https://image.tmdb.org/t/p/original/${poster_path}`,
        }}
      />
      <View style={estilos.corpo}>
        <Text style={estilos.titulo}>{title}</Text>

        <View style={estilos.botoes}>
          <Pressable style={estilos.botao} onPress={leiaMais}>
            <Text style={estilos.textoBotao}>
              <AntDesign name="rightcircleo" size={12} color="white" /> Leia
              mais
            </Text>
          </Pressable>

          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>
              <AntDesign name="save" size={12} color="white" /> Salvar
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
export default CardFilme;
