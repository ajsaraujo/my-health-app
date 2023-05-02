import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from '../../../css/historic'

const historicIcon = require('../../../img/historicList.png')
const calendar = require('../../../img/calendar_schedule-icon.png')
const hour = require('../../../img/hourIcon.png')

export default function Content({ data }) {
  return (
    <TouchableOpacity style={styles.containerHistoricContent}>
      <Text style={styles.nameContentText}>{data.description}</Text>
      <View style={styles.historicDate}>
        <Image source={historicIcon} style={styles.historicIcon} />
        <View style={styles.viewHistoricContent}>
          <Text style={styles.viewHistoricContentText}>
            Data de Início: {data.dataInicio}
          </Text>
          <Text style={styles.viewHistoricContentText}>
            Data de Início: {data.dataFinal}
          </Text>
        </View>
      </View>
      <View style={styles.containerHour}>
        <Image source={hour} style={styles.hourIcon} />
        <Text style={styles.timeContentText}>
          {data.hour.replace(':', 'h')}
        </Text>
        <Image source={calendar} style={styles.hourIcon} />
        <Text style={styles.timeContentText}>{data.date}</Text>
      </View>
    </TouchableOpacity>
  )
}
