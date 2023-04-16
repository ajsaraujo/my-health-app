import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Text, View } from 'react-native'

import { MyHealthModule } from '../../modules'
import { RouteParams } from '../../routeParams'
import { GREEN } from '../../shared/ui/colors'
import { PrimaryButton } from '../../shared/ui/components/PrimaryButton'
import { TextBox } from '../../shared/ui/components/TextBox'
import { globalStyles } from '../../shared/ui/globalStyles'

type CodesProps = NativeStackScreenProps<RouteParams, MyHealthModule.Codes>

export default function Codes(props: CodesProps) {
  const { navigation } = props

  function search() {
    navigation.navigate('Consulta', { name: 'Consulta' })
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>MyHealth</Text>
      <Text>Módulo Consulta de Códigos</Text>

      <TextBox
        style={globalStyles.marginTop1}
        placeholder="Digite o código"
      ></TextBox>

      <PrimaryButton onPress={search}>Buscar</PrimaryButton>
    </View>
  )
}
