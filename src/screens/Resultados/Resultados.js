import { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import Api from "../services/Api.js";
import estilos from "./ResultadosEstilos.js";
const Resultados = ({ route }) => {
  /* Usamos a prop route (Do React Navigation)  para acessar os parâmetros desta rota de navegação e extrair os dados (neste casso, filme) enviados para esta tela Resultados.*/
  const { filme } = route.params;
  /* console.log(filme); -> Teste */

  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    async function buscarFilmes() {
      try {
        const resposta = await Api.get("/search/movie", {
          params: {
            api_key: "7726dc6b3289aaf55a4f630da4f3e3ae",
            language: "pt-br",
            query: filme,
            include_adult: false,
          },
        });
        setResultados(resposta.data.results);
      } catch (error) {
        console.log("Deu ruim na busca da API: ", error + message);
      }
    }
    buscarFilmes();
  }, []);
  /* console.log(resultados); -> Test */
  return (
    <SafeAreaView style={estilos.container}>
      <Text>Você buscou por: {filme}</Text>
      <View style={estilos.viewFilmes}>
        {resultados.map((resultado) => {
          return <Text key={resultado.id}>{resultado.title}</Text>;
        })}
      </View>
    </SafeAreaView>
  );
};

export default Resultados;
