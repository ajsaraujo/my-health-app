import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, Text } from 'react-native'
import { MyHealthModule } from '../../modules'
import { RouteParams } from '../../routeParams'
import { globalStyles } from '../../shared/ui/globalStyles'

type CalculatorsProps = NativeStackScreenProps<
  RouteParams,
  MyHealthModule.Calculators
>

export default function Calculators(props: CalculatorsProps) {
  return (
    <View style={globalStyles.defaultContainer}>
      <Text>Hello, world</Text>
    </View>
  )
}
