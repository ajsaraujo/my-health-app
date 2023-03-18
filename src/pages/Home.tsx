import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MyHealthModule } from '../modules'
import { RouteParams } from '../routeParams'
import { LIGHT_BLACK, LIGHT_GREY } from '../shared/ui/colors'
import { globalStyles } from '../shared/ui/globalStyles'

type HomeProps = NativeStackScreenProps<RouteParams, 'Home'>

export default function Home(props: HomeProps) {
  const modules: MyHealthModule[] = [
    MyHealthModule.Calculators,
    MyHealthModule.Codes,
    MyHealthModule.Diary,
    MyHealthModule.Remedies,
  ]

  return (
    <View>
      <View style={globalStyles.defaultContainer}>
        <Text style={styles.helloText}>Olá, Fulano.</Text>
        <Text style={styles.letsTakeCareText}>
          Vamos cuidar da sua saúde hoje? ❤️
        </Text>

        <View style={styles.modulesContainer}>
          {modules.map((moduleName) => (
            <TouchableOpacity
              key={moduleName}
              onPress={() => {
                props.navigation.navigate(moduleName)
              }}
            >
              <View style={styles.moduleCard}>
                <Text>{moduleName}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  helloText: {
    fontSize: 20,
    marginBottom: 8,
  },
  letsTakeCareText: {
    fontSize: 16,
    color: LIGHT_BLACK,
  },
  modulesContainer: {
    marginTop: 32,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 24,
    rowGap: 24,
  },
  moduleCard: {
    width: 108,
    height: 108,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 5,

    shadowColor: LIGHT_GREY,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
})
