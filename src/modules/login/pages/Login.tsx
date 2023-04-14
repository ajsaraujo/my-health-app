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
    <View>
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

      <TouchableOpacity>
        <Text style={globalStyles.textButton}>Esqueci minha senha</Text>
      </TouchableOpacity>

      <Pressable style={globalStyles.primaryButton}>
        <Text style={globalStyles.primaryButton.text}>Entrar</Text>
      </Pressable>

      <TouchableOpacity>
        <Text style={globalStyles.textButton}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  )
}
