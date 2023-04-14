import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack'
import { MyHealthModule } from './src/modules'
import Calculators from './src/modules/calculators/Calculators'
import Codes from './src/modules/codes/Codes'
import Diary from './src/modules/diary/Diary'
import Medicines from './src/modules/medicines/Medicines'
import Home from './src/pages/Home'
import { RouteParams } from './src/routeParams'
import { GREEN } from './src/shared/ui/colors'

const Stack = createNativeStackNavigator<RouteParams>()

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
      backgroundColor: GREEN,
    },
    headerTintColor: 'white',
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
      <Stack.Navigator initialRouteName="Home">
        {/* Tela principal (Home) */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ ...TITLE_STYLES, title: 'My Health' }}
        ></Stack.Screen>

        {/* Módulos */}
        {Object.values(MyHealthModule).map((module) => (
          <Stack.Screen
            key={module}
            name={module}
            component={components[module]}
            options={TITLE_STYLES}
          ></Stack.Screen>
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
