import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../utils/styles";

export default function HomeScreen({ navigation }) {
    
    
    return (
      <View 
        style={styles.container}
      >
        <Text>Sou a HomeScreen</Text>
        <Button 
        mode="contained"
        onPress={() => { navigation.navigate("AboutScreen")}}
        >Ir para o Sobre</Button>
      </View>
    );
  }