import React, { useState } from 'react'
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native'
import * as FileSystem from 'expo-file-system'
import { styles } from '../../../css/info/schedule'

const RegisterModalMed = ({ visible, onClose }) => {
  const [nomeMed, setNomeMed] = useState('')
  const [funcMed, setFuncMed] = useState('')
  const [descMed, setDescMed] = useState('')

  const cadMedicamento = {
    nomeMedicamento: nomeMed,
    funcMedicamento: funcMed,
    descMedicamento: descMed,
  }

  const cadHistoric = {
    date: new Date().toLocaleDateString('pt-BR'),
    description: nomeMed,
    dataInicio: null,
    dataFinal: null,
    hour: new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    }),
  }

  function alertSaveMed() {
    Alert.alert(
      'Sucesso',
      'Medicamento cadastrado com sucesso',
      [
        {
          text: 'OK',
          style: 'default',
          onPress: () => onClose(),
        },
      ],
      { cancelable: false }
    )
  }

  async function saveHistoric() {
    try {
      let dado = cadHistoric
      const caminho = `${FileSystem.documentDirectory}historic.json`

      // Verifica se o arquivo já existe
      const infoArquivo = await FileSystem.getInfoAsync(caminho)

      let dados
      if (infoArquivo.exists) {
        // Se o arquivo já existe, lê os dados existentes
        const arquivo = await FileSystem.readAsStringAsync(caminho)
        dados = JSON.parse(arquivo)

        // Adiciona o novo dado no array
        dados.push(dado)
      } else {
        // Se o arquivo não existe, cria um novo array contendo o dado
        dados = [dado]
      }

      // Converte o array para string JSON
      const dadosString = JSON.stringify(dados)

      // Salva os dados no arquivo
      await FileSystem.writeAsStringAsync(caminho, dadosString)

      alertSaveMed()
    } catch (error) {
      console.log('Erro ao adicionar ao JSON:', error)
    }
  }

  async function saveMed() {
    try {
      let dado = cadMedicamento
      const caminho = `${FileSystem.documentDirectory}medicines.json`

      // Verifica se o arquivo já existe
      const infoArquivo = await FileSystem.getInfoAsync(caminho)

      let dados
      if (infoArquivo.exists) {
        // Se o arquivo já existe, lê os dados existentes
        const arquivo = await FileSystem.readAsStringAsync(caminho)
        dados = JSON.parse(arquivo)

        // Adiciona o novo dado no array
        dados.push(dado)
      } else {
        // Se o arquivo não existe, cria um novo array contendo o dado
        dados = [dado]
      }

      // Converte o array para string JSON
      const dadosString = JSON.stringify(dados)

      // Salva os dados no arquivo
      await FileSystem.writeAsStringAsync(caminho, dadosString)
    } catch (error) {
      console.log('Erro ao adicionar ao JSON:', error)
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
                onPress={() => {
                  saveMed()
                  saveHistoric()
                }}
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
