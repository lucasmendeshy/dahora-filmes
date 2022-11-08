import { SafeAreaView, Text, View, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import estilos from "./Estilos";
import logo from "../../../assets/imagens/logo.png";

const Home = ({ navigation }) => {
  const [fonteCarregada] = useFonts({
    monoton: require("../../../assets/fonts/Monoton-Regular.ttf"),
  });

  if (!fonteCarregada) return <Text>Fonte sendo carregada...</Text>;

  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.viewLogo}>
        <Image style={estilos.logo} source={logo} />
        <Text style={estilos.tituloApp}>Dá Hora Filmes</Text>
      </View>

      <View style={estilos.viewBotoes}>
        <Pressable
          style={estilos.botaoInicial}
          onPress={() => {
            navigation.navigate("FormBusca");
          }}
        >
          <Text style={estilos.textoBotao}>
            <Ionicons name="search" size={16} color="#cccc" /> Buscar Filmes
          </Text>
        </Pressable>

        <Pressable
          style={estilos.botaoInicial}
          onPress={() => {
            navigation.navigate("Favoritos");
          }}
        >
          <Text style={estilos.textoBotao}>
            <Ionicons name="star" size={16} color="gold" /> Favoritos
          </Text>
        </Pressable>
      </View>

      <View style={estilos.viewRodape}>
        <Pressable
          style={estilos.botaoRodape}
          onPress={() => {
            navigation.navigate("Privacidade");
          }}
        >
          <Text style={estilos.textoBotao}>
            <Ionicons name="lock-closed" size={16} color="#cccc" /> Privacidade
          </Text>
        </Pressable>

        <Pressable
          style={estilos.botaoRodape}
          onPress={() => {
            navigation.navigate("Sobre");
          }}
        >
          <Text style={estilos.textoBotao}>
            <Ionicons name="information-circle" size={16} color="#cccc" /> Sobre
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Home;
