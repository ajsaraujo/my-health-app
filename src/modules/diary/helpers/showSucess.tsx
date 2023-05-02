import { Alert } from 'react-native'

export default function showSuccess(title, msg) {
  Alert.alert(`${title}`, `${msg}`, [{ text: 'Entendi', onPress: () => {} }])
}
