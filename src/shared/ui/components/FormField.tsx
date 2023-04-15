import { View, Text, ViewProps } from 'react-native'
import { globalStyles } from '../globalStyles'
import { PropsWithChildren } from 'react'

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
