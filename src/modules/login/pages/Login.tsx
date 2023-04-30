import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { authenticate } from '@shared/services/auth/auth'
import {
  FormField,
  PasswordTextBox,
  PrimaryButton,
  SecondaryButton,
  StyledText,
  TextBox,
  TextButtonUnderline,
} from '@shared/ui/components'
import { useToastActions } from '@shared/ui/components/toast/ToastProvider'
import { globalStyles } from '@shared/ui/globalStyles'
import { useState } from 'react'
import { View } from 'react-native'

import { RouteParams } from '../../../routeParams'

type LoginForm = {
  email: string
  password: string
}

type LoginProps = NativeStackScreenProps<RouteParams, 'Login'>

export function Login(props: LoginProps) {
  const [formValues, setFormValues] = useState<LoginForm>({
    email: '',
    password: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const toast = useToastActions()

  /**
   * TO DO: Pesquisar se existem formas melhores de capturar mudanças
   * em formulários. Se não houver, extrair essa função para a área compartilhada.
   */
  function handleChange(field: keyof LoginForm) {
    return function handlerFn(value: string) {
      setFormValues({
        ...formValues,
        [field]: value,
      })
    }
  }

  async function handleLogin() {
    setSubmitted(true)

    if (validateForm(formValues).valid) {
      const result = await authenticate(formValues.email, formValues.password)

      console.log(`Resultado ok? ${result.isOk}`)

      if (result.isOk) {
        toast.success('Bem vindo ao My Health!')
        goToHome()
      } else {
        toast.error(result.message)
      }
    }
  }

  function goToHome() {
    props.navigation.navigate('Home')
  }

  function resetPassword() {
    props.navigation.push('ResetPassword')
  }

  return (
    <View
      style={{
        padding: 50,
        width: '100%',
        ...globalStyles.centerVertically,
      }}
    >
      <FormField style={globalStyles.marginBottom2} label="E-mail">
        <TextBox
          inputMode="email"
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

      <TextButtonUnderline
        style={globalStyles.marginTop1}
        onPress={resetPassword}
      >
        Esqueci minha senha
      </TextButtonUnderline>

      <View
        style={{
          marginTop: 56,
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          rowGap: 16,
        }}
      >
        <PrimaryButton
          style={{ ...globalStyles.elevation1, width: '100%' }}
          onPress={handleLogin}
        >
          Entrar
        </PrimaryButton>
        <SecondaryButton style={{ width: '100%' }}>Cadastrar</SecondaryButton>
      </View>

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
  const { loginForm, submitted } = props

  const errorMessage = submitted ? validateForm(loginForm).message : ' '

  return (
    <View style={globalStyles.marginTop3}>
      <StyledText style={globalStyles.errorMessage}>{errorMessage}</StyledText>
    </View>
  )
}

function validateForm(form: LoginForm) {
  if (!form.email || !form.password) {
    return { valid: false, message: 'Por favor, informe seu e-mail e senha.' }
  }

  // Retornamos um espaço em branco ao invés de uma string vazia
  // para que o elemento ocupe espaço na página mesmo quando não houver erro.
  // Assim, quando um erro aparecer, a página não mudará de tamanho.
  return { valid: true, message: ' ' }
}
