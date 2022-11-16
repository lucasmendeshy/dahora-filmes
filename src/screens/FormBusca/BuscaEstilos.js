import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  texto: { fontSize: 18, marginVertical: 8, margin: 10 },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "80%",
    marginLeft: 10,
  },
  busca: {
    flexDirection: "row",
  },
  icons: {
    margin: 6,
  },
  botaoInicial: {
    borderStyle: "solid",
    borderWidth: 2,
    padding: 10,
    backgroundColor: "#5451a6",
    borderRadius: 5,
    margin: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  textoBotao: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    textTransform: "capitalize",
  },
});
export default estilos;
