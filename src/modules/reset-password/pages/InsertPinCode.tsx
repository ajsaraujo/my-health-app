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

type InsertPinCodeProps = NativeStackScreenProps<
  ResetPasswordRouteParams,
  'InsertPinCode'
>

export function InsertPinCode(props: InsertPinCodeProps) {
  const email = props.route.params.userEmail

  return (
    <View style={styles.container}>
      <StyledText>Insira o código enviado para o e-mail {email}</StyledText>

      <TextBox placeholder="******" inputMode="numeric"></TextBox>

      <PrimaryButton>Redefinir senha</PrimaryButton>
      <SecondaryButton>Não recebi um código</SecondaryButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...globalStyles.defaultContainer,
    ...globalStyles.centerVertically,
  },
})
