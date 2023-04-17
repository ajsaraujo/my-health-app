import { NativeStackScreenProps } from '@react-navigation/native-stack'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import { MyHealthModule } from '../../modules'
import { RouteParams } from '../../routeParams'
import { globalStyles } from '../../shared/ui/globalStyles'
import { MenuButton } from '../../shared/ui/components/MenuButton'
import lixeira from '../../../assets/garbageIcon.png'
import relatorio from '../../../assets/reportIcon.png'
import novoRegistro from '../../../assets/newRegisterIcon.png'
import visualizarRegistros from '../../../assets/lookRegistersIcon.png'

type DiaryProps = NativeStackScreenProps<RouteParams, MyHealthModule.Diary>

export default function Diary(props: DiaryProps) {
  const menuItens = [
    {
      label: 'Novo registro',
      route: 'RegisterNote',
      icon: novoRegistro,
      key: 1,
      id: 1,
    },
    {
      label: 'Visualizar registros',
      route: 'RegistersDiary',
      icon: visualizarRegistros,
      key: 2,
      id: 2,
    },
    {
      label: 'Gerar relatório',
      route: 'RegistersDiary',
      icon: relatorio,
      key: 3,
      id: 3,
    },
    { label: 'Lixeira', route: 'GarbageDiary', icon: lixeira, key: 4, id: 4 },
  ]

  const getWindowSize = () => {}

  return (
    <View style={globalStyles.defaultContainer}>
      <View style={styles.titleText}>
        <Text style={styles.titleText}>Diário de Saúde</Text>
      </View>
      <View style={styles.modulesContainer}>
        {menuItens.map((item) => (
          <MenuButton
            onPress={() => props.navigation.navigate(item.route)}
            route={item.route}
            text={item.label}
            icon={item.icon}
          />
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
