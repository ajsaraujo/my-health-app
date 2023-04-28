import React, { useState } from 'react'
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native'

import { styles } from '../../../css/form/schedule'
import SchedulingModalMed from '../choiceSchedule/scheduleMed'
import RegisterModalMed from '../register'

const MedChoice = ({ visible, onClose }) => {
  const [showModalReg, setShowModalReg] = useState(false)
  const [showModalSchedule, setShowModalSchedule] = useState(false)

  const handlePressReg = () => {
    onClose()
    setShowModalReg(true)
  }

  const handlePressSchedule = () => {
    onClose()
    setShowModalSchedule(true)
  }

  return (
    <View>
      <Modal
        visible={visible}
        animationType="fade"
        onRequestClose={onClose}
        transparent
      >
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Novo Medicamento</Text>
              <Text style={styles.modalSelectionText}>
                Selecione uma opção:
              </Text>
              <View style={styles.modalSelection}>
                <TouchableOpacity
                  style={styles.selectionMedButton}
                  onPress={handlePressReg}
                >
                  <Text style={styles.modalSelectionMedText}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.SelectionProcButton}
                  onPress={handlePressSchedule}
                >
                  <Text style={styles.modalSelectionProcText}>Agendar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <RegisterModalMed
        visible={showModalReg}
        onClose={() => setShowModalReg(false)}
      />

      <SchedulingModalMed
        visible={showModalSchedule}
        onClose={() => setShowModalSchedule(false)}
      />
    </View>
  )
}

export default MedChoice
