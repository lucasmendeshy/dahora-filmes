import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { useFonts } from "expo-font";
import estilos from "./estilos";
import logo from "./assets/imagens/logo.png";

const App = () => {
  const [fonteCarregada] = useFonts({
    monoton: require("./assets/fonts/Monoton-Regular.ttf"),
  });
  /* A condicional abaixo serve apenas para dar um pequeno tempo suficiente para o carregamento do arquivo da fonte antes do return do componente */
  if (!fonteCarregada) return <Text>Fonte sendo carregada...</Text>;

  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.viewLogo}>
        <Image style={estilos.logo} source={logo} />
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
