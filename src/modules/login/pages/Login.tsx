import { Pressable, Text, View } from 'react-native'

import { FormField } from '../../../shared/ui/components/FormField'
import { TextBox } from '../../../shared/ui/components/TextBox'
import { TextButtonUnderline } from '../../../shared/ui/components/TextButton'
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
      <FormField style={{ marginBottom: 16 }} label="E-mail">
        <TextBox></TextBox>
      </FormField>

      <FormField label="Senha">
        <TextBox></TextBox>
      </FormField>

      <TextButtonUnderline style={{ marginTop: 8 }}>
        Esqueci minha senha
      </TextButtonUnderline>

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

      <TextButtonUnderline
        style={{ marginTop: 16 }}
        textStyle={{ textAlign: 'center' }}
      >
        Cadastrar
      </TextButtonUnderline>
    </View>
  )
}
