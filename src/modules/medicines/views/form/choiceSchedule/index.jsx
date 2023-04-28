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
import SchedulingModalMed from './scheduleMed'
import SchedulingModalProc from './scheduleProc'

const SchedulingModalChoice = ({ visible, onClose }) => {
  const [showModalMed, setShowModalMed] = useState(false)
  const [showModalProc, setShowModalProc] = useState(false)

  const handlePressMed = () => {
    onClose()
    setShowModalMed(true)
  }

  const handlePressProc = () => {
    onClose()
    setShowModalProc(true)
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
              <Text style={styles.modalTitle}>Novo Agendamento</Text>
              <Text style={styles.modalSelectionText}>
                Selecione uma opção:
              </Text>
              <View style={styles.modalSelection}>
                <TouchableOpacity
                  style={styles.selectionMedButton}
                  onPress={handlePressMed}
                >
                  <Text style={styles.modalSelectionMedText}>Medicamento</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.SelectionProcButton}
                  onPress={handlePressProc}
                >
                  <Text style={styles.modalSelectionProcText}>
                    Procedimento
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <SchedulingModalMed
        visible={showModalMed}
        onClose={() => setShowModalMed(false)}
      />

      <SchedulingModalProc
        visible={showModalProc}
        onClose={() => setShowModalProc(false)}
      />
    </View>
  )
}

export default SchedulingModalChoice
