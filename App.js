import { StatusBar } from "react-native";
import Home from "./src/screens/Home/Home";
import React from "react";
import FormBusca from "./src/screens/FormBusca/FormBusca";
import Favoritos from "./src/screens/Favoritos/Favoritos";

const App = () => {
  return (
    /* opções para o barstyle:
    dark-content, light-content, default */
    <>
      <StatusBar barstyle="default" />
      <Favoritos />
    </>
  );
};
export default App;
