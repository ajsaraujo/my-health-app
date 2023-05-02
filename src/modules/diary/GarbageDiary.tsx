import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RouteParams } from '../../routeParams'
import { ItemListDiary } from '../../shared/ui/components/ItemListDiary'
import { getRegistrosLixeira } from './infra/services'
import axios from 'axios'

type DiaryProps = NativeStackScreenProps<RouteParams, 'GarbageDiary'>

export default function GarbageDiary(props: DiaryProps) {
  const [listRegisters, setListRegisters] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const alertRestore = (idRegistro) => {
    Alert.alert(
      'Deseja restaurar esse registro?',
      'Caso deseje restaurar esse registro ele sairá da sua lixeira e voltará para os seus registro, dessa maneira ele vai fazer parte dos seus relatórios',
      [
        {
          text: 'Cancelar',
          onPress: () => {},
        },
        {
          text: 'OK',
          onPress: () => restoreFromGarbage(idRegistro),
        },
      ]
    )
  }

  const restoreFromGarbage = async (idRegistro) => {
    try {
      var response = await axios.put(
        `https://a2ca-138-255-87-166.ngrok-free.app/Registro/RestoreFromTrash/0?idRegistro=${idRegistro}`
      )
      console.log('restore from garbage', response.data)
    } catch (err) {
      console.log(err)
    }
  }

  const fetchData = async () => {
    try {
      var response = await getRegistrosLixeira({ idPaciente: 1 })
      console.log('response: ', response.data)
      setListRegisters(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <View style={styles.textTitle}>
        <Text style={styles.textTitle}>Lixeira</Text>
      </View>
      <FlatList
        data={listRegisters}
        renderItem={({ item }) => (
          <ItemListDiary
            typeList={'lixeira'}
            text={`Data do registro \r\n${item.dataCriacao}`}
            onPress={() => {
              alertRestore(item.id)
            }}
            itemList={item}
          />
        )}
      />
    </>
  )
}

const styles = StyleSheet.create({
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
  buttonContainer: {
    alignItems: 'center',
  },
})
