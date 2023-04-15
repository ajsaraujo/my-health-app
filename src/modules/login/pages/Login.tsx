import { View } from 'react-native'

import { FormField } from '../../../shared/ui/components/FormField'
import { TextBox } from '../../../shared/ui/components/TextBox'
import { TextButtonUnderline } from '../../../shared/ui/components/TextButton'
import { globalStyles } from '../../../shared/ui/globalStyles'
import { PrimaryButton } from '../../../shared/ui/components/PrimaryButton'

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
      <FormField style={globalStyles.marginBottom2} label="E-mail">
        <TextBox></TextBox>
      </FormField>

      <FormField label="Senha">
        <TextBox></TextBox>
      </FormField>

      <TextButtonUnderline style={globalStyles.marginTop1}>
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
        <PrimaryButton style={{ width: '60%' }}>Entrar</PrimaryButton>
      </View>

      <TextButtonUnderline
        style={globalStyles.marginTop2}
        textStyle={{ textAlign: 'center' }}
      >
        Cadastrar
      </TextButtonUnderline>
    </View>
  )
}
