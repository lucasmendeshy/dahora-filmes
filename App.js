import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";

const App = () => {
  const [fonteCarregada] = useFonts({
    monoton: require("./assets/fonts/Monoton-Regular.ttf"),
  });
  /* A condicional abaixo serve apenas para dar um pequeno tempo suficiente para o carregamento do arquivo da fonte antes do return do componente */
  if (!fonteCarregada) return <Text>Fonte sendo carregada...</Text>;

  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.viewLogo}>
        <Text style={estilos.tituloApp}>Dá Hora Filmes</Text>
      </View>

      <View style={estilos.viewBotoes}>
        <TouchableOpacity>
          <Text style={estilos.botao}>Buscar Filmes</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={estilos.botao}>Favoritos</Text>
        </TouchableOpacity>
      </View>

      <View style={estilos.viewRodape}>
        <TouchableOpacity>
          <Text style={estilos.botao}>Privacidade</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={estilos.botao}>Sobre</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  viewLogo: {
    flex: 3,
    width: "80%",
    textAlign: "center",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  tituloApp: {
    fontSize: 36,
    fontFamily: "monoton",
    color: "#5451a6",
    // fontWeight: "bold",
  },
  viewBotoes: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    width: "80%",
  },
  viewRodape: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  botao: {
    backgroundColor: "blue",
    fontSize: 20,
    color: "white",
    padding: 10,
    textAlign: "center",
  },
});
