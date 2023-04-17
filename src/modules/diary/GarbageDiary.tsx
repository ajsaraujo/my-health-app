import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RouteParams } from '../../routeParams'
import { GREEN } from '../../shared/ui/colors'
import { PrimaryButton } from '../../shared/ui/components/PrimaryButton'
import { ItemListDiary } from '../../shared/ui/components/ItemListDiary'

type DiaryProps = NativeStackScreenProps<RouteParams, 'GarbageDiary'>

export default function GarbageDiary(props: DiaryProps) {
  return (
    <>
      <View style={styles.textTitle}>
        <Text style={styles.textTitle}>Lixeira</Text>
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
