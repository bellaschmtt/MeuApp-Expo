import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";


export default function App() {
  return <RootNavigation />;
  
}
const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



/*
{
   function SobreScreen(){
  return(
    <View>
      <Text>Isabella</Text>
      <Text>OI, estude enquanto eles dorme!no</Text>
      <Image source={{
        uri: 'https://picsum.photos/300/300'
      }}
      style={{
        height:'300px',
        width:'300px'
      }}
      />
    </View>
  )
}
function ContatoScreen(){
  return(
    <View>
      <Text>isabellaschmitz00@gmail.com</Text>
      <Text>Fone: 47 97951173</Text>
    </View>
  )
}
function SurpresaScreen(){
  return(
    <View>
      <Text>foda-se</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 
}*/
