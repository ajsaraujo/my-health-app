import {
  TextInput,
  Image,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native'

export function Login() {
  return (
    <View>
      <Text>E-mail</Text>
      <TextInput></TextInput>

      <Image
        source={require('/assets/my-health-logo.png')}
        style={{ width: 200, height: 200 }}
      ></Image>
      <Text>Senha</Text>
      <TextInput></TextInput>

      <TouchableOpacity>
        <Text>Esqueci minha senha</Text>
      </TouchableOpacity>

      <Button title="Entrar"></Button>

      <TouchableOpacity>
        <Text>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  )
}
