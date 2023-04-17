import { TouchableOpacity, Text, TextStyle } from 'react-native'
import { TouchableOpacityProps } from 'react-native/types'
import { globalStyles } from '../globalStyles'
import { StyledText } from './StyledText'

type TextButtonProps = TouchableOpacityProps & {
  children: string
  textStyle?: TextStyle
}

const DEFAULT_VALUES: TextButtonProps = {
  children: '',
}

/**
 * Botão textual, sem cor de fundo.
 */
export function TextButton(props: TextButtonProps = DEFAULT_VALUES) {
  return (
    <TouchableOpacity {...props}>
      <StyledText
        style={{
          ...globalStyles.textButton,
          ...props.textStyle,
        }}
      >
        {props.children}
      </StyledText>
    </TouchableOpacity>
  )
}

/**
 * Botão textual decorado com um underline.
 */
export function TextButtonUnderline(props: TextButtonProps) {
  const mergedStyle: TextStyle = {
    ...props.textStyle,
    textDecorationLine: 'underline',
  }

  return <TextButton {...props} textStyle={mergedStyle}></TextButton>
}
