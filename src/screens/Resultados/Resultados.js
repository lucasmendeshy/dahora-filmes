import { SafeAreaView, Text } from "react-native";
import estilos from "./ResultadosEstilos.js";
const Resultados = ({ route }) => {
  /* Usamos a prop route (Do React Navigation)  para acessar os parâmetros desta rota de navegação e extrair os dados (neste casso, filme) enviados para esta tela Resultados.*/
  const { filme } = route.params;
  /* console.log(filme); -> Teste */
  return (
    <SafeAreaView style={estilos.container}>
      <Text>Você buscou por: {filme}</Text>
    </SafeAreaView>
  );
};

export default Resultados;
