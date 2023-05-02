import React, { useState } from 'react'
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  Alert,
} from 'react-native'
import { GREEN } from '../colors'
import { ModalOptionsDiary } from './modals/ModalOptionsDiary'
import { sendToGarbage } from '../../../modules/diary/infra/services'
import axios from 'axios'
import showError from '../../../modules/diary/helpers/showError'
import showSuccess from '../../../modules/diary/helpers/showSucess'

export function ItemListDiary({ ...props }) {
  const deleteAlert = (idRegistro) => {
    if (props.typeList === 'lixeira') {
      Alert.alert(
        'Deseja apagar esse registro permanentemente?',
        'Caso deseje apagar esse registro de maneira permanente ele além de não fazer mais parte de seus relatórios também não poderá ser mais restaurado para sua lista de registros',
        [
          {
            text: 'Cancelar',
            onPress: () => console.log('Cancelar'),
          },
          {
            text: 'OK',
            onPress: () => deleteRegister(idRegistro),
          },
        ]
      )
    } else {
      Alert.alert(
        'Deseja apagar esse registro?',
        'Caso apague esse registro ele será enviado para a lixeira e não fará parte do seu relatório final',
        [
          {
            text: 'Cancelar',
            onPress: () => console.log('Cancelar'),
          },
          {
            text: 'OK',
            onPress: () => sendGarbage(idRegistro),
          },
        ]
      )
    }
  }

  const sendGarbage = async (idRegistro) => {
    try {
      var response = await axios.put(
        `https://a2ca-138-255-87-166.ngrok-free.app/Registro/MoveToLixeira/${idRegistro}`
      )
      showSuccess(
        'Sucesso',
        'Seu registro foi movido para lixeira com sucesso com sucesso!'
      )
    } catch (err) {
      showError('Ocorreu um erro', err)
    }
  }

  const deleteRegister = async (idRegistro) => {
    try {
      var response = await axios.delete(
        `https://a2ca-138-255-87-166.ngrok-free.app/Registro/DeleteFromTrash/0?idRegistro=${idRegistro}`
      )
      showSuccess('Sucesso', 'Seu registro foi atualizado com sucesso!')
    } catch (err) {
      showError('Ocorreu um erro', err)
    }
  }

  return (
    <View>
      <TouchableOpacity activeOpacity={0.6} onPress={() => props.onPress()}>
        <View style={styles.itensList}>
          <View style={styles.imageContainer}>
            {props.typeList === 'lixeira' ? (
              <Image
                source={require('../../../../assets/garbageIcon.png')}
                style={styles.sizeIcon}
              />
            ) : (
              <Image
                source={require('../../../../assets/checkIcon.png')}
                style={styles.sizeIcon}
              />
            )}
          </View>
          <Text style={styles.textList}>{props.text}</Text>
          <View style={styles.buttonOptionContainer}>
            <TouchableOpacity onPress={() => deleteAlert(props.itemList.id)}>
              <Image
                source={require('../../../../assets/garbageIcon.png')}
                style={styles.buttonOption}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  itensList: {
    borderWidth: 1,
    borderColor: GREEN,
    marginHorizontal: 8,
    borderRadius: 5,
    marginVertical: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    marginTop: 10,
    marginBottom: 15,
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
  buttonOption: {
    height: 30,
    width: 25,
  },
  buttonOptionContainer: {
    flexDirection: 'row',
    position: 'absolute',
    right: 10,
    height: 40,
    width: 33,
    backgroundColor: GREEN,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
