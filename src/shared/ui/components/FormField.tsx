import { View, Text, ViewProps } from 'react-native'
import { globalStyles } from '../globalStyles'
import { PropsWithChildren } from 'react'

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
      <Text style={globalStyles.textInputLabel}>{props.label}</Text>
      {props.children}
    </View>
  )
}
