import { PropsWithChildren } from 'react'
import { Pressable, PressableProps, TextStyle } from 'react-native'
import { globalStyles } from '../globalStyles'
import { StyledText } from './StyledText'

// TO DO: Refatorar
// TO DO: Inline de globalStyles

type ButtonProps = PropsWithChildren<
  PressableProps & {
    textStyle?: TextStyle
  }
>

/**
 * Botão primário, com fundo em cor sólida.
 */
export function PrimaryButton(props: ButtonProps) {
  const textNode = typeof props.children === 'string' && (
    <StyledText
      style={{ ...globalStyles.primaryButton.text, ...props.textStyle }}
    >
      {props.children}
    </StyledText>
  )

  const mergedStyle = [globalStyles.primaryButton, props.style]

  return (
    <Pressable {...props} style={mergedStyle}>
      {textNode}
    </Pressable>
  )
}

/**
 * Botão secundário, com borda colorida e fundo transparente.
 */
export function SecondaryButton(props: ButtonProps) {
  const textNode = typeof props.children === 'string' && (
    <StyledText
      style={{ ...globalStyles.secondaryButton.text, ...props.textStyle }}
    >
      {props.children}
    </StyledText>
  )

  const mergedStyle = [globalStyles.secondaryButton, props.style]

  return (
    <Pressable {...props} style={mergedStyle}>
      {textNode}
    </Pressable>
  )
}
