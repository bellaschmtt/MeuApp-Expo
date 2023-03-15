import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../utils/styles";

export default function HomeScreen({ navigation }) {
  setTimeout(() => {
    navigation.navigate("TabNavigator");
  }, 3000);

  return (
    <View style={styles.container}>
      <Text>Sou a HomeScreen</Text>
      <Button
        mode="outlined"
        onPress={() => {
          navigation.navigate("AboutScreen");
        }}
        // style={{
        //   marginBottom: "20px",
        // }}
      >
        Ir para o Sobre com espaço
      </Button>
      <Button
        mode="outlined"
        onPress={() => {
          navigation.navigate("AboutScreen");
        }}
      >
        Ir para o Sobre
      </Button>
    </View>
  );
}
