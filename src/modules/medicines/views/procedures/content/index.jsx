import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from '../../../css/procedures'

const calendar = require('../../../img/calendar_schedule-icon.png')
const hour = require('../../../img/hourIcon.png')

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
      <View style={styles.containerHour}>
        <Image source={hour} style={styles.hourIcon} />
        <Text style={styles.timeContentText}>
          {data.horario.replace(':', 'h')}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
