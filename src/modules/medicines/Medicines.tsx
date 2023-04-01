import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, Text } from 'react-native'
import { MyHealthModule } from '../../modules'
import { RouteParams } from '../../routeParams'
import { globalStyles } from '../../shared/ui/globalStyles'

type RemediesProps = NativeStackScreenProps<
  RouteParams,
  MyHealthModule.Medicines
>

export default function Medicines(props: RemediesProps) {
  return (
    <View style={globalStyles.defaultContainer}>
      <Text>Hello, world</Text>
    </View>
  )
}
