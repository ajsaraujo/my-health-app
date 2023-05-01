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
import DocumentPicker from 'react-native-document-picker'

const RegisterModalMed = ({ visible, onClose }) => {
  const [refresh, setRefresh] = useState(false)
  const [nomeMed, setNomeMed] = useState('')
  const [funcMed, setFuncMed] = useState('')
  const [descMed, setDescMed] = useState('')
  const [fileData, setFileData] = useState(null)

  function alertSaveResult() {
    Alert.alert(
      'Resultado anexado com sucesso!',
      '',
      [
        {
          text: 'OK',
          onPress: () => {
            onClose()
            setRefresh(!refresh)
          },
        },
      ],
      { cancelable: false }
    )
  }

  async function saveResult() {
    try {
      const formData = new FormData()
      formData.append('nomeMedicamento', nomeMed)
      formData.append('funcMedicamento', funcMed)
      formData.append('descMedicamento', descMed)
      formData.append('arquivo', {
        uri: fileData.uri,
        type: fileData.type,
        name: fileData.name,
      })
      const response = await fetch('URL_DO_SERVIDOR', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      if (response.ok) {
        alertSaveResult()
      } else {
        throw new Error('Erro ao enviar o arquivo')
      }
    } catch (error) {
      console.log('Erro ao adicionar ao JSON:', error)
    }
  }

  async function selectFile() {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      })
      setFileData(result)
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // Usuário cancelou a seleção de arquivos
      } else {
        // Algum erro ocorreu
      }
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
            <Text style={styles.modalTitle}>Anexar Resultado</Text>

            <TouchableOpacity
              style={styles.selectFileButton}
              onPress={selectFile}
            >
              <Text style={styles.selectFileButtonText}>
                Selecionar arquivo
              </Text>
            </TouchableOpacity>
            {fileData && (
              <Text style={styles.selectedFileName}>{fileData.name}</Text>
            )}

            <View style={styles.containerSchedulingButton}>
              <TouchableOpacity
                style={styles.schedulingButton}
                onPress={saveResult}
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
