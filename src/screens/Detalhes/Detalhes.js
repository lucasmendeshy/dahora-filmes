import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import estilos from "./DetalhesEstilos.js";
import fotoAlternativa from "../../../assets/imagens/foto-alternativa.jpg";

/* Prop de route para acesso aos dados trafegados entre a navegação entre as telas/rotas */
const Detalhes = ({ route }) => {
  // console.log(route);

  /* Extraindo os parâmetros da rota os dados do objeto filme  */
  const { filme } = route.params;
  return (
    <SafeAreaView style={estilos.safeContainer}>
      <View style={estilos.container}>
        <ImageBackground
          style={estilos.imagem}
          source={
            filme.backdrop_path
              ? {
                  uri: `https://image.tmdb.org/t/p/original/${filme.backdrop_path}`,
                }
              : fotoAlternativa
          }
        >
          <Text style={estilos.titulo}> {filme.title}</Text>
        </ImageBackground>

        <View style={estilos.conteudo}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* showsVerticalScrollIndicator={false} -> tira a barra de rolagem */}
            <Text>
              Avaliação: {filme.vote_average} | Lançamento: {filme.release_date}
            </Text>
            <Text style={estilos.descricao}>
              {filme.overview || "sem descrição"}
            </Text>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Detalhes;
