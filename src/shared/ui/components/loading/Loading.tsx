import { View, ActivityIndicator, Text } from 'react-native'
import { StyledText } from '../StyledText'
import { GREEN_700 } from '../../colors'
import { globalStyles } from '../../globalStyles'

export function Loading(props: { visible: boolean }) {
  if (!props.visible) {
    return null
  }

  return (
    <View
      style={[
        globalStyles.centerVertically,
        {
          position: 'absolute',
          zIndex: 1,
          width: '100%',
          backgroundColor: 'white',
        },
      ]}
    >
      <Text style={{ textAlign: 'center', marginBottom: 16 }}>
        Carregando...
      </Text>
      <ActivityIndicator size="large" color={GREEN_700}></ActivityIndicator>
    </View>
  )
}
