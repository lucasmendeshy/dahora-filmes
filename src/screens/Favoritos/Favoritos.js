import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert, Pressable, SafeAreaView, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import estilos from "./FavoritosEstilos";

const Favoritos = () => {
  const [listaFavoritos, setListaFavoritos] = useState([]);

  useEffect(() => {
    async function carregarFavoritos() {
      try {
        const dados = await AsyncStorage.getItem("@Favoritos");
        const filmes = JSON.parse(dados);
        if (dados != null) {
          setListaFavoritos(filmes);
        }
        console.log(dados);
      } catch (error) {
        console.log("Deu ruim no carregamento ", +error.message);
      }
    }
    carregarFavoritos();
  }, []);

  const excluirFavoritos = async () => {
    await AsyncStorage.removeItem("@Favoritos");
    setListaFavoritos([]);
    Alert.alert("Favoritos", "Favoritos excluídos!");
  };

  return (
    <SafeAreaView style={estilos.safeContainer}>
      <View style={estilos.container}>
        <Text>Quantidade: {listaFavoritos.length}</Text>
        <Pressable style={estilos.botao} onPress={excluirFavoritos}>
          <Text style={estilos.textoBotao}>Excluir favoritos</Text>
        </Pressable>

        {listaFavoritos.map((filmeFavorito) => {
          return (
            <>
              <Pressable key={filmeFavorito.id} style={estilos.itemFilme}>
                <Text>{filmeFavorito.title}</Text>
                <Pressable style={estilos.botaoExcluir}>
                  <Ionicons name="trash" size={24} color="white" />
                </Pressable>
              </Pressable>
            </>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default Favoritos;
