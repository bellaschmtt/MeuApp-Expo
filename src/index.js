import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutScreen from "./screens/AboutScreens";
import HomeScreen from "./screens/HomeScreens";
import SplashScreen from "./screens/SplashScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            title: "Tela chata",
            headerShown: false,
          }}
        />
        <Stack.Screen name="TabsNavigation" component={TabsNavigation}
        options={{
            headerShown: false,
        }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "Tela inicial",
          }}
        />
        <Stack.Screen
          name="AboutScreen"
          component={AboutScreen}
          options={{
            title: "Tela Sobre",
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
      <Tabs.Screen name="HomeScreen" component={HomeScreen} />
      <Tabs.Screen name="OutroScreen" component={HomeScreen} />
    </Tabs.Navigator>
  );
}
