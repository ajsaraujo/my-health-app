import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack'
import { useFonts } from 'expo-font'

import { MyHealthModule } from './src/modules'
import Calculators from './src/modules/calculators/Calculators'
import Codes from './src/modules/codes/Codes'
import CodeQuery from './src/modules/codes/pages/Consulta'
import Diary from './src/modules/diary/Diary'
import { Login } from './src/modules/login/pages/Login'
import Medicines from './src/modules/medicines/Medicines'
import Home from './src/modules/home/Home'
import { RouteParams } from './src/routeParams'
import { GREEN_700 } from './src/shared/ui/colors'

export const Stack = createNativeStackNavigator<RouteParams>()

export default function App() {
  const components: Record<string, any> = {
    [MyHealthModule.Calculators]: Calculators,
    [MyHealthModule.Codes]: Codes,
    [MyHealthModule.Diary]: Diary,
    [MyHealthModule.Medicines]: Medicines,
  }

  const TITLE_STYLES: Partial<NativeStackNavigationOptions> = {
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: GREEN_700,
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: '600',
      fontFamily: 'Inter-Regular',
    },
  }

  const [fontsLoaded] = useFonts({
    'Inter-Regular': require('./assets/fonts/Inter-Regular.otf'),
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: 'white',
        },
      }}
    >
      {/* Definição de rotas do aplicativo */}
      <Stack.Navigator initialRouteName="Login" screenOptions={TITLE_STYLES}>
        {/* Tela de login */}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        ></Stack.Screen>

        {/* Tela principal (Home) */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'My Health' }}
        ></Stack.Screen>

        {/* Pontos de entrada dos módulos */}
        {Object.values(MyHealthModule).map((module) => (
          <Stack.Screen
            key={module}
            name={module}
            component={components[module]}
          ></Stack.Screen>
        ))}

        {/* Telas do módulo de códigos */}
        <Stack.Screen name="Consulta" component={CodeQuery}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
