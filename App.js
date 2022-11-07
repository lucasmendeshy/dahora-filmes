import { SafeAreaView, Text, View, Image, Pressable } from "react-native";
import { useFonts } from "expo-font";
import estilos from "./estilos";
import logo from "./assets/imagens/logo.png";
import { Ionicons } from "@expo/vector-icons";

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
        <Pressable style={estilos.botaoInicial}>
          <Text style={estilos.textoBotao}>
            <Ionicons name="search" size={16} color="#cccc" /> Buscar Filmes
          </Text>
        </Pressable>

        <Pressable style={estilos.botaoInicial}>
          <Text style={estilos.textoBotao}>
            <Ionicons name="star" size={16} color="gold" /> Favoritos
          </Text>
        </Pressable>
      </View>

      <View style={estilos.viewRodape}>
        <Pressable style={estilos.botaoRodape}>
          <Text style={estilos.textoBotao}>
            <Ionicons name="lock-closed" size={16} color="#cccc" /> Privacidade
          </Text>
        </Pressable>

        <Pressable style={estilos.botaoRodape}>
          <Text style={estilos.textoBotao}>
            <Ionicons name="information-circle" size={16} color="#cccc" /> Sobre
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
export default App;
