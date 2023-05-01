import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from '../../../css/historic'

const calendar = require('../../../img/historicList.png')

export default function Content({ data }) {
  return (
    <TouchableOpacity style={styles.containerHistoricContent}>
      <Text style={styles.nameContentText}>{data.description}</Text>
      <View style={styles.historicDate}>
        <Image source={calendar} style={styles.historicIcon} />
        <View style={styles.viewHistoricContent}>
          <Text style={styles.viewHistoricContentText}>
            Operação: {data.operation}
          </Text>
          <Text style={styles.viewHistoricContentText}>
            Horário: {data.hour}
          </Text>
        </View>
      </View>
      <Text style={styles.timeContentText}>Data: {data.date}</Text>
    </TouchableOpacity>
  )
}
