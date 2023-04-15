import { PropsWithChildren } from 'react'
import { Pressable, PressableProps, Text, TextStyle } from 'react-native'
import { globalStyles } from '../globalStyles'

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
      <Text style={{ ...globalStyles.primaryButton.text, ...props.textStyle }}>
        {props.children}
      </Text>
    ) : null

  const mergedStyle: PressableProps['style'] = {
    ...globalStyles.primaryButton,
    ...props.style,
  }

  return (
    <Pressable {...props} style={mergedStyle}>
      {textNode}
    </Pressable>
  )
}
