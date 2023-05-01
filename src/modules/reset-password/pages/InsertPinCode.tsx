import {
  FormField,
  PasswordTextBox,
  PrimaryButton,
  SecondaryButton,
  StyledText,
  TextBox,
} from '@shared/ui/components'
import { globalStyles } from '@shared/ui/globalStyles'
import { View, StyleSheet } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ResetPasswordRouteParams } from '../ResetPasswordRouteParams'
import { useState } from 'react'
import { useToastActions } from '@shared/ui/components/toast/ToastProvider'
import { resetPassword } from '../services/resetPassword'

type InsertPinCodeProps = NativeStackScreenProps<
  ResetPasswordRouteParams,
  'InsertPinCode'
>

export function InsertPinCode(props: InsertPinCodeProps) {
  const email = props.route.params.userEmail

  const [formValues, setFormValues] = useState({
    pinCode: '',
    password: '',
    passwordConfirmation: '',
  })

  const [errorMessage, setErrorMessage] = useState('')
  const toast = useToastActions()

  function returnToInsertEmailScreen() {
    props.navigation.replace('InsertEmail', { userEmail: email })
  }

  async function confirm() {
    const { pinCode, password, passwordConfirmation } = formValues

    if (!pinCode) {
      setErrorMessage('Por favor, insira o código.')
      return
    }

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

    setErrorMessage('')

    const result = await resetPassword(pinCode, password)

    if (result?.isOk) {
      goToLoginPage()

      const FOUR_SECONDS_IN_MS = 4000

      toast.success('Sua senha foi redefinida com sucesso.', FOUR_SECONDS_IN_MS)
    } else {
      toast.error(result.message)
    }
  }

  function goToLoginPage() {
    props.navigation.pop()
  }

  return (
    <View style={styles.container}>
      <StyledText style={globalStyles.marginBottom3}>
        Insira o código recebido no email {email} e defina sua nova senha.
      </StyledText>

      <FormField
        label="Código recebido no e-mail"
        style={globalStyles.marginBottom1}
      >
        <TextBox
          placeholder="******"
          inputMode="numeric"
          value={formValues.pinCode}
          onChangeText={(pinCode) => setFormValues({ ...formValues, pinCode })}
        ></TextBox>
      </FormField>

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

      <PrimaryButton
        style={{ ...globalStyles.marginBottom1, ...globalStyles.marginTop3 }}
        onPress={confirm}
      >
        Redefinir senha
      </PrimaryButton>
      <SecondaryButton onPress={returnToInsertEmailScreen}>
        Não recebi um código
      </SecondaryButton>

      {errorMessage && (
        <StyledText
          style={{
            ...globalStyles.errorMessage,
            ...globalStyles.marginTop2,
            textAlign: 'center',
          }}
        >
          {errorMessage}
        </StyledText>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...globalStyles.defaultContainer,
    ...globalStyles.centerVertically,
  },
})
