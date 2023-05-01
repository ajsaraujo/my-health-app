import React, { useState } from 'react'
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
} from 'react-native'
import * as DocumentPicker from 'expo-document-picker'
import { styles } from '../../../css/info/schedule'

const calendar = require('../../../img/historicList.png')

const RegisterModalMed = ({ visible, onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null)

  const pickDocument = async () => {
    const result = await DocumentPicker.getDocumentAsync({})
    if (result.type === 'success') {
      setSelectedFile(result.name)
    }
  }

  function saveResult() {
    console.log('save')
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
