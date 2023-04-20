import { useNavigation } from '@react-navigation/native'
import { GRAY_900 } from '@shared/ui/colors'
import { StyledText } from '@shared/ui/components'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { MyHealthModule } from 'src/modules'
import { Navigation } from 'src/routeParams'

export function ModuleCard(props: { moduleName: MyHealthModule }) {
  const navigation = useNavigation<Navigation>()

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(props.moduleName)}
    >
      <View>
        <StyledText>{props.moduleName}</StyledText>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 108,
    height: 108,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 5,

    shadowColor: GRAY_900,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
})
