import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home/Home";
import React from "react";
import FormBusca from "./src/screens/FormBusca/FormBusca";
import Favoritos from "./src/screens/Favoritos/Favoritos";
import Sobre from "./src/screens/Sobre/Sobre";
import Privacidade from "./src/screens/Privacidade/Privacidade";

const App = () => {
  /* Inicializando através de uma constante o gerenciador de navegação Stack (plhas de telas) */
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar />
      {/* O navigationContainer deve envolver todas as telas navegáveis do nosso App.  */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen component={Home} name="Home" />
          <Stack.Screen component={FormBusca} name="FormBusca" />
          <Stack.Screen component={Favoritos} name="Favoritos" />
          <Stack.Screen component={Privacidade} name="Privacidade" />
          <Stack.Screen component={Sobre} name="Sobre" />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;
