import { useEffect, useState } from "react";
import { SafeAreaView, Text, View, FlatList } from "react-native";
import Loading from "../../components/Loading/Loading.js";
import CardfFilme from "../../components/CardFilme/CardfFilme.js";
import Api from "../../services/Api.js";
import apiKey from "../../../apiKey.js";
import ItemSeparador from "../../components/ItemSeparador/ItemSeparador.js";
import ItemVazio from "../../components/ItemVazio/ItemVazio.js";
import estilos from "./ResultadosEstilos.js";

const Resultados = ({ route }) => {
  const { filme } = route.params;
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function buscarFilmes() {
      try {
        const resposta = await Api.get("/search/movie", {
          params: {
            api_key: apiKey,
            language: "pt-br",
            query: filme,
            include_adult: false,
          },
        });
        setResultados(resposta.data.results);
        setInterval(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.log("Deu ruim na busca da API: ", error + message);
      }
    }
    buscarFilmes();
  }, []);

  /* if (loading) return <Loading />; */

  return (
    <SafeAreaView style={estilos.containerSafe}>
      <View style={estilos.container}>
        <Text>Você buscou por: {filme}</Text>
        {/* Sintaxe de if evaluate usando &&
         Se loading for TRUE, renderize <Loading /> */}
        {loading && <Loading />}
        {/* Se loading for false, renderize o resultado do map */}
        <View style={estilos.viewFilmes}>
          {!loading && (
            <FlatList
              ItemSeparatorComponent={ItemSeparador}
              ListEmptyComponent={ItemVazio}
              data={resultados}
              renderItem={({ item }) => {
                return <CardfFilme filme={item} />;
              }}
              keyExtractor={(item) => item.id}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Resultados;
