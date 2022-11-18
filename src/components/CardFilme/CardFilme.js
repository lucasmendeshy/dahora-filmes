import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, View, Image, Pressable, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import estilos from "./CardFilmeEstilos";

const CardFilme = ({ filme }) => {
  const { title, poster_path } = filme;

  /* Acessar recursos do React Navigation (sem props!) */
  const navigation = useNavigation();

  const leiaMais = () => {
    /*  Alert.alert("Vai!", "Detalhes do filme..."); */
    navigation.navigate("Detalhes", { filme });
  };

  const salvar = async () => {
    /*  return Alert.alert("FAVORITOS", "Salvando..."); */

    /* Etapas para uso do AsyncStorage */

    // 1) Carregamento do storage do aparelho (se houver, caso contrário retorna null)
    const filmesFavoritos = await AsyncStorage.getItem("@Favoritos");
    // console.log(filmesFavoritos);

    // 2) Havendo storage prévio, transformamos os dados do filme em objeto e os guardamos em uma lista (array)
    let listaDeFilmes = JSON.parse(filmesFavoritos);

    // let teste; // undefined

    // 3) Se a lista for indefinido, vamos iniciá-la vazia
    if (!listaDeFilmes) {
      listaDeFilmes = [];
    }

    // 4) Adicionamos os dados do filme na lista (array)
    listaDeFilmes.push(filme);

    // 5) Finalmente, salvamos COMO STRING no storage do dispositivo
    await AsyncStorage.setItem("@Favoritos", JSON.stringify(listaDeFilmes));
    Alert.alert("Favoritos", "Filme salvo com sucesso!");
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

          <Pressable style={estilos.botao} onPress={salvar}>
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
