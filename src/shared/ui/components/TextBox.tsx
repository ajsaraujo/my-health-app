import { TextInput } from 'react-native'
import { TextInputProps } from 'react-native/types'
import { globalStyles } from '../globalStyles'
import { GREEN } from '../colors'
import { useState } from 'react'

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

  const styles: TextInputProps['style'] = [
    globalStyles.textInput,
    props.style,
    focused ? { borderColor: GREEN } : {},
  ]

  return (
    <TextInput
      {...props}
      style={styles}
      onFocus={handleFocus}
      onBlur={handleBlur}
    ></TextInput>
  )
}
