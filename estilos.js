import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  viewLogo: {
    flex: 3,
    // width: "80%",
    textAlign: "center",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 128,
    height: 128,
  },
  tituloApp: {
    fontSize: 32,
    fontFamily: "monoton",
    color: "#5451a6",
    // ",fontWeight: "bold
  },
  viewBotoes: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    width: "80%",
  },
  viewRodape: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  botao: {
    backgroundColor: "blue",
    fontSize: 20,
    color: "white",
    padding: 10,
    textAlign: "center",
  },
});

export default estilos;
