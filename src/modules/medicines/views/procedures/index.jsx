import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import { styles } from '../../css/procedures'
import SchedulingModalProc from '../form/choiceSchedule/scheduleProc'
import Content from './content'

const setaInfo = require('../../img/arrow-info.png')

const proceduresList = [
  {
    id: 1,
    nome: 'Fisioterapia Ortopédica',
    local: 'Av. Barao de Maruim, número 034, Aracaju, Sergipe',
    data_inicio: '10/10/2023',
    data_fim: '10/10/2024',
    horario: '10:34',
  },
  {
    id: 2,
    nome: 'Exame de Rotina',
    local: 'Av. Riacho dos Bois, número 517, Aracaju, Sergipe',
    data_inicio: '11/11/2023',
    data_fim: '11/11/2023',
    horario: '09:30',
  },
  {
    id: 3,
    nome: 'Proc3',
    local: 'Rua dos Consagrados, Bairro Industrial, número 079, Aracaju, Sergipe',
    data_inicio: '15/10/2023',
    data_fim: '16/11/2023',
    horario: '10:34',
  },
  {
    id: 4,
    nome: 'Proc4',
    local: 'Rua dos Companheiros, Bairro Industrial, número 46, Aracaju, Sergipe',
    data_inicio: '01/02/2024',
    data_fim: '01/02/2024',
    horario: '07:30',
  }
  
]


export default function Procedures() {
  const [showModal, setShowModal] = useState(false)

  const handlePress = () => {
    setShowModal(true)
  }

  return (
    <View style={styles.proceduresContainer}>
      {/* Tab Title */}
      <View style={styles.titleProceduresContainer}>
        <Text style={styles.helloProceduresText}>Procedimentos</Text>
      </View>

      {/* Tab Content */}
      <FlatList
        style={styles.proceduresList}
        data={proceduresList}
        keyExtractor={ ( item ) => String(item.id)}
        showsVerticalScrollIndicator
        renderItem={ ({ item }) => <Content data={item} />}
      />

      {/* Tab Actions Buttons */}

      <View style={styles.containerProcedureButton}>
        <TouchableOpacity style={styles.procedureButton} onPress={handlePress}>
          <Text style={styles.procedureButtonText}>Novo Procedimento</Text>
        </TouchableOpacity>
      </View>

      <SchedulingModalProc
        visible={showModal}
        onClose={() => setShowModal(false)}
      />
    </View>
  )
}
