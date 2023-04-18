import { TouchableOpacity, TextStyle, StyleSheet } from 'react-native'
import { TouchableOpacityProps } from 'react-native/types'
import { StyledText } from './StyledText'
import { GREEN_600 } from '../colors'

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
          ...styles.defaultStyle,
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

const styles = StyleSheet.create({
  defaultStyle: {
    color: GREEN_600,
    fontWeight: '500',
    fontSize: 18,
  },
})
