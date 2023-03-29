import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreens";
import LoginScreen from "./screens/LoginScreens";
// import AboutScreen from "./screens/AboutScreen"
import CadastroScreens from "./screens/CadastroScreens";
import SplashScreen from "./screens/SplashScreen";
import RegisterScreens from "./screens/RegisterScreens";
import FetchNews from "./screens/FetchNews";
import RickMorty from "./screens/RickMorty";
// import { Image } from "react-native-web";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          // <Image source={require('<iframe src="https://giphy.com/embed/tXL4FHPSnVJ0A" width="480" height="317" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/kim-novak-tXL4FHPSnVJ0A">via GIPHY</a></p>')} />
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TabsNavigation"
          component={TabsNavigation}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Tabs = createMaterialBottomTabNavigator();

function TabsNavigation() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="RickMorty" component={RickMorty} />
      <Tabs.Screen name="HomeScreen" component={HomeScreen} />
      <Tabs.Screen name="LoginScreen" component={LoginScreen} />
      <Tabs.Screen name="CadastroScreen" component={RegisterScreens} />
      <Tabs.Screen name="FetchNews" component={FetchNews} />
      
    </Tabs.Navigator>
  );
}
