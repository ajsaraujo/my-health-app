import { View, Text } from 'react-native'

import { FormField } from '../../../shared/ui/components/FormField'
import { TextBox } from '../../../shared/ui/components/TextBox'
import { TextButtonUnderline } from '../../../shared/ui/components/TextButton'
import { globalStyles } from '../../../shared/ui/globalStyles'
import { PrimaryButton } from '../../../shared/ui/components/PrimaryButton'
import { PasswordTextBox } from '../../../shared/ui/components/PasswordTextBox'
import { useState } from 'react'

type LoginForm = {
  email: string
  password: string
}

export function Login() {
  const [formValues, setFormValues] = useState<LoginForm>({
    email: '',
    password: '',
  })

  const [submitted, setSubmitted] = useState(false)

  function handleChange(field: keyof LoginForm) {
    return function handlerFn(value: string) {
      setFormValues({
        ...formValues,
        [field]: value,
      })
    }
  }

  function handleLogin() {
    setSubmitted(true)
  }

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
        <TextBox
          value={formValues.email}
          onChangeText={handleChange('email')}
        ></TextBox>
      </FormField>

      <FormField label="Senha">
        <PasswordTextBox
          value={formValues.password}
          onChangeText={handleChange('password')}
        ></PasswordTextBox>
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
        <PrimaryButton style={{ width: '60%' }} onPress={handleLogin}>
          Entrar
        </PrimaryButton>
      </View>

      <TextButtonUnderline
        style={globalStyles.marginTop2}
        textStyle={{ textAlign: 'center' }}
      >
        Cadastrar
      </TextButtonUnderline>

      <LoginFormWarnings
        loginForm={formValues}
        submitted={submitted}
      ></LoginFormWarnings>
    </View>
  )
}

function LoginFormWarnings(props: {
  loginForm: LoginForm
  submitted: boolean
}) {
  return (
    <View style={globalStyles.marginTop3}>
      <Text style={globalStyles.errorMessage}>{getErrorMessage(props)}</Text>
    </View>
  )
}

function getErrorMessage(props: { loginForm: LoginForm; submitted: boolean }) {
  // Usamos um espaço ao invés de string vazia para
  // que o elemento ocupe espaço na tela. Assim, o container
  // não muda de tamanho quando a mensagem de erro aparecer.
  const NO_ERROR_MESSAGE = ' '

  if (!props.submitted) {
    return NO_ERROR_MESSAGE
  }

  const { email, password } = props.loginForm
  if (!email || !password) {
    return 'Por favor, informe seu e-mail e senha.'
  }

  return NO_ERROR_MESSAGE
}
