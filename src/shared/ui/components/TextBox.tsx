import { useState } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { TextInputProps } from 'react-native/types'

import { GRAY_300, GRAY_50, GREEN_600 } from '../colors'

export type TextBoxProps = TextInputProps

/**
 * Campo de entrada de texto.
 */
export function TextBox(props: TextBoxProps) {
  const [focused, setFocused] = useState(false)

  function handleFocus() {
    setFocused(true)
  }

  function handleBlur() {
    setFocused(false)
  }

  const greenBorderWhenFocused = focused && { borderColor: GREEN_600 }

  return (
    <TextInput
      {...props}
      style={[styles.defaultStyle, greenBorderWhenFocused, props.style]}
      onFocus={handleFocus}
      onBlur={handleBlur}
    ></TextInput>
  )
}

const styles = StyleSheet.create({
  defaultStyle: {
    borderWidth: 2,
    borderColor: GRAY_300,
    backgroundColor: GRAY_50,
    borderRadius: 4,
    width: '100%',
    padding: 8,
    outlineStyle: 'none',
  },
})
