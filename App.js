import { Pressable, StatusBar, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home/Home";
import React from "react";
import FormBusca from "./src/screens/FormBusca/FormBusca";
import Favoritos from "./src/screens/Favoritos/Favoritos";
import Sobre from "./src/screens/Sobre/Sobre";
import Privacidade from "./src/screens/Privacidade/Privacidade";
import Resultados from "./src/screens/Resultados/Resultados";
import Detalhes from "./src/screens/Detalhes/Detalhes";
import estilos from "./src/screens/Detalhes/DetalhesEstilos";

const App = () => {
  /* Inicializando através de uma constante o gerenciador de navegação Stack (plhas de telas) */
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar />
      {/* O navigationContainer deve envolver todas as telas navegáveis do nosso App.  */}
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#5451a6",
            },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            component={Home}
            name="Home"
            /* headerShown -> exibição do cabeçalho do menu */
            options={{ headerShown: false }}
          />

          <Stack.Screen
            component={FormBusca}
            name="FormBusca"
            options={{ title: "Buscar Filmes" }}
          />

          <Stack.Screen component={Favoritos} name="Favoritos" />
          <Stack.Screen component={Privacidade} name="Privacidade" />
          <Stack.Screen component={Sobre} name="Sobre" />
          <Stack.Screen component={Resultados} name="Resultados" />
          <Stack.Screen
            component={Detalhes}
            name="Detalhes"
            options={({ navigation }) => {
              return {
                headerRight: () => (
                  <Pressable
                    onPress={() => navigation.navigate("Home")}
                    style={estilos1.botao}
                  >
                    <Text style={estilos1.texto}>Home</Text>
                  </Pressable>
                ),
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;

const estilos1 = StyleSheet.create({
  botao: {
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: "black",
  },
  texto: {
    color: "white",
    fontSize: 12,
    textTransform: "capitalize",
  },
});
