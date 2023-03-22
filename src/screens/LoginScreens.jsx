import { createUserWithEmailAndPassword } from "firebase/auth";
import { TextInput,Button } from "react-native-paper";
import { View } from "react-native-web";
import { auth } from "../config/firebase";
import styles from "../utils/styles";
// import { Button } from "react-native";

export default function LoginScreen() {
  function handleRegister(){
    createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      console.log("Usuário cadastro com sucesso!");
      Navigator.navigate("LoginScreens");
    }
    )
    .catch((error) =>{
      console.log("")
    }
    )
  }
  return (
    <View style={styles.container}>
      <TextInput label="Emai" placeholder="Digite seu email"
      style={{
        marginBottom:"20px",
      }}
      />
      <TextInput
        label="Senha"
        placeholder="Digite sua senha"
        secureTextEntry={true}
        style={{
          marginBottom:"20px",
        }}
      />
      <Button
        style={{
          marginButton:"20px",
        }}
        mode="outlined"
      >
      Entrar
      </Button>
    </View>
  );
}
