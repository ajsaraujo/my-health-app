import { ResetPassword } from '@modules/reset-password/ResetPassword'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack'
import { Toast } from '@shared/ui/components/toast/Toast'
import { useFonts } from 'expo-font'
import { View } from 'react-native'

import { MyHealthModule } from './src/modules'
import Calculators from './src/modules/calculators/Calculators'
import Codes from './src/modules/codes/Codes'
import CodeQuery from './src/modules/codes/pages/Consulta'
import Diary from './src/modules/diary/Diary'
import Article from './src/modules/articles/Articles'
import { NewsForm } from './src/modules/articles/pages/PostArticle'
import { Login } from './src/modules/login/pages/Login'
import Medicines from './src/modules/medicines/Medicines'
import { RouteParams } from './src/routeParams'
import { GREEN_700 } from './src/shared/ui/colors'
import { ToastProvider } from '@shared/ui/components/toast/ToastProvider'
import Home from '@modules/home/Home'
import { LoadingInterceptor } from '@shared/ui/components/loading/LoadingInterceptor'
import { useEffect, useState } from 'react'
import { getSession } from '@shared/services/auth/session'

export const Stack = createNativeStackNavigator<RouteParams>()

export default function App() {
  const components: Record<string, any> = {
    [MyHealthModule.Calculators]: Calculators,
    [MyHealthModule.Codes]: Codes,
    [MyHealthModule.Diary]: Diary,
    [MyHealthModule.Medicines]: Medicines,
    [MyHealthModule.Articles]: Article,
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

  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false)

  useEffect(() => {
    async function fetchSession() {
      const session = await getSession()

      if (session !== null) {
        setUserIsLoggedIn(true)
      }
    }

    fetchSession()
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={{ width: '100%' }}>
      <ToastProvider>
        <LoadingInterceptor></LoadingInterceptor>
        <Toast></Toast>
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
          <Stack.Navigator
            // initialRouteName={userIsLoggedIn ? 'Home' : 'Login'}
            initialRouteName={MyHealthModule.Articles}
            screenOptions={TITLE_STYLES}
          >
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

            {/* Tela de resetar senha */}
            <Stack.Screen
              name="ResetPassword"
              component={ResetPassword}
              options={{
                headerTitle: 'Redefinir senha',
                headerLeft: () => null,
              }}
            ></Stack.Screen>

            {/* Tela de publicar noticias */}
            <Stack.Screen
              name="PublishNews"
              component={NewsForm}
              options={{ title: 'My Health Notícias' }}
            ></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </ToastProvider>
    </View>
  )
}
