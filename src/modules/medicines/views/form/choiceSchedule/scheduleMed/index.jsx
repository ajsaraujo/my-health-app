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

const SchedulingModalMed = ({ visible, onClose }) => {
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
            <Text style={styles.modalTitle}>Novo Medicamento</Text>
            <TextInput style={styles.input} placeholder="Nome" />
            <TextInput style={styles.input} placeholder="Função" />
            <TextInput style={styles.input} placeholder="Descrição" />
            <View style={styles.input}>
              <DateInput placeholder={'Data de início'} />
            </View>
            <View style={styles.input}>
              <DateInput placeholder={'Data de fim'} />
            </View>
            <View style={styles.input}>
              <TimeInput placeholder={'Primeiro horário da Medicação'} />
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
                  value="De 5 em 5 horas"
                  label="De 5 em 5 horas"
                />
                <Picker.Item
                  key={0}
                  value="De 6 em 6 horas"
                  label="De 6 em 6 horas"
                />
                <Picker.Item
                  key={0}
                  value="De 8 em 8 horas"
                  label="De 8 em 8 horas"
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

export default SchedulingModalMed
