import { StatusBar } from "react-native";
import Home from "./src/screens/Home/Home";
import React from "react";
import FormBusca from "./src/screens/FormBusca/FormBusca";
import Favoritos from "./src/screens/Favoritos/Favoritos";
import Sobre from "./src/screens/Sobre/Sobre";
import Privacidade from "./src/screens/Privacidade/Privacidade";

const App = () => {
  return (
    /* opções para o barstyle:
    dark-content, light-content, default */
    <>
      <StatusBar barstyle="default" />
      <Privacidade />
    </>
  );
};
export default App;
