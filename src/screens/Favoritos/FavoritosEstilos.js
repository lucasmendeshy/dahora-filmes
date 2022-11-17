import { StyleSheet } from "react-native";
const estilos = StyleSheet.create({
  safeContainer: { flex: 1 },
  container: {
    padding: 8,
    flex: 1,
  },
  botao: {
    padding: 12,
    borderRadius: 5,
    backgroundColor: "#5451a6",
  },
  textoBotao: {
    color: "white",
    fontSize: 16,
    textTransform: "capitalize",
    textAlign: "center",
  },
  itemFilme: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ccc",
    marginVertical: 8,
    borderRadius: 4,
    alignItems: "center",
  },
  botaoExcluir: {
    backgroundColor: "red",
    padding: 12,
    borderRadius: 4,
  },
});
export default estilos;
