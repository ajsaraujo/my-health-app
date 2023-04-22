import React from 'react'
import {
  View,
  Text,
  VirtualizedList,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RouteParams } from '../../routeParams'
import { GREEN } from '../../shared/ui/colors'
import { PrimaryButton } from '../../shared/ui/components/PrimaryButton'
import { ItemListDiary } from '../../shared/ui/components/ItemListDiary'

type DiaryProps = NativeStackScreenProps<RouteParams, 'RegistersDiary'>

const listaRegistros = [
  { label: 'Data do registro \r\n01/01/2023', id: 1, key: 1 },
  { label: 'Data do registro \r\n02/02/2023', id: 2, key: 2 },
  { label: 'Data do registro \r\n03/03/2023', id: 3, key: 3 },
  { label: 'Data do registro \r\n04/04/2023', id: 4, key: 4 },
  { label: 'Data do registro \r\n05/05/2023', id: 5, key: 5 },
  { label: 'Data do registro \r\n06/06/2023', id: 6, key: 6 },
  { label: 'Data do registro \r\n07/07/2023', id: 7, key: 7 },
  { label: 'Data do registro \r\n08/08/2023', id: 8, key: 8 },
  { label: 'Data do registro \r\n09/09/2023', id: 9, key: 9 },
]

export default function RegistersDiary(props: DiaryProps) {
  return (
    <>
      <View style={styles.textTitle}>
        <Text style={styles.textTitle}>Lista de Registros</Text>
      </View>
      <FlatList
        data={listaRegistros}
        renderItem={({ item }) => (
          <ItemListDiary
            typeList={'Registros'}
            text={item.label}
            onPress={() => props.navigation.navigate('RegisterNote')}
          />
        )}
      />
      <View style={styles.buttonContainer}>
        <PrimaryButton
          style={{ width: '90%', height: 50, marginVertical: 10 }}
          onPress={props.navigation.goBack}
        >
          Voltar
        </PrimaryButton>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  itensList: {
    borderWidth: 1,
    borderColor: GREEN,
    marginHorizontal: 5,
    borderRadius: 5,
    marginVertical: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    marginTop: 10,
    marginBottom: 15,
  },
  textTitle: {
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  sizeIcon: {
    height: 30,
    width: 30,
  },
  imageContainer: {
    backgroundColor: GREEN,
    borderRadius: 100,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 5,
  },
  textList: {
    fontSize: 16,
    marginLeft: 3,
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'center',
  },
})
