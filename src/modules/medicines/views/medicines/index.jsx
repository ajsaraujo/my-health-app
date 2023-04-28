import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from '../../css/medicines'
import MedChoice from '../form/choiceMed'

const setaEsquerda = require('../../img/chevron-left.png')
const setaDireita = require('../../img/chevron-right.png')
const setaInfo = require('../../img/arrow-info.png')

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
      <View>
        <View style={styles.containerMedicinesContent}>
          <Text style={styles.infoMedicinesText}>Salmeterol</Text>
          <TouchableOpacity style={styles.viewMedicinesButton}>
            <Image
              source={setaInfo}
              style={styles.viewMedicinesButtonText}
            ></Image>
          </TouchableOpacity>
        </View>

        <View style={styles.containerMedicinesContent}>
          <Text style={styles.infoMedicinesText}>Formoterol</Text>
          <TouchableOpacity style={styles.viewMedicinesButton}>
            <Image
              source={setaInfo}
              style={styles.viewMedicinesButtonText}
            ></Image>
          </TouchableOpacity>
        </View>

        <View style={styles.containerMedicinesContent}>
          <Text style={styles.infoMedicinesText}>Insulina</Text>
          <TouchableOpacity style={styles.viewMedicinesButton}>
            <Image
              source={setaInfo}
              style={styles.viewMedicinesButtonText}
            ></Image>
          </TouchableOpacity>
        </View>

        <View style={styles.containerMedicinesContent}>
          <Text style={styles.infoMedicinesText}>Coticóides Inalatórios</Text>
          <TouchableOpacity style={styles.viewMedicinesButton}>
            <Image
              source={setaInfo}
              style={styles.viewMedicinesButtonText}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tab Actions Buttons */}

      <View style={styles.containerMedicineButton}>
        <TouchableOpacity style={styles.medicineButton} onPress={handlePress}>
          <Text style={styles.medicineButtonText}>Novo Medicamento</Text>
        </TouchableOpacity>
      </View>

      <MedChoice visible={showModal} onClose={() => setShowModal(false)} />
    </View>
  )
}
