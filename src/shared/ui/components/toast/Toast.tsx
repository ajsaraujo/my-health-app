import { View, StyleSheet } from 'react-native'
import { StyledText } from '../StyledText'
import { GREEN_700, RED_700 } from '../../colors'
import { useToastData } from './ToastProvider'

export type ToastType = 'success' | 'error'

export type ToastProps = {
  visible: boolean
  message: string
  type: ToastType
}

export function Toast() {
  const { visible, type, message } = useToastData()

  if (!visible) {
    return null
  }

  return (
    <View
      style={[
        styles.toastContainer,
        type === 'success' && styles.success,
        type === 'error' && styles.error,
      ]}
    >
      <StyledText style={styles.text}>{message}</StyledText>
    </View>
  )
}

const styles = StyleSheet.create({
  toastContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 16,
  },

  success: {
    backgroundColor: GREEN_700,
  },

  error: {
    backgroundColor: RED_700,
  },

  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
  },
})
