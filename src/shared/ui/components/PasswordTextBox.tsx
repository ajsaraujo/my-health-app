import Ionicons from '@expo/vector-icons/Ionicons'
import { useState } from 'react'
import { Pressable, View } from 'react-native'

import { GRAY_700 } from '../colors'
import { TextBox, TextBoxProps } from './TextBox'

/**
 * Campo de entrada para senhas. Esconde o conteúdo digitado,
 * mas permite visualizá-lo clicando no ícone de 👁️
 */
export function PasswordTextBox(props: TextBoxProps) {
  const [passwordIsVisible, setPasswordVisibility] = useState(false)

  function togglePasswordVisibility() {
    setPasswordVisibility(!passwordIsVisible)
  }

  return (
    <View>
      <TextBox {...props} secureTextEntry={!passwordIsVisible}></TextBox>
      <PasswordVisibilityButton
        passwordIsVisible={passwordIsVisible}
        onPress={togglePasswordVisibility}
      ></PasswordVisibilityButton>
    </View>
  )
}

function PasswordVisibilityButton(props: {
  passwordIsVisible: boolean
  onPress: () => void
}) {
  return (
    <Pressable
      onPress={props.onPress}
      style={{
        position: 'absolute',
        right: 8,
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Ionicons
        size={24}
        name={props.passwordIsVisible ? 'eye' : 'eye-off'}
        color={GRAY_700}
      ></Ionicons>
    </Pressable>
  )
}
