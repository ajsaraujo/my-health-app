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
      <TouchableWithoutFeedback>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Informações</Text>
            <Text style={styles.modalInfoText}>Nome: {data.nome}</Text>
            <Text style={styles.modalInfoText}>
              Descrição: {data.descricao}
            </Text>
            <Text style={styles.modalInfoText}>Horário: {data.horario}</Text>
            {data.funcao ? (
              <Text style={styles.modalInfoText}>Função: {data.funcao}</Text>
            ) : (
              <Text style={styles.modalInfoText}>Local: {data.local}</Text>
            )}
            <Text style={styles.modalInfoText}>Período: {data.periodo}</Text>
            <Text style={styles.modalInfoText}>
              Data de Início: {data.data_inicio}
            </Text>
            <Text style={styles.modalInfoText}>
              Data de Fim: {data.data_fim}
            </Text>
            <View style={styles.containerSchedulingButtonInfo}>
              <TouchableOpacity
                style={styles.schedulingButtonInfo}
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
