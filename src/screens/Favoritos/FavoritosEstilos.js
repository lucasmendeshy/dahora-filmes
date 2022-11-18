import { StyleSheet } from "react-native";
const estilos = StyleSheet.create({
  safeContainer: { flex: 1 },
  container: {
    padding: 8,
    flex: 1,
    backgroundColor: "white",
  },
  /*  botao: {
    padding: 12,
    borderRadius: 5,
    backgroundColor: "#5451a6",
  }, */
  /* textoBotao: {
    color: "white",
    fontSize: 16,
    textTransform: "capitalize",
    textAlign: "center",
  }, */
  itemFilme: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f7f7f7",
    marginVertical: 8,
    borderRadius: 4,
    alignItems: "center",
  },
  botaoExcluir: {
    backgroundColor: "red",
    padding: 8,
    borderRadius: 4,
  },
  cabecalho: {
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  botaoExcluirTudo: {
    borderWidth: 1,
    borderColor: "red",
    padding: 8,
    borderRadius: 4,
  },
  textoExcluirTudo: {
    color: "red",
  },
  titulo: {
    flex: 1,
    fontSize: 14,
  },
});
export default estilos;
