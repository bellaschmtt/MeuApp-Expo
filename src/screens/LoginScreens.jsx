import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { auth } from "../config/firebase";
import styles from "../utils/styles";
export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  function handleLogin() {
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        console.log("Usuário logado com sucesso");
        navigation.navigate("HomeScreen");
      })
      .catch((error) => {
        console.log("Erro ao logar usuário", error);
        const errorCode = error.code;
        if (errorCode === "auth/wrong-password") {
          alert("Senha incorreta.");
        }
      });
  }
  return (
    <View style={styles.container}>
      <Text>Pág. Login</Text>
      <TextInput
        label="Email"
        placeholder="Digite seu E-mail"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        label="Senha"
        placeholder="Digite sua senha"
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
      />

      <Button mode="contained" onPress={handleLogin}>
        Entrar
      </Button>
    </View>
  );
}
