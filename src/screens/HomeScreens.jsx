import { View } from "react-native";
import { Button, Text } from "react-native-paper";

function HomeScreen() {
    return (
      <View>
        <Text>Sou a HomeScreen</Text>
        <Button mode="contained">Ir para o Sobre</Button>
      </View>
    );
  }