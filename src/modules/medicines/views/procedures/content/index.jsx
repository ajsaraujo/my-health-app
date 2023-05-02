import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from '../../../css/procedures'

const calendar = require('../../../img/calendar_schedule-icon.png')

export default function Content({ data }) {
  return (
    <TouchableOpacity style={styles.containerProceduresContent}>
      <Text style={styles.nameContentText}>{data.nome}</Text>
      <View style={styles.calendarDate}>
        <Image source={calendar} style={styles.calendarIcon} />
        <View style={styles.viewProcedureContent}>
          <Text style={styles.startDateContentText}>
            Início: {data.data_inicio}
          </Text>
          <Text style={styles.endDateContentText}>Fim: {data.data_fim}</Text>
        </View>
      </View>
      <Text style={styles.timeContentText}>Horário: {data.horario}</Text>
    </TouchableOpacity>
  )
}
