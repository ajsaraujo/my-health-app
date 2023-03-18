import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack'
import { MyHealthModule } from './src/modules'
import Calculators from './src/modules/calculators/Calculators'
import Codes from './src/modules/codes/Codes'
import Diary from './src/modules/diary/Diary'
import Remedies from './src/modules/remedies/Remedies'
import Home from './src/pages/Home'
import { RouteParams } from './src/routeParams'

const Stack = createNativeStackNavigator<RouteParams>()

export default function App() {
  const components: Record<string, any> = {
    [MyHealthModule.Calculators]: Calculators,
    [MyHealthModule.Codes]: Codes,
    [MyHealthModule.Diary]: Diary,
    [MyHealthModule.Remedies]: Remedies,
  }

  const TITLE_STYLES: Partial<NativeStackNavigationOptions> = {
    headerTitleAlign: 'center',
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
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ ...TITLE_STYLES, title: 'My Health' }}
        ></Stack.Screen>

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
