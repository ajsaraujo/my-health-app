import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MyHealthModule } from "./src/modules";
import Home from "./src/pages/Home";

export type RouteParams = {
  Home: undefined;
  [MyHealthModule.Calculators]: undefined;
  [MyHealthModule.Codes]: undefined;
  [MyHealthModule.Diary]: undefined;
  [MyHealthModule.Remedies]: undefined;
};

const Stack = createNativeStackNavigator<RouteParams>();

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
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerTitleAlign: "center", title: "My Health" }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
