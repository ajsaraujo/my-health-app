import { Pressable, PressableProps, StyleSheet, TextProps } from 'react-native'

import { GREEN_400, GREEN_600 } from '../colors'
import { StyledText } from './StyledText'

type ButtonProps = PressableProps & { textStyle?: TextProps['style'] }

/**
 * Botão primário, com fundo em cor sólida (verde) e texto branco.
 */
export function PrimaryButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      style={[styles.primaryButton, props.style as any]}
      textStyle={[styles.primaryButtonText, props.textStyle]}
    ></Button>
  )
}

/**
 * Botão secundário, com fundo transparente e texto e borda coloridos.
 */
export function SecondaryButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      style={[styles.secondaryButton, props.style as any]}
      textStyle={[styles.secondaryButtonText, props.textStyle]}
    ></Button>
  )
}

function Button(props: ButtonProps) {
  const shouldRenderTextNode = typeof props.children === 'string'

  const textNode = shouldRenderTextNode && (
    <StyledText style={[styles.buttonText, props.textStyle]}>
      {String(props.children)}
    </StyledText>
  )

  return (
    <Pressable {...props} style={[styles.button, props.style as any]}>
      {textNode}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 14,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  primaryButton: {
    backgroundColor: GREEN_600,
  },
  primaryButtonText: {
    color: 'white',
  },

  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: GREEN_400,
  },
  secondaryButtonText: {
    color: GREEN_600,
  },
})
