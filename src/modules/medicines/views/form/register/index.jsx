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
//retorna o medicamento cadastrado
export async function getAllMed() {
  try {
    const keys = await AsyncStorage.getAllKeys()
    const results = await AsyncStorage.multiGet(keys)

    results.forEach((result) => {
      const key = result[0]
      const value = result[1]

      // Verifique se o valor está no formato que você deseja (por exemplo, JSON)
      if (value !== null) {
        const parsedValue = JSON.parse(value)

        // Exiba apenas os valores que você deseja
        console.log(parsedValue.nomeMedicamento)
      }
    })
  } catch (error) {
    console.log(error) // erro ao recuperar valor
  }
}

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
