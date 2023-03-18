import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, Text } from 'react-native'
import { MyHealthModule } from '../../modules'
import { RouteParams } from '../../routeParams'
import { globalStyles } from '../../shared/ui/globalStyles'

type CodesProps = NativeStackScreenProps<RouteParams, MyHealthModule.Codes>

export default function Codes(props: CodesProps) {
  return (
    <View style={globalStyles.defaultContainer}>
      <Text>Hello, world</Text>
    </View>
  )
}
