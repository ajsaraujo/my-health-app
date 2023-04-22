import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View } from 'react-native'

import { MyHealthModule } from '../../modules'
import { RouteParams } from '../../routeParams'
import { PrimaryButton } from '../../shared/ui/components/PrimaryButton'
import { TextBox } from '../../shared/ui/components/TextBox'
import { globalStyles } from '../../shared/ui/globalStyles'
import { StyledText } from '../../shared/ui/components/StyledText'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CodeQuery from './pages/Consulta'
import CodeQuery2 from './pages/ConsultaCid11'

type CodesProps = NativeStackScreenProps<RouteParams, MyHealthModule.Codes>

const Tab = createBottomTabNavigator()

export default function Codes(props: CodesProps) {
  const { navigation } = props

  function search() {
    navigation.navigate('ConsultaCif', { cif: 'ConsultaCif' })
  }

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Consultar códigos" component={CodeQuery}></Tab.Screen>
      <Tab.Screen name="Meus favoritos" component={CodeQuery2}></Tab.Screen>
    </Tab.Navigator>
  )

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <StyledText>MyHealth</StyledText>
      <StyledText>Módulo Consulta de Códigos</StyledText>

      <TextBox
        style={globalStyles.marginTop1}
        placeholder="Digite o código"
      ></TextBox>

      <PrimaryButton onPress={search}>Buscar</PrimaryButton>
    </View>
  )
}
