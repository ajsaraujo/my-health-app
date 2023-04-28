import React, { useState } from 'react'
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import DateInput from '../../DateInput'
import TimeInput from '../../TimeInput'
import { styles } from '../../../../css/form/schedule'

const SchedulingModalProc = ({ visible, onClose }) => {
  const handleSubmit = () => {
    // Lógica para agendar o evento aqui
    onClose()
  }

  const [periodo, setPeriodo] = useState(null)

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
            <Text style={styles.modalTitle}>Novo Procedimento</Text>
            <TextInput style={styles.input} placeholder="Nome" />
            <TextInput style={styles.input} placeholder="Local" />
            <TextInput style={styles.input} placeholder="Descrição" />
            <View style={styles.input}>
              <DateInput placeholder={'Data de início'} />
            </View>
            <View style={styles.input}>
              <DateInput placeholder={'Data de fim'} />
            </View>
            <View style={styles.input}>
              <TimeInput placeholder={'Horário'} />
            </View>
            <View style={styles.input}>
              <Picker
                style={{ width: '100%' }}
                selectedValue={periodo}
                onValueChange={(item, indexItem) => {
                  setPeriodo(item)
                }}
              >
                <Picker.Item key={0} value={null} label="Selecione o período" />
                <Picker.Item
                  key={0}
                  value="Somente uma vez"
                  label="Somente uma vez"
                />
                <Picker.Item
                  key={0}
                  value="A cada 15 dias"
                  label="A cada 15 dias"
                />
                <Picker.Item
                  key={0}
                  value="A cada 30 dias"
                  label="A cada 30 dias"
                />
              </Picker>
            </View>
            <View style={styles.containerSchedulingButton}>
              <TouchableOpacity
                style={styles.schedulingButton}
                onPress={handleSubmit}
              >
                <Text style={styles.schedulingButtonText}>Agendar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

export default SchedulingModalProc
