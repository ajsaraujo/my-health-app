import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View } from 'react-native'

import { MyHealthModule } from '../../modules'
import { RouteParams } from '../../routeParams'
import { PrimaryButton } from '../../shared/ui/components/PrimaryButton'
import { TextBox } from '../../shared/ui/components/TextBox'
import { globalStyles } from '../../shared/ui/globalStyles'
import { StyledText } from '../../shared/ui/components/StyledText'

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
