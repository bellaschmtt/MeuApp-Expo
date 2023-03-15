import { TextInput } from "react-native-paper";
import { View } from "react-native-web";
import styles from "../utils/styles";

export default function LoginScreen(){
    return (
        <View style={styles.container}>
            <TextInput label="Emai" placeholder="Digite seu email"/>
            <TextInput label="Senha" placeholder="Digite sua senha" secureTextEntry={true}/>
        </View>
    )
}