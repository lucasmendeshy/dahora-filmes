import { SafeAreaView, Text } from "react-native";
import React from "react";
import estilos from "./SobreEstilos.js";

const Sobre = () => {
  return (
    <SafeAreaView style={estilos.container}>
      <Text style={estilos.titulo}>Sobre o app Dá Hora Filmes</Text>
      <Text style={estilos.texto}>
        O <Text style={estilos.nomeApp}>Dá Hora Filmes</Text> é um aplicativo
        com a finalidade de permitir a busca por informações sobre filmes
        existentes na base de dados pública disponibilizada pelo site The Movie
        Database (TMDb).
      </Text>
      <Text style={estilos.texto}>
        Ao localizar um filme, o usuário pode visualizar informações como
        título, data de lançamento, nota média de avaliação e uma breve
        descrição sobre o filme e, caso queira, salvar estas informações em uma
        lista no próprio aplicativo para visualização posterior.
      </Text>
      <Text style={estilos.texto}>
        O aplicativo poderá receber novos recursos conforme o feedback e demanda
        dos usuários.
      </Text>
      <Text style={estilos.texto}>
        O aplicativo poderá receber novos recursos conforme o feedback e demanda
        dos usuários.
      </Text>
    </SafeAreaView>
  );
};
export default Sobre;
