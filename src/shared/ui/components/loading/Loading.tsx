import { View, ActivityIndicator } from 'react-native'
import { StyledText } from '../StyledText'
import { GREEN_700 } from '@shared/ui/colors'
import { globalStyles } from '@shared/ui/globalStyles'

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
      <StyledText style={{ textAlign: 'center', marginBottom: 16 }}>
        Carregando...
      </StyledText>
      <ActivityIndicator size="large" color={GREEN_700}></ActivityIndicator>
    </View>
  )
}
