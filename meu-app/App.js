import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.card}>
        <Image source={require("./assets/Emerson.png")} style={styles.foto} />
        <Text style={styles.nome}>Emerson Willian do Nascimento Dias</Text>
        <Text style={styles.bio}>
          Estudante de Ciência da Computação na Universidade Católica de
          Pernambuco, cursando o 5º período. Tenho interesse em
          desenvolvimento de software e estou em busca do meu primeiro
          estágio na área de TI.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  card: { alignItems: "center", maxWidth: 420 },
  foto: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 4,
    borderColor: "#38bdf8",
    marginBottom: 20,
  },
  nome: {
    fontSize: 28,
    fontWeight: "800",
    color: "#38bdf8",
    textAlign: "center",
    marginBottom: 16,
  },
  bio: {
    fontSize: 16,
    lineHeight: 24,
    color: "#e2e8f0",
    textAlign: "center",
  },
});