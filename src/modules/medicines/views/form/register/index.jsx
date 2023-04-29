import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native'

import { styles } from '../../../css/info/schedule'

const RegisterModalMed = ({ visible, onClose }) => {
  const [nomeMed, setNomeMed] = useState('')
  const [funcMed, setFuncMed] = useState('')
  const [descMed, setDescMed] = useState('')

  const medicamentos = {
    nomeMedicamento: nomeMed,
    funcMedicamento: funcMed,
    descMedicamento: descMed,
  }
  const chave = 'meusMedicamentos'

  //adiciona um novo medicamento ao asyncStorage
  async function handleSubmit() {
    const jsonMedicamentos = JSON.stringify(medicamentos)

    try {
      await AsyncStorage.setItem(chave, jsonMedicamentos)
      console.log('Medicamentos salvos com sucesso!')
      console.log(medicamentos)
    } catch (error) {
      console.log('Erro ao salvar medicamentos:', error)
    }
  }

  //retorna o medicamento cadastrado
  async function getAllMed() {
    try {
      const value = await AsyncStorage.getItem(chave)
      if (value !== null) {
        console.log('Remedios cadastrados:', value) // valor encontrado
      } else {
        console.log('Nenhum valor encontrado para a chave ')
      }
    } catch (error) {
      console.log(error) // erro ao recuperar valor
    }
  }
  return (
    <Modal
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
      transparent
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Cadastrar Medicamento</Text>
            <TextInput
              onChangeText={(event) => {
                setNomeMed(event)
              }}
              value={nomeMed}
              style={styles.input}
              placeholder="Nome"
            />

            <TextInput
              onChangeText={(event) => {
                setFuncMed(event)
              }}
              value={funcMed}
              style={styles.input}
              placeholder="Função"
            />

            <TextInput
              onChangeText={(event) => {
                setDescMed(event)
              }}
              value={descMed}
              style={styles.input}
              placeholder="Descrição"
            />

            <View style={styles.containerSchedulingButton}>
              <TouchableOpacity
                style={styles.schedulingButton}
                onPress={handleSubmit}
              >
                <Text style={styles.schedulingButtonText}>Cadastrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}
export default RegisterModalMed
