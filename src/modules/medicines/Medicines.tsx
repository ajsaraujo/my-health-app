import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, Text } from 'react-native'
import { MyHealthModule } from '../../modules'
import { RouteParams } from '../../routeParams'
import { globalStyles } from '../../shared/ui/globalStyles'
import { StyledText } from '../../shared/ui/components/StyledText'

type RemediesProps = NativeStackScreenProps<
  RouteParams,
  MyHealthModule.Medicines
>

export default function Medicines(props: RemediesProps) {
  return (
    <View style={globalStyles.defaultContainer}>
      <StyledText>Hello, world</StyledText>
    </View>
  )
}
