import {
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

type InsertPinCodeProps = NativeStackScreenProps<
  ResetPasswordRouteParams,
  'InsertPinCode'
>

export function InsertPinCode(props: InsertPinCodeProps) {
  const email = props.route.params.userEmail

  const [errorMessage, setErrorMessage] = useState('')
  const [pinCode, setPinCode] = useState('')

  function returnToInsertEmailScreen() {
    props.navigation.navigate('InsertEmail', { userEmail: email })
  }

  function confirm() {
    if (!pinCode) {
      setErrorMessage('Por favor, insira o código.')
      return
    }

    props.navigation.navigate('InsertNewPassword')
  }

  return (
    <View style={styles.container}>
      <StyledText style={globalStyles.marginBottom1}>
        Insira o código recebido no e-mail {email}
      </StyledText>

      <TextBox
        placeholder="******"
        inputMode="numeric"
        value={pinCode}
        onChangeText={setPinCode}
        style={globalStyles.marginBottom2}
      ></TextBox>

      <PrimaryButton style={globalStyles.marginBottom1} onPress={confirm}>
        Confirmar
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
