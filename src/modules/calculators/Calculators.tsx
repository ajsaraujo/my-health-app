import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View } from 'react-native'
import { MyHealthModule } from '../../modules'
import { RouteParams } from '../../routeParams'
import { globalStyles } from '../../shared/ui/globalStyles'
import { StyledText } from '../../shared/ui/components/StyledText'

type CalculatorsProps = NativeStackScreenProps<
  RouteParams,
  MyHealthModule.Calculators
>

export default function Calculators(props: CalculatorsProps) {
  return (
    <View style={globalStyles.defaultContainer}>
      <StyledText>Hello, world</StyledText>
    </View>
  )
}
