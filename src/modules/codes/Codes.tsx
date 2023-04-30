import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, Text, Button } from 'react-native'
import { MyHealthModule } from '../../modules'
import { RouteParams } from '../../routeParams'
import { PrimaryButton } from '../../shared/ui/components/PrimaryButton'
import { TextBox } from '../../shared/ui/components/TextBox'
import { globalStyles } from '../../shared/ui/globalStyles'
import { StyledText } from '../../shared/ui/components/StyledText'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CodeQuery from './pages/Consulta'
import CodeQuery2 from './pages/ConsultaCid11'
import { CIAN, GREEN, LIGHT_BLACK, LIGHT_GREY } from '@shared/ui/colors'
import CodeQuery3 from './pages/ConsultaCif'
import { Picker } from '@react-native-picker/picker'
import CodeQuery4 from './pages/Favoritos'
import { useState } from 'react'

type CodesProps = NativeStackScreenProps<RouteParams, MyHealthModule.Codes>

const Tab = createBottomTabNavigator()

export default function Codes(props: CodesProps) {
  const { navigation } = props
  const [selectedOption, setSelectedOption] = useState('')
  const [query, setQuery] = useState('')
  const [inputValue, setInputValue] = useState('') // useState para mexer de acordo com a busca na textBox
  const [response, setResponse] = useState('')
  const handlePress = () => {
    // função para concluir a requisição

    console.log(
      `http://192.168.0.106:8080/codigoCid10/${inputValue.toLowerCase()}`
    )

    fetch(`http://192.168.0.106:8080/codigoCid10/${inputValue.toLowerCase()}`, {
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(JSON.stringify(data))
        setResponse(JSON.stringify(data))
      })
      .catch((error) => {
        console.error(error)
      })
    console.log(response)
  }

  const ConsultarCodigoScreen = () => {
    return (
      <View style={{ backgroundColor: CIAN, flex: 1 }}>
        <StyledText
          style={[
            globalStyles.marginBottom1,
            globalStyles.marginTop8,
            globalStyles.fontSize4,
            { textAlign: 'center', fontFamily: 'Arial' },
          ]}
        >
          My
          <Text style={[{ textAlign: 'center', fontWeight: 'bold' }]}>
            Health
          </Text>
        </StyledText>
        <StyledText
          style={[
            globalStyles.marginBottom1,
            globalStyles.fontSize2,
            { textAlign: 'center' },
          ]}
        >
          Módulo Consulta de Códigos
        </StyledText>

        <View style={[globalStyles.centerHorizontally]}>
          <Picker
            selectedValue={selectedOption}
            onValueChange={(value) => setSelectedOption(value)}
            style={[
              globalStyles.marginTop5,
              {
                borderRadius: 14,
                borderColor: CIAN,
                backgroundColor: '#f0f8ff',
                padding: 16,
                width: '30%',
              },
            ]}
          >
            <Picker.Item label="Selecione a Tabela" value="ponto0" />
            <Picker.Item label="CID-10" value="CID-10" />
            <Picker.Item label="CID-11" value="CID-11" />
            <Picker.Item label="CIF" value="CIF" />
            <Picker.Item label="Tab-Sus" value="TAB-SUS" />
          </Picker>

          <TextBox
            style={[
              globalStyles.marginTop5,
              {
                borderColor: CIAN,
                backgroundColor: '#f0f8ff',
                padding: 16,
                width: '60%',
              },
            ]}
            placeholder="Digite o código"
            value={inputValue}
            onChangeText={setInputValue}
          ></TextBox>
        </View>
        <View style={globalStyles.centerHorizontally}>
          <PrimaryButton
            style={[
              globalStyles.marginTop5,
              { backgroundColor: '#ffffff', width: '30%' },
            ]}
            textStyle={{ color: '#000000' }}
            onPress={() => {
              if (selectedOption === 'CID-10') {
                handlePress()
                navigation.navigate('Consulta', { cid10: 'Consulta' })
              } else if (selectedOption === 'CID-11') {
                navigation.navigate('ConsultaCid11', { cid11: 'Consulta' })
              } else if (selectedOption === 'CIF') {
                navigation.navigate('ConsultaCif', { cif: 'Consulta' })
              }
            }}
          >
            Buscar
          </PrimaryButton>
        </View>
      </View>
    )
  }

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Consultar códigos"
        component={ConsultarCodigoScreen}
      ></Tab.Screen>
      <Tab.Screen name="Meus favoritos" component={CodeQuery4}></Tab.Screen>
    </Tab.Navigator>
  )
}
