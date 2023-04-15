import { TextInput } from 'react-native'
import { TextInputProps } from 'react-native/types'
import { globalStyles } from '../globalStyles'

export function TextBox(props: TextInputProps) {
  const mergedStyles = {
    ...globalStyles.textInput,
    ...props.style,
  }

  return <TextInput {...props} style={mergedStyles}></TextInput>
}
