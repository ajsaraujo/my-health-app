import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import { styles } from '../../css/medicines'
import MedChoice from '../form/choiceMed'
import Content from './content'

const setaInfo = require('../../img/arrow-info.png')

const medicinesList = [
  {
    id: 1,
    nome: 'Salmeterol',
    funcao: 'Proteção contra a broncoconstrição induzida pela histamina',
    data_inicio: '10/10/2023',
    data_fim: '10/10/2024',
    horario: '10:34',
  },
  {
    id: 2,
    nome: 'Formoterol',
    funcao: 'Efeito broncodilatador em pacientes com obstrução reversível das vias aéreas',
    data_inicio: '11/11/2023',
    data_fim: '11/11/2023',
    horario: '09:30',
  },
  {
    id: 3,
    nome: 'Insulina',
    funcao: 'Ajudar na diabetes',
    data_inicio: '15/10/2023',
    data_fim: '16/11/2023',
    horario: '10:34',
  },
  {
    id: 4,
    nome: 'Corticoides Inalatórios',
    funcao: 'Ajuda com a asma',
    data_inicio: '01/02/2024',
    data_fim: '01/02/2024',
    horario: '07:30',
  }
  
]


export default function Medicines() {
  const [showModal, setShowModal] = useState(false)

  const handlePress = () => {
    setShowModal(true)
  }

  return (
    <View style={styles.medicinesContainer}>
      {/* Tab Title */}
      <View style={styles.titleMedicinesContainer}>
        <Text style={styles.helloMedicinesText}>Medicamentos</Text>
      </View>

      {/* Tab Content */}
      <FlatList
        style={styles.medicinesList}
        data={medicinesList}
        keyExtractor={ ( item ) => String(item.id)}
        showsVerticalScrollIndicator
        renderItem={ ({ item }) => <Content data={item} />}
      />

      {/* Tab Actions Buttons */}

      <View style={styles.containerMedicineButton}>
        <TouchableOpacity style={styles.medicineButton} onPress={handlePress}>
          <Text style={styles.medicineButtonText}>Novo Medicamento</Text>
        </TouchableOpacity>
      </View>

      <MedChoice
        visible={showModal}
        onClose={() => setShowModal(false)}
      />
    </View>
  )
}