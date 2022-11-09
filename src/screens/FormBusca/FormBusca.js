import {
  Alert,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import estilos from "./BuscaEstilos.js";

const FormBusca = () => {
  const filmeDigitado = (valorDigitado) => {
    setFilme(valorDigitado);
  };

  /* hook useSate para monitorar/armazenar o filme que será buscado a partir do formulário */
  const [filme, setFilme] = useState("");
  /* Função chamada toda vez que o botão fr pressionado (usamos a prop onPress do button) */
  const buscarFilmes = () => {
    /* Se filme (gerenciado pelo useSate) estiver vazio/undefined/falsy */
    if (!filme) {
      return Alert.alert("Ops!", "Opa! você deve digitar um filme!");
    }
    Alert.alert("Você procurou por: ", filme);
  };
  return (
    <SafeAreaView>
      <Text style={estilos.texto}>
        Star Trek? O Poderoso Chefão? A trilogia Senhor dos Anéis?
      </Text>

      <Text style={estilos.texto}>
        Localize um filme que você viu ou gostaria de ver!
      </Text>

      <View style={estilos.busca}>
        <Ionicons name="film" size={50} color="black" style={estilos.icons} />
        <TextInput
          style={estilos.input}
          onChangeText={filmeDigitado}
          value={filme}
          placeholder="Filme..."
        />
      </View>

      <Pressable style={estilos.botaoInicial} onPress={buscarFilmes}>
        <Text style={estilos.textoBotao}>procurar</Text>
      </Pressable>

      {/* <Button title="procurar" /> */}
    </SafeAreaView>
  );
};
export default FormBusca;
