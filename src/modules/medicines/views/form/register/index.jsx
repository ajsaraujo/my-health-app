import React, { useState } from 'react'
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
  const handleSubmit = () => {
    // Lógica para agendar o evento aqui
    onClose()
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
            <TextInput style={styles.input} placeholder="Nome" />
            <TextInput style={styles.input} placeholder="Função" />
            <TextInput style={styles.input} placeholder="Descrição" />

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
