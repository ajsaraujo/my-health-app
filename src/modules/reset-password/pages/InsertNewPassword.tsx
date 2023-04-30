import { NativeStackScreenProps } from '@react-navigation/native-stack'
import {
  FormField,
  PasswordTextBox,
  PrimaryButton,
  StyledText,
} from '@shared/ui/components'
import { globalStyles } from '@shared/ui/globalStyles'
import { useState } from 'react'
import { View } from 'react-native'
import { ResetPasswordRouteParams } from '../ResetPasswordRouteParams'
import { useToastActions } from '@shared/ui/components/toast/ToastProvider'

type InsertNewPasswordProps = NativeStackScreenProps<
  ResetPasswordRouteParams,
  'InsertNewPassword'
>

export function InsertNewPassword(props: InsertNewPasswordProps) {
  const [formValues, setFormValues] = useState({
    password: '',
    passwordConfirmation: '',
  })
  const [errorMessage, setErrorMessage] = useState('')
  const toast = useToastActions()

  function handleSubmit() {
    const { password, passwordConfirmation } = formValues

    if (!password) {
      setErrorMessage('Por favor, insira a sua senha.')
      return
    }

    if (!passwordConfirmation) {
      setErrorMessage('Por favor, confirme a sua senha.')
      return
    }

    if (password !== passwordConfirmation) {
      setErrorMessage(
        'As senhas estão diferentes. Por favor, digite a mesma senha nos dois campos.'
      )
      return
    }

    goToLoginPage()
    toast.success('Sua senha foi redefinida com sucesso.')
  }

  function goToLoginPage() {
    props.navigation.pop()
  }

  return (
    <View
      style={{
        ...globalStyles.defaultContainer,
        ...globalStyles.centerVertically,
      }}
    >
      <StyledText style={globalStyles.marginBottom2}>
        Insira sua nova senha.
      </StyledText>

      <FormField label="Senha" style={globalStyles.marginBottom1}>
        <PasswordTextBox
          value={formValues.password}
          onChangeText={(password) =>
            setFormValues({ ...formValues, password })
          }
        ></PasswordTextBox>
      </FormField>

      <FormField label="Confirmação de senha">
        <PasswordTextBox
          value={formValues.passwordConfirmation}
          onChangeText={(passwordConfirmation) =>
            setFormValues({ ...formValues, passwordConfirmation })
          }
        ></PasswordTextBox>
      </FormField>

      <PrimaryButton onPress={handleSubmit} style={globalStyles.marginTop3}>
        Redefinir senha
      </PrimaryButton>

      {errorMessage && (
        <StyledText
          style={{
            ...globalStyles.errorMessage,
            textAlign: 'center',
            ...globalStyles.marginTop1,
          }}
        >
          {errorMessage}
        </StyledText>
      )}
    </View>
  )
}
