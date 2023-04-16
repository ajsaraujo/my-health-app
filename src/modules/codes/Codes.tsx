import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { MyHealthModule } from '../../modules'
import { RouteParams } from '../../routeParams'

type CodesProps = NativeStackScreenProps<RouteParams, MyHealthModule.Codes>

export default function Codes(props: CodesProps) {
  const { navigation } = props

  return (
    <View
      style={{
        backgroundColor: '#258F45',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>MyHealth</Text>
      <Text>Módulo Consulta de Códigos</Text>
      <TextInput
        style={{
          marginTop: 12,
          backgroundColor: 'grey',
          padding: 10,
          fontSize: 30,
        }}
        placeholder="Digite o código"
        placeholderTextColor="#272626"
      />
      <TouchableOpacity
        style={{ padding: 20, backgroundColor: 'green' }}
        onPress={() =>
          navigation.navigate('Consulta', {
            name: 'Consulta',
          })
        }
      >
        <Text>Buscar</Text>
      </TouchableOpacity>
    </View>
  )
}
