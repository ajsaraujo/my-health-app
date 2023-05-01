import React, { useState } from 'react'
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native'
import { styles } from '../../../css/info/schedule'

const ShedulingInfo = ({ visible, onClose, data }) => {
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
            <Text style={styles.modalTitle}>Informações</Text>
            <Text>{data.hour}</Text>
            <Text>{data.function}</Text>
            <Text>{data.description}</Text>
            <Text>{data.dataInicio}</Text>
            <Text>{data.dataFinal}</Text>
            <Text>{data.periodo}</Text>
            <View style={styles.containerSchedulingButton}>
              <TouchableOpacity
                style={styles.schedulingButton}
                onPress={onClose}
              >
                <Text style={styles.schedulingButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

export default ShedulingInfo
