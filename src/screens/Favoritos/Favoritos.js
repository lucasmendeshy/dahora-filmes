import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Alert,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import estilos from "./FavoritosEstilos";
import { useNavigation } from "@react-navigation/native";

const Favoritos = () => {
  const [listaFavoritos, setListaFavoritos] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    async function carregarFavoritos() {
      try {
        /* Acessar o storage de favoritos e tentar carregar os dados existentes */
        const dados = await AsyncStorage.getItem("@Favoritos");

        /* Havendo dados, transformamos eles em array de objetos */
        const filmes = JSON.parse(dados);

        /* Se realmente tem dados (ou seja, não é null), atualizamos o componente */
        if (dados != null) {
          setListaFavoritos(filmes); /* State de dados do componente  */
        }
        /* console.log(dados); */
      } catch (error) {
        console.log("Deu ruim no carregamento ", +error.message);
      }
    }
    carregarFavoritos();
  }, []);

  const verDetalhes = (filmeSelecionado) => {
    navigation.navigate("Detalhes", { filme: filmeSelecionado });
  };

  const excluirFavoritos = async () => {
    Alert.alert(
      "Excluir todos?",
      "Tem certeze que deseja excluir TODOS os favoritos?",
      [
        {
          text: "Cancelar",
          onPress: () => {
            return false;
          },
          style: "cancel", // SOMENTE NO IOS
        },
        {
          text: "Sim, to nem ai",
          onPress: async () => {
            /* Usamos removeItem para apagar somente os dados do @favoritos do nosso App */
            await AsyncStorage.removeItem("@Favoritos");
            setListaFavoritos([]);
          },
          style: "destructive",
        },
      ]
    );
  };

  const excluirUmFavorito = async (indice) => {
    /* Alert.alert(`Excluir filme no indice: ${indice}`); */

    /* Etapas para exclusão do filme escolhido */

    // 1) conhecendo o índice, remover o elemento (filme do array listaFavoritos)
    /* Splice -> indicamos o índice de referência (na prática, o índice do filme que queremos remover e, a partir deste índice, a quantidade de elementos que queremos remover. Como aqui queremos apagar somente o próprio filme escolhido, passamos 1) */
    listaFavoritos.splice(indice, 1);

    // 2) Atualizar o storage com a lista atualizada (ou seja, sem o filme)
    /* Obs.: é necessário transformar em string antes de gravar no Storage */
    await AsyncStorage.setItem("@Favoritos", JSON.stringify(listaFavoritos));

    // 3) Recarregamento do storage a nova lista de favoritos
    /* Obs.: é necessário transformar em array/objetos antes de manipular na aplicação */
    const listaDeFilmes = JSON.parse(await AsyncStorage.getItem("@Favoritos"));

    // 4) Atualizar o state para um novo render na tela com a lista de favoritos
    setListaFavoritos(listaDeFilmes);
  };

  return (
    <SafeAreaView style={estilos.safeContainer}>
      <View style={estilos.container}>
        <View style={estilos.cabecalho}>
          <Text>Quantidade: {listaFavoritos.length}</Text>
          <Pressable
            style={estilos.botaoExcluirTudo}
            onPress={excluirFavoritos}
          >
            <Text style={estilos.textoExcluirTudo}>
              <Ionicons name="trash-outline" size={16} /> Excluir favoritos
            </Text>
          </Pressable>
        </View>

        {/*  <Pressable style={estilos.botao} onPress={excluirFavoritos}>
          <Text style={estilos.textoBotao}>Excluir favoritos</Text>
        </Pressable> */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {listaFavoritos.map((filmeFavorito, indice) => {
            return (
              <>
                <Pressable
                  onPress={verDetalhes.bind(this, filmeFavorito)}
                  key={filmeFavorito.id}
                  style={estilos.itemFilme}
                >
                  <Text style={estilos.titulo}>{filmeFavorito.title}</Text>
                  <Pressable
                    style={estilos.botaoExcluir}
                    //onPress={excluirUmFavorito}
                    //onPress={() => excluirUmFavorito(indice)} // Sintaxe 1
                    onPress={excluirUmFavorito.bind(this, indice)}
                  >
                    <Ionicons name="trash" size={16} color="white" />
                  </Pressable>
                </Pressable>
              </>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Favoritos;
