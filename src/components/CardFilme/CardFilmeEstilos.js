import { StyleSheet } from "react-native";
const estilos = StyleSheet.create({
  imagem: {
    flex: 1,
    height: 150,
    width: 100,
    borderRadius: 3,
  },
  card: {
    marginVertical: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "black",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  corpo: {
    flex: 2,
  },
  titulo: {
    backgroundColor: "#5451a6",
    color: "white",
    fontSize: 16,
    paddingVertical: 8,
    textAlign: "center",
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 8,
  },
  botao: {
    padding: 12,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: "#5451a6",
  },
  textoBotao: {
    color: "white",
    fontSize: 12,
    textTransform: "uppercase",
  },
});
export default estilos;
