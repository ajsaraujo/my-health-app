import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RouteParams } from '../../routeParams'
import { GREEN } from '../../shared/ui/colors'
import { PrimaryButton } from '../../shared/ui/components/PrimaryButton'
import { ItemListDiary } from '../../shared/ui/components/ItemListDiary'

type DiaryProps = NativeStackScreenProps<RouteParams, 'GarbageDiary'>

const listaLixeira = [
  { label: 'Data do registro \r\n 01/01/2023', id: 1, key: 1 },
  { label: 'Data do registro \r\n 02/02/2023', id: 2, key: 2 },
  { label: 'Data do registro \r\n 03/03/2023', id: 3, key: 3 },
  { label: 'Data do registro \r\n 04/04/2023', id: 4, key: 4 },
  { label: 'Data do registro \r\n 05/05/2023', id: 5, key: 5 },
  { label: 'Data do registro \r\n 06/06/2023', id: 6, key: 6 },
  { label: 'Data do registro \r\n 07/07/2023', id: 7, key: 7 },
  { label: 'Data do registro \r\n 08/08/2023', id: 8, key: 8 },
  { label: 'Data do registro \r\n 09/09/2023', id: 9, key: 9 },
]

export default function GarbageDiary(props: DiaryProps) {
  return (
    <>
      <View style={styles.textTitle}>
        <Text style={styles.textTitle}>Lixeira</Text>
      </View>
      <FlatList
        data={listaLixeira}
        renderItem={({ item }) => (
          <ItemListDiary typeList={'lixeira'} text={item.label} />
        )}
      />
      <View style={styles.buttonContainer}>
        <PrimaryButton
          style={{ width: '90%', height: 35 }}
          onPress={props.navigation.goBack}
        >
          Voltar
        </PrimaryButton>
      </View>
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
