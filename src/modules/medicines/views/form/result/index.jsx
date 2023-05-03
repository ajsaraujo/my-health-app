import React, { useState, useEffect } from 'react'
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Alert,
} from 'react-native'
import * as DocumentPicker from 'expo-document-picker'
import { styles } from '../../../css/info/schedule'
import { Picker } from '@react-native-picker/picker'
import * as FileSystem from 'expo-file-system'

const calendar = require('../../../img/historicList.png')

const RegisterModalMed = ({ visible, onClose, proceduresList }) => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [selectedOption, setSelectedOption] = useState(null)

  const handlePress = () => {
    setShowModal(true)
  }

  const pickDocument = async () => {
    const result = await DocumentPicker.getDocumentAsync({})
    if (result.type === 'success') {
      setSelectedFile(result.name)
    }
  }

  function alertSaveResult() {
    Alert.alert(
      'Sucesso',
      'Arquivo anexado com sucesso',
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

  async function saveResult() {
    try {
      const caminho = `${FileSystem.documentDirectory}procedures.json`

      // Verifica se o arquivo já existe
      const infoArquivo = await FileSystem.getInfoAsync(caminho)

      let dados
      if (infoArquivo.exists) {
        // Se o arquivo já existe, lê os dados existentes
        const arquivo = await FileSystem.readAsStringAsync(caminho)
        dados = JSON.parse(arquivo)

        // Procura pelo registro correspondente ao id
        const index = dados.findIndex((item) => item.id === selectedOption)

        if (index !== -1) {
          // Atualiza o registro com a informação do arquivo selecionado
          dados[index].result = selectedFile

          // Converte o array atualizado para string JSON
          const dadosString = JSON.stringify(dados)

          // Salva os dados no arquivo
          await FileSystem.writeAsStringAsync(caminho, dadosString)

          // Retorna o registro atualizado
          console.log('cadastrado!')
          console.log(dados[index])
          alertSaveResult()
          // return dados[index]
        } else {
          console.log('Registro não encontrado')
        }
      } else {
        console.log('Arquivo não encontrado')
      }
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
      <TouchableWithoutFeedback>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Anexar Resultado</Text>
            <View style={styles.modalResultProcedureLabel}>
              <Text style={styles.modalResultProcedureLabelText}>
                Procedimento
              </Text>
            </View>
            <View style={styles.modalResultProcedureSelect}>
              <Picker
                style={{ width: '90%' }}
                selectedValue={selectedOption}
                onValueChange={(itemValue) => setSelectedOption(itemValue)}
              >
                <Picker.Item label="Selecione um procedimento" value={null} />
                {proceduresList.map((option, index) => (
                  <Picker.Item
                    key={index}
                    label={option.name}
                    value={option.id}
                  />
                ))}
              </Picker>
            </View>
            <TouchableOpacity
              onPress={pickDocument}
              style={styles.resultButton}
            >
              <Image source={calendar} style={{ height: 20, width: 20 }} />
              <Text style={styles.resultButtonText}>
                {selectedFile ? selectedFile : 'Selecione um arquivo'}
              </Text>
            </TouchableOpacity>
            <View style={styles.containerSchedulingButton}>
              <TouchableOpacity
                style={styles.schedulingButton}
                onPress={onClose}
              >
                <Text style={styles.schedulingButtonText}>Fechar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.schedulingButton}
                onPress={saveResult}
              >
                <Text style={styles.schedulingButtonText}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

export default RegisterModalMed
