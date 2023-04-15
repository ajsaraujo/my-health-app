import { PropsWithChildren } from 'react'
import { Pressable, PressableProps, Text, TextStyle } from 'react-native'
import { globalStyles } from '../globalStyles'

type PrimaryButtonProps = PropsWithChildren<
  PressableProps & {
    textStyle?: TextStyle
  }
>

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

  return <Pressable style={mergedStyle}>{textNode}</Pressable>
}
