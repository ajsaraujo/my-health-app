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
import { styles } from '../../../css/form/schedule'

const SchedulingModal = ({ visible, onClose }) => {
  const [descricao, setDescricao] = useState('')
  const [dtInicio, setDtInicio] = useState('')
  const [dtFinal, setDtFinal] = useState('')
  const [horario, setHorario] = useState('')
  const [periodo, setPeriodo] = useState('')

  const handleDataInicioTextChange = (text) => {
    // Remove caracteres que não são números
    const cleanedValue = text.replace(/[^0-9]/g, '')

    // Verifica se o valor segue o formato dd/mm/aaaa
    if (cleanedValue.length <= 2) {
      setDtInicio(cleanedValue)
    } else if (cleanedValue.length <= 4) {
      setDtInicio(`${cleanedValue.slice(0, 2)}/${cleanedValue.slice(2)}`)
    } else if (cleanedValue.length <= 8) {
      setDtInicio(
        `${cleanedValue.slice(0, 2)}/${cleanedValue.slice(
          2,
          4
        )}/${cleanedValue.slice(4)}`
      )
    } else {
      setDtInicio(
        `${cleanedValue.slice(0, 2)}/${cleanedValue.slice(
          2,
          4
        )}/${cleanedValue.slice(4, 8)}`
      )
    }
  }

  const handleDataFinalTextChange = (text) => {
    // Remove caracteres que não são números
    const cleanedValue = text.replace(/[^0-9]/g, '')

    // Verifica se o valor segue o formato dd/mm/aaaa
    if (cleanedValue.length <= 2) {
      setDtFinal(cleanedValue)
    } else if (cleanedValue.length <= 4) {
      setDtFinal(`${cleanedValue.slice(0, 2)}/${cleanedValue.slice(2)}`)
    } else if (cleanedValue.length <= 8) {
      setDtFinal(
        `${cleanedValue.slice(0, 2)}/${cleanedValue.slice(
          2,
          4
        )}/${cleanedValue.slice(4)}`
      )
    } else {
      setDtFinal(
        `${cleanedValue.slice(0, 2)}/${cleanedValue.slice(
          2,
          4
        )}/${cleanedValue.slice(4, 8)}`
      )
    }
  }

  const handleTimeTextChange = (text) => {
    // Remove caracteres que não são números
    const cleanedValue = text.replace(/[^0-9]/g, '')

    // Verifica se o valor segue o formato __:__
    if (cleanedValue.length <= 2) {
      setHorario(cleanedValue)
    } else {
      setHorario(`${cleanedValue.slice(0, 2)}:${cleanedValue.slice(2)}`)
    }
  }

  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Novo Agendamento</Text>
          <TextInput
            style={styles.input}
            placeholder="Descrição"
            onChangeText={setDescricao}
          />
          <View style={styles.input}>
            <TextInput
              maxLength={10}
              placeholder="Data de início"
              keyboardType="numeric"
              onChangeText={(text) => {
                handleDataInicioTextChange(text)
                setDtInicio
              }}
              value={dtInicio}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              maxLength={10}
              placeholder="Data de fim"
              keyboardType="numeric"
              onChangeText={(text) => {
                handleDataFinalTextChange(text)
                setDtFinal
              }}
              value={dtFinal}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              maxLength={5}
              placeholder="Horário"
              keyboardType="numeric"
              onChangeText={(text) => {
                handleTimeTextChange(text)
                setHorario
              }}
              value={horario}
            />
          </View>
          <View style={styles.input}>
            <Picker
              style={{ width: '100%' }}
              selectedValue={periodo}
              onValueChange={(item, indexItem) => {
                setPeriodo(item)
              }}
            >
              <Picker.Item key={0} value={''} label="Selecione o período" />
              <Picker.Item key={0} value="Manhã" label="Manhã" />
              <Picker.Item key={0} value="Tarde" label="Tarde" />
              <Picker.Item key={0} value="Noite" label="Noite" />
            </Picker>
          </View>
          <View style={styles.containerSchedulingButton}>
            <TouchableOpacity style={styles.schedulingButton}>
              <Text style={styles.schedulingButtonText}>Agendar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.schedulingButton} onPress={onClose}>
              <Text style={styles.schedulingButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default SchedulingModal
