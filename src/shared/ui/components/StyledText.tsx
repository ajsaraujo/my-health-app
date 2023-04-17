import { TextProps, Text } from 'react-native'

/**
 * Texto estilizado com a fonte "Inter".
 * A princípio, não encontramos uma solução melhor
 * para setar a fonte de todos os elementos globalmente.
 */
export function StyledText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[{ fontFamily: 'Inter-Regular' }, props.style]}
    ></Text>
  )
}
