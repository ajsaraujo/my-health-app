import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from '../../../css/procedures'



const setaInfo = require('../../../img/arrow-info.png')

export default function Content({data}) {


  return (
    <TouchableOpacity style={styles.containerProceduresContent}>
      <Text style={styles.nameContentText}>
        {data.nome}
      </Text>

      <Text style={styles.localContentText}>
        {data.local}
      </Text>
      
      <View style={styles.viewProcedureContent}>
        <Text style={styles.startDateContentText}>Data início: {data.data_inicio}</Text>
        <Text style={styles.endDateContentText}>Data fim: {data.data_fim}</Text>
      </View>
      <Text style={styles.timeContentText}>Horário: {data.horario}</Text>
    </TouchableOpacity>
  )
}
