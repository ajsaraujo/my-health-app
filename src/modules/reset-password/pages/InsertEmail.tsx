import { PrimaryButton, StyledText, TextBox } from '@shared/ui/components'
import { View, StyleSheet } from 'react-native'
import { globalStyles } from '@shared/ui/globalStyles'
import { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ResetPasswordRouteParams } from '../ResetPasswordRouteParams'

type InsertEmailProps = NativeStackScreenProps<
  ResetPasswordRouteParams,
  'InsertEmail'
>

export function InsertEmail(props: InsertEmailProps) {
  const [email, setEmail] = useState(props.route.params?.userEmail || '')
  const [errorMessage, setErrorMessage] = useState('')

  function sendCode() {
    if (!email) {
      setErrorMessage('Por favor, insira o seu e-mail.')
      return
    }

    props.navigation.replace('InsertPinCode', { userEmail: email })
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

      <PrimaryButton onPress={sendCode}>Enviar código</PrimaryButton>

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
