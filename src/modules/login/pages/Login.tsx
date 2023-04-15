import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native'
import { globalStyles } from '../../../shared/ui/globalStyles'
import { FormField } from '../../../shared/ui/components/FormField'

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
      <FormField style={{ marginBottom: 16 }} label="E-mail">
        <TextInput style={globalStyles.textInput}></TextInput>
      </FormField>

      <FormField label="Senha">
        <TextInput style={globalStyles.textInput}></TextInput>
      </FormField>

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
