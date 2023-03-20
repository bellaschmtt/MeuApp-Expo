import { Button, TextInput } from "react-native-paper";
import { View } from "react-native-web";
import styles from "../utils/styles";


export default function CadastroScreens(){
    return(
        <View style={styles.container}>
            
            <TextInput label="Nome" placeholder="Nome"
            style={{
                marginBottom: "20px",
            }}/>
            <TextInput label="Email" placeholder="Email"
            style={{marginBottom: "20px",
            }} />
            <TextInput 
            label="Senha"
            placeholder="Digite sua senha"
            secureTextEntry={true}
            style={{
                marginBottom:"20px",
            }}
            />
            <Button mode="outlined"
            style={{
                marginBottom:"20px",
            }}
            > Enviar</Button>
           
        </View>
    );
}