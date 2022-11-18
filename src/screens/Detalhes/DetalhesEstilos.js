import { StyleSheet } from "react-native";
const estilos = StyleSheet.create({
  safeContainer: { flex: 1 },
  container: {
    flex: 1,
    /* aplicando aqui pois no ios nao funciona direto no SafeAreaView */
    //padding: 8,
  },
  imagem: {
    height: 400,
    justifyContent: "center",
  },
  conteudo: {
    flex: 1, // Ncessário para o scrollview funcionar
    padding: 16,
  },
  descricao: {
    fontSize: 16,
    lineHeight: 20,
    marginVertical: 8,
  },
  titulo: {
    backgroundColor: "rgba(0,0,0, 0.75)",
    color: "white",
    textAlign: "center",
    padding: 16,
    fontWeight: "bold",
    fontSize: 16,
  },
  strong: {
    fontWeight: "bold",
  },
});
export default estilos;
