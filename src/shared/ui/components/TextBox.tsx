import { useState } from 'react'
import { TextInput } from 'react-native'
import { TextInputProps } from 'react-native/types'

import { GREEN_600 } from '../colors'
import { globalStyles } from '../globalStyles'

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
    focused ? { borderColor: GREEN_600 } : {},
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
