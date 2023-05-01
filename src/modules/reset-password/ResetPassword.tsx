import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { InsertEmail, InsertPinCode } from './pages'
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
    </Stack.Navigator>
  )
}
