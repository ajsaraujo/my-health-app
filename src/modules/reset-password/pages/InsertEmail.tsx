import { PrimaryButton, StyledText, TextBox } from '@shared/ui/components'
import { View, StyleSheet } from 'react-native'
import { globalStyles } from '@shared/ui/globalStyles'

export function InsertEmail() {
  return (
    <View style={styles.container}>
      <StyledText style={styles.labelText}>
        Insira seu e-mail e te enviaremos um código para redefinir sua senha.
      </StyledText>

      <TextBox
        style={styles.textBox}
        placeholder="email@email.com"
        inputMode="email"
      ></TextBox>

      <PrimaryButton>Enviar código</PrimaryButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...globalStyles.defaultContainer,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  labelText: {
    marginBottom: 16,
  },

  textBox: {
    marginBottom: 40,
  },
})
