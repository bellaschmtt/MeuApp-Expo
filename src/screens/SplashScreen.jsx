import { View } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import styles from "../utils/styles";

export default function SplashScreen({ navigation }) {
  setTimeout(() => {
    navigation.navigate("TabsNavigation");
  }, 3000);
  return (
    <View style={styles.container}>
      <ActivityIndicator />
      <Text>Aguarde um Minuto...</Text>
    </View>
  );
}
// isso é uma tela que confirma se o personagem esta logado, 