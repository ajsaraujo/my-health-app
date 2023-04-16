import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MyHealthModule } from '../../modules'
import { RouteParams } from '../../routeParams'
import { globalStyles } from '../../shared/ui/globalStyles'
import { PrimaryButton } from '../../shared/ui/components/PrimaryButton'

type DiaryProps = NativeStackScreenProps<RouteParams, MyHealthModule.Diary>

export default function Diary(props: DiaryProps) {
  const menuItens = [
    { label: 'Novo registro', route: 'NewRegister', key: 1, id: 1 },
    { label: 'Visualizar registros', route: 'RegistersDiary', key: 2, id: 2 },
    { label: 'Gerar relatório', route: '', key: 3, id: 3 },
    { label: 'Lixeira', route: '', key: 4, id: 4 },
  ]

  return (
    <View style={globalStyles.defaultContainer}>
      <View style={styles.titleText}>
        <Text style={styles.titleText}>Diário de Saúde</Text>
      </View>
      <View style={styles.modulesContainer}>
        {menuItens.map((item) => (
          <PrimaryButton
            style={{ width: '35%', height: '45%' }}
            onPress={() => props.navigation.navigate(item.route)}
          >
            {item.label}
          </PrimaryButton>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  modulesContainer: {
    marginTop: 32,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 24,
    rowGap: 24,
  },
  titleText: {
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    fontSize: 25,
    fontWeight: 'bold',
  },
})
