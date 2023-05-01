import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from '../../css/home'
import SchedulingModalChoice from '../form/choiceSchedule'
import ShedulingInfo from '../info/schedule'
import * as FileSystem from 'expo-file-system'

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

async function lerDados() {
  try {
    const caminho = `${FileSystem.documentDirectory}schedules.json`

    // Verifica se o arquivo já existe
    const infoArquivo = await FileSystem.getInfoAsync(caminho)

    if (!infoArquivo.exists) {
      console.log('O arquivo não existe!')
      return
    }

    // Lê os dados do arquivo
    const arquivo = await FileSystem.readAsStringAsync(caminho)

    // Converte a string JSON para array
    const dados = JSON.parse(arquivo)

    console.log(dados)

    return dados
  } catch (error) {
    console.log('Erro ao ler o JSON:', error)
  }
}

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
  const [dados, setDados] = useState(null)

  const changeDayCalendar = (day) => {
    setCurrentDay(day)
  }

  const [showModalChoice, setShowModalChoice] = useState(false)

  // @todo Trocar por um solução dinâmica
  const [showInfo, setShowInfo] = useState(false)
  const handleInfo = () => {
    setShowInfo(true)
  }

  const handlePress = () => {
    setShowModalChoice(true)
  }

  function getDayOfWeek(dateString) {
    const dateParts = dateString.split('/')
    const day = dateParts[0]
    const month = dateParts[1] - 1 // Mês é indexado a partir de 0
    const year = dateParts[2]
    const dayOfWeek = new Date(year, month, day).getDay()
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]
    return daysOfWeek[dayOfWeek]
  }

  useEffect(() => {
    async function loadDados() {
      const dados = await lerDados()
      setDados(dados)
    }
    loadDados()
  }, [])

  const views = dados?.map((dado, index) => {
    const dayOfSchedule = getDayOfWeek(dado.currentDay)
    if (currentDay === dayOfSchedule) {
      return (
        <View style={styles.containerInfoDay} key={index}>
          <Text style={styles.infoDayHour}>{dado.hour}</Text>
          <Text style={styles.infoDayText}>{dado.description}</Text>
        </View>
      )
    } else {
      return null
    }
  })

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

      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View style={styles.infoText}>
          {views ? (
            views
          ) : (
            <View style={styles.containerNoSchedules}>
              <Text style={styles.noSchedules}>Não há agendamentos</Text>
            </View>
          )}
        </View>
      </ScrollView>

      {/* Tab Actions Buttons */}

      <View style={styles.containerSchedulingButton}>
        <TouchableOpacity style={styles.schedulingButton} onPress={handlePress}>
          <Text style={styles.schedulingButtonText}>Novo Agendamento</Text>
        </TouchableOpacity>
      </View>
      <SchedulingModalChoice
        visible={showModalChoice}
        onClose={() => setShowModalChoice(false)}
      />
    </View>
  )
}
