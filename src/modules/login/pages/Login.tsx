import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native'
import { globalStyles } from '../../../shared/ui/globalStyles'

export function Login() {
  return (
    <View
      style={{
        padding: 50,
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* <Image
        source={require('/assets/my-health-logo.png')}
        style={{ width: 200, height: 200 }}
      ></Image> */}

      <View style={{ marginBottom: 16 }}>
        <Text style={globalStyles.textInputLabel}>E-mail</Text>
        <TextInput style={globalStyles.textInput}></TextInput>
      </View>

      <Text style={globalStyles.textInputLabel}>Senha</Text>
      <TextInput style={globalStyles.textInput}></TextInput>

      <TouchableOpacity style={{ marginTop: 8 }}>
        <Text style={globalStyles.textButton}>Esqueci minha senha</Text>
      </TouchableOpacity>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          marginTop: 56,
        }}
      >
        <Pressable
          style={{
            ...globalStyles.primaryButton,
            width: '60%',
          }}
        >
          <Text style={globalStyles.primaryButton.text}>Entrar</Text>
        </Pressable>
      </View>

      <TouchableOpacity style={{ marginTop: 16 }}>
        <Text style={{ ...globalStyles.textButton, textAlign: 'center' }}>
          Cadastrar
        </Text>
      </TouchableOpacity>
    </View>
  )
}
