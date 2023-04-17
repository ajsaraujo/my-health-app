import React from 'react'
import {
  View,
  Text,
  VirtualizedList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RouteParams } from '../../routeParams'
import { GREEN } from '../../shared/ui/colors'
import { PrimaryButton } from '../../shared/ui/components/PrimaryButton'
import { ItemListDiary } from '../../shared/ui/components/ItemListDiary'

type DiaryProps = NativeStackScreenProps<RouteParams, 'RegistersDiary'>

export default function RegistersDiary(props: DiaryProps) {
  return (
    <>
      <View style={styles.textTitle}>
        <Text style={styles.textTitle}>Lista de Registros</Text>
      </View>
      <ItemListDiary typeList={'lixeira'} />
      <View style={styles.buttonContainer}>
        <PrimaryButton
          style={{ width: '90%', height: 55 }}
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
