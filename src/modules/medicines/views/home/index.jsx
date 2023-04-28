import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import { styles } from '../../css/home'
import SchedulingModal from '../form/schedule'
import Popup from '../info/schedule'

// Set Username
const username = 'José'
const hello = 'Olá, ' + username + '!'

// Set Date
let dataAtual = new Date() // Cria um objeto Date com a data e hora atuais
let dia = dataAtual.getDate().toString().padStart(2, '0') // Obtém o dia do mês com zero à esquerda se necessário
let mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0') // Obtém o mês com zero à esquerda se necessário (vale lembrar que o mês começa do zero em JavaScript)
let ano = dataAtual.getFullYear() // Obtém o ano com quatro dígitos
let dataFormatada = `${dia}/${mes}/${ano}` // Concatena a data formatada com barras
const today = dataFormatada
const setaInfo = require('../../img/arrow-info.png')

export default function Home() {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const date = new Date()
  const dayOfWeek = daysOfWeek[date.getDay()]
  const [currentDay, setCurrentDay] = useState(dayOfWeek)

  const changeDayCalendar = (day) => {
    if (day === currentDay) {
      setCurrentDay(currentDay)
    } else {
      setCurrentDay(day)
    }
  }

  const [showModal, setShowModal] = useState(false)

  const handlePress = () => {
    setShowModal(true)
  }

  const [data, setData] = useState(null)
  const [popupVisible, setPopupVisible] = useState(false)

  const handleOpenPopup = () => {
    setPopupVisible(true)
  }

  const handleClosePopup = () => {
    setPopupVisible(false)
  }

  return (
    <View style={styles.containerRemedies}>
      {/* Tab Title */}
      <View style={styles.titleHomeContainer}>
        {/* substituir dps pelo username do user e date atual */}
        <Text style={styles.helloRemediesText}>{hello}</Text>
        <Text style={styles.helloRemediesDate}>{today}</Text>
      </View>

      {/* Tab Calendar */}
      <View style={styles.containerDay}>
        {currentDay === 'Monday' ? (
          <TouchableOpacity
            onPress={() => {
              changeDayCalendar('Monday')
            }}
          >
            <Text style={[styles.tagDay, { opacity: 1 }]}>seg</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              changeDayCalendar('Monday')
            }}
          >
            <Text style={[styles.tagDay, { opacity: 0.5 }]}>seg</Text>
          </TouchableOpacity>
        )}

        {currentDay === 'Tuesday' ? (
          <TouchableOpacity
            onPress={() => {
              changeDayCalendar('Tuesday')
            }}
          >
            <Text style={[styles.tagDay, { opacity: 1 }]}>ter</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              changeDayCalendar('Tuesday')
            }}
          >
            <Text style={[styles.tagDay, { opacity: 0.5 }]}>ter</Text>
          </TouchableOpacity>
        )}

        {currentDay === 'Wednesday' ? (
          <TouchableOpacity
            onPress={() => {
              changeDayCalendar('Wednesday')
            }}
          >
            <Text style={[styles.tagDay, { opacity: 1 }]}>qua</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              changeDayCalendar('Wednesday')
            }}
          >
            <Text style={[styles.tagDay, { opacity: 0.5 }]}>qua</Text>
          </TouchableOpacity>
        )}

        {currentDay === 'Thursday' ? (
          <TouchableOpacity
            onPress={() => {
              changeDayCalendar('Thursday')
            }}
          >
            <Text style={[styles.tagDay, { opacity: 1 }]}>quin</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              changeDayCalendar('Thursday')
            }}
          >
            <Text style={[styles.tagDay, { opacity: 0.5 }]}>quin</Text>
          </TouchableOpacity>
        )}

        {currentDay === 'Friday' ? (
          <TouchableOpacity
            onPress={() => {
              changeDayCalendar('Friday')
            }}
          >
            <Text style={[styles.tagDay, { opacity: 1 }]}>sex</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              changeDayCalendar('Friday')
            }}
          >
            <Text style={[styles.tagDay, { opacity: 0.5 }]}>sex</Text>
          </TouchableOpacity>
        )}

        {currentDay === 'Saturday' ? (
          <TouchableOpacity
            onPress={() => {
              changeDayCalendar('Saturday')
            }}
          >
            <Text style={[styles.tagDay, { opacity: 1 }]}>sáb</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              changeDayCalendar('Saturday')
            }}
          >
            <Text style={[styles.tagDay, { opacity: 0.5 }]}>sáb</Text>
          </TouchableOpacity>
        )}

        {currentDay === 'Sunday' ? (
          <TouchableOpacity
            onPress={() => {
              changeDayCalendar('Sunday')
            }}
          >
            <Text style={[styles.tagDay, { opacity: 1 }]}>dom</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              changeDayCalendar('Sunday')
            }}
          >
            <Text style={[styles.tagDay, { opacity: 0.5 }]}>dom</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Tab Calendar content @todo substituir com info do DB */}
      <View>
        <View style={styles.containerInfoDay}>
          <Text style={styles.infoDayHour}>8:00</Text>
          <Text style={styles.infoDayText}>Tomar insulina</Text>
          <TouchableOpacity
            style={styles.infoDayButton}
            onPress={handleOpenPopup}
          >
            <Image source={setaInfo} style={styles.infoDayButtonText}></Image>
          </TouchableOpacity>
          {data && (
            <Popup
              visible={popupVisible}
              onClose={handleClosePopup}
              data={data}
            />
          )}
        </View>

        <View style={styles.containerInfoDay}>
          <Text style={styles.infoDayHour}>15:00</Text>
          <Text style={styles.infoDayText}>Exame de Rotina</Text>
          <TouchableOpacity
            style={styles.infoDayButton}
            onPress={handleOpenPopup}
          >
            <Image source={setaInfo} style={styles.infoDayButtonText}></Image>
          </TouchableOpacity>
          {data && (
            <Popup
              visible={popupVisible}
              onClose={handleClosePopup}
              data={data}
            />
          )}
        </View>

        <View style={styles.containerInfoDay}>
          <Text style={styles.infoDayHour}>21:30</Text>
          <Text style={styles.infoDayText}>Exame Urinário</Text>
          <TouchableOpacity
            style={styles.infoDayButton}
            onPress={handleOpenPopup}
          >
            <Image source={setaInfo} style={styles.infoDayButtonText}></Image>
          </TouchableOpacity>
          {data && (
            <Popup
              visible={popupVisible}
              onClose={handleClosePopup}
              data={data}
            />
          )}
        </View>
      </View>

      {/* Tab Actions Buttons */}

      <View style={styles.containerSchedulingButton}>
        <TouchableOpacity style={styles.schedulingButton} onPress={handlePress}>
          <Text style={styles.schedulingButtonText}>Novo Agendamento</Text>
        </TouchableOpacity>
      </View>
      <SchedulingModal
        visible={showModal}
        onClose={() => setShowModal(false)}
      />
    </View>
  )
}
