import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";

const App = () => {
  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.viewLogo}>
        <Text>Dá Hora Filmes</Text>
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
    backgroundColor: "yellow",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  viewLogo: {
    flex: 3,
    backgroundColor: "green",
    textAlign: "center",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  viewBotoes: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    backgroundColor: "orange",
    width: "80%",
  },
  viewRodape: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "red",
    width: "80%",
  },
  botao: {
    backgroundColor: "blue",
    fontSize: 20,
    color: "white",
    padding: 20,
    textAlign: "center",
  },
});
