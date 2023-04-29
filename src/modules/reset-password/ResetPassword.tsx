import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { InsertNewPassword, InsertPinCode, Success, InsertEmail } from './pages'
import { ResetPasswordRouteParams } from './ResetPasswordRouteParams'

const Stack = createNativeStackNavigator<ResetPasswordRouteParams>()

export function ResetPassword() {
  return (
    <Stack.Navigator
      initialRouteName="InsertEmail"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="InsertEmail" component={InsertEmail}></Stack.Screen>
      <Stack.Screen
        name="InsertPinCode"
        component={InsertPinCode}
      ></Stack.Screen>
      <Stack.Screen
        name="InsertNewPassword"
        component={InsertNewPassword}
      ></Stack.Screen>
      <Stack.Screen name="Success" component={Success}></Stack.Screen>
    </Stack.Navigator>
  )
}
