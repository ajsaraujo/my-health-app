import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/pages/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: "white",
        },
      }}
    >
      <Stack.Navigator initialRouteName="My Health">
        <Stack.Screen
          name="My Health"
          component={Home}
          options={{ headerTitleAlign: "center" }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
