import { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import Api from "../services/Api.js";
import apiKey from "../../../apiKey.js";
import estilos from "./ResultadosEstilos.js";
const Resultados = ({ route }) => {
  /* Usamos a prop route (Do React Navigation)  para acessar os parâmetros desta rota de navegação e extrair os dados (neste casso, filme) enviados para esta tela Resultados.*/
  const { filme } = route.params;
  /* console.log(filme); -> Teste */

  const [resultados, setResultados] = useState([]);

  /* useEffect: hook do React que executa operações no momento em que o componente (neste caso, Resultado) é renderizado. */
  useEffect(() => {
    /*  Assim que entrarmos em Resultado, é executado a função async buscarFilmes que por sua vez através do axios executa a consulta à API baseada no filme que foi digitado. */
    async function buscarFilmes() {
      try {
        /* Aguardamos a resposta da consulta get ao endpoint "/search/movie" da api. Observe que este endpoint precisa de parâmetros para a execução correta da consulta. Estes parâmetros DEVEM ter o mesmo nome indicado na documentação do endpoint/API */
        const resposta = await Api.get("/search/movie", {
          params: {
            api_key: apiKey,
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
