import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { LIGHT_BLACK, LIGHT_GRAY } from '@shared/ui/colors'
import { StyledText } from '@shared/ui/components'
import { globalStyles } from '@shared/ui/globalStyles'

import { StyleSheet, TouchableOpacity, View } from 'react-native'

import { MyHealthModule } from '../../modules'
import { RouteParams } from '../../routeParams'
import { ModuleCard } from './components/ModuleCard'

type HomeProps = NativeStackScreenProps<RouteParams, 'Home'>

export default function Home(props: HomeProps) {
  const modules: MyHealthModule[] = [
    MyHealthModule.Calculators,
    MyHealthModule.Codes,
    MyHealthModule.Diary,
    MyHealthModule.Medicines,
    MyHealthModule.Articles,
  ]

  return (
    <View>
      <View style={globalStyles.defaultContainer}>
        <StyledText style={styles.helloText}>Olá, Fulano.</StyledText>
        <StyledText style={styles.letsTakeCareText}>
          Vamos cuidar da sua saúde hoje? ❤️
        </StyledText>

        <View style={styles.modulesContainer}>
          {modules.map((moduleName) => (
            <ModuleCard key={moduleName} moduleName={moduleName}></ModuleCard>
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

    shadowColor: LIGHT_GRAY,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
})
