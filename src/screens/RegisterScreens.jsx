// essa é uma tela de cadastro que o sor fez mas a minha ta como cadastro
import { useState } from "react";
import { View } from "react-native";
import { Button, Paragraph, TextInput } from "react-native-paper";
import styles from "../utils/styles";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
export default function RegisterScreens({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  //   função para lidar com o registro do usuário
  //função assincona termina com ".then()"
  function handleRegister() {
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        console.log("Usuário cadastrado com sucesso!");
        navigation.navigate("LoginScreen");
        // acima a tela de cadastro direciona para login
      })
      .catch((error) => {
        console.log("erro ao cadastrar usuário!", error);

        // codigo de erro
        const errorCode = error.code; //auth/wear-password
        // mensagem de erro
        if (errorCode === "auth/weak-password") {
          console.log("Senha muito fraca!");
        }
        if (errorCode === "auth/email-already-in-use") {
          console.log("E-mail já cadastro!");
        }
        if (errorCode === "auth/invalid-email") {
          console.log("E-mail inválido!");
        }
      });
  }

  return (
    <View style={styles.box}>
      <View>
        <Paragraph>Olá eu sou a Register Screen</Paragraph>
        <TextInput
          label="Email"
          placeholder="Digite seu Email"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
        />
        <TextInput
          placeholder="Digite sua Senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
          mode="outlined"
        />

        <Button onPress={handleRegister}>Registre-se</Button>
      </View>
    </View>
  );
}
