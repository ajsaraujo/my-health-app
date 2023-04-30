import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from '../../../css/medicines'



const setaInfo = require('../../../img/arrow-info.png')

export default function Content({data}) {


  return (
    <TouchableOpacity style={styles.containerMedicinesContent}>
      <Text style={styles.nameContentText}>
        {data.nome}
      </Text>

      <Text style={styles.funcaoContentText}>
        {data.funcao}
      </Text>
      
      <View style={styles.viewMedicineContent}>
        <Text style={styles.startDateContentText}>Data início: {data.data_inicio}</Text>
        <Text style={styles.endDateContentText}>Data fim: {data.data_fim}</Text>
      </View>
      <Text style={styles.timeContentText}>Próximo horário: {data.horario}</Text>
    </TouchableOpacity>
  )
}
