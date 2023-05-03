import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from '../../../css/procedures'
import ShedulingInfo from '../../info/schedule'

const calendar = require('../../../img/calendar_schedule-icon.png')
const hour = require('../../../img/hourIcon.png')

export default function Content({ data }) {
  const [showModalChoice, setShowModalChoice] = useState(false)

  const handlePress = () => {
    setShowModalChoice(true)
    console.log(data)
  }

  return (
    <TouchableOpacity
      style={styles.containerProceduresContent}
      onPress={handlePress}
    >
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
      <Text style={{ marginTop: 15 }}>Clique para ver mais</Text>
      <ShedulingInfo
        visible={showModalChoice}
        onClose={() => setShowModalChoice(false)}
        data={data}
      />
    </TouchableOpacity>
  )
}
