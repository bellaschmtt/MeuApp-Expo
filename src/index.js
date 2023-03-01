
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutScreen from "./screens/AboutScreens";
import HomeScreen from "./screens/HomeScreens";

const Stack = createNativeStackNavigator();

export default function RootNavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{
                        title:"Tela inicial",
                    }}
                />
                <Stack.Screen
                    name="AboutScreen"
                    component={AboutScreen}
                    options={{
                        title:"Tela Sobre",
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
