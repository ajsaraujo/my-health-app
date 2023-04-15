import { TouchableOpacity, Text, TextStyle } from 'react-native'
import { TouchableOpacityProps } from 'react-native/types'
import { globalStyles } from '../globalStyles'

type TextButtonProps = TouchableOpacityProps & {
  children: string
  textStyle?: TextStyle
}

const DEFAULT_VALUES: TextButtonProps = {
  children: '',
}

export function TextButton(props: TextButtonProps = DEFAULT_VALUES) {
  return (
    <TouchableOpacity {...props}>
      <Text
        style={{
          ...globalStyles.textButton,
          ...props.textStyle,
        }}
      >
        {props.children}
      </Text>
    </TouchableOpacity>
  )
}

export function TextButtonUnderline(props: TextButtonProps) {
  const mergedStyle: TextStyle = {
    ...props.textStyle,
    textDecorationLine: 'underline',
  }

  return <TextButton {...props} textStyle={mergedStyle}></TextButton>
}
