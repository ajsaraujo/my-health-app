import {
  PrimaryButton,
  SecondaryButton,
  StyledText,
  TextBox,
} from '@shared/ui/components'
import { View, StyleSheet } from 'react-native'
import { globalStyles } from '@shared/ui/globalStyles'
import { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ResetPasswordRouteParams } from '../ResetPasswordRouteParams'
import { sendPinCode } from '../services/sendPinCode'
import { useToastActions } from '@shared/ui/components/toast/ToastProvider'

type InsertEmailProps = NativeStackScreenProps<
  ResetPasswordRouteParams,
  'InsertEmail'
>

export function InsertEmail(props: InsertEmailProps) {
  const [email, setEmail] = useState(props.route.params?.userEmail || '')
  const [submitted, setSubmitted] = useState(false)

  const toast = useToastActions()

  const errorMessage =
    submitted && !email ? 'Por favor, informe seu e-mail.' : ''

  async function sendCode() {
    setSubmitted(true)

    if (!email) {
      return
    }

    const result = await sendPinCode(email)

    if (result.isOk) {
      props.navigation.replace('InsertPinCode', { userEmail: email })
    } else {
      toast.error(result.message)
    }
  }

  async function cancel() {
    props.navigation.pop()
  }

  return (
    <View style={styles.container}>
      <StyledText style={styles.labelText}>
        Insira seu e-mail e te enviaremos um código para redefinir sua senha.
      </StyledText>

      <TextBox
        value={email}
        style={styles.textBox}
        placeholder="email@email.com"
        inputMode="email"
        onChangeText={setEmail}
      ></TextBox>

      <PrimaryButton onPress={sendCode} style={globalStyles.marginBottom1}>
        Enviar código
      </PrimaryButton>
      <SecondaryButton onPress={cancel}>Cancelar</SecondaryButton>

      <ErrorMessage text={errorMessage}></ErrorMessage>
    </View>
  )
}

function ErrorMessage(props: { text: string }) {
  if (!props.text) {
    return null
  }

  return (
    <StyledText
      style={{
        ...globalStyles.errorMessage,
        ...globalStyles.marginTop3,
        textAlign: 'center',
      }}
    >
      {props.text}
    </StyledText>
  )
}

const styles = StyleSheet.create({
  container: {
    ...globalStyles.defaultContainer,
    ...globalStyles.centerVertically,
  },

  labelText: {
    marginBottom: 16,
  },

  textBox: {
    marginBottom: 40,
  },
})
