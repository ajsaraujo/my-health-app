import { View, Text, ViewProps, StyleSheet } from 'react-native'
import { PropsWithChildren } from 'react'
import { GRAY_700 } from '../colors'

/**
 * Um campo qualquer de um formulário. Exibe a label do campo,
 * enquanto que o input deve ser passado como componente filho.
 *
 * @usage
 * ```tsx
 * <FormField label="Nome">
 *   <TextBox></TextBox>
 * </FormField>
 * ```
 */
export function FormField(
  props: PropsWithChildren<{ label: string }> & ViewProps
) {
  return (
    <View {...props}>
      <Text style={styles.label}>{props.label}</Text>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    color: GRAY_700,
    fontWeight: '500',
    fontSize: 19,
    marginBottom: 8,
  },
})
