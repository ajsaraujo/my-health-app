import { PropsWithChildren } from 'react'
import { Pressable, PressableProps, TextStyle } from 'react-native'
import { globalStyles } from '../globalStyles'
import { StyledText } from './StyledText'

type PrimaryButtonProps = PropsWithChildren<
  PressableProps & {
    textStyle?: TextStyle
  }
>

/**
 * Botão primário, com fundo em cor sólida.
 */
export function PrimaryButton(props: PrimaryButtonProps) {
  const textNode =
    typeof props.children === 'string' ? (
      <StyledText
        style={{ ...globalStyles.primaryButton.text, ...props.textStyle }}
      >
        {props.children}
      </StyledText>
    ) : null

  const mergedStyle = [globalStyles.primaryButton, props.style]

  return (
    <Pressable {...props} style={mergedStyle}>
      {textNode}
    </Pressable>
  )
}
