import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import { styles } from '../../css/procedures'
import SchedulingModalProc from '../form/choiceSchedule/scheduleProc'
import Content from './content'
import * as FileSystem from 'expo-file-system'

const setaInfo = require('../../img/arrow-info.png')

const proceduresList = []

async function getProcedures() {
  try {
    const caminho = `${FileSystem.documentDirectory}procedures.json`

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
    var count_proc = 0

    dados.forEach((dado) => {
      conteudo = {
        id: count_proc,
        nome: dado.nomeProcedimento,
        local: dado.locProcedimento,
        data_inicio: dado.dataInicio,
        data_fim: dado.dataFinal,
        horario: dado.hour,
      }
      proceduresList.push(conteudo)
      count_proc++
    })
  } catch (error) {
    console.log('Erro ao ler o JSON:', error)
  }
}

export default function Procedures() {
  const [dados, setDados] = useState(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    async function loadDados() {
      const dados = await getProcedures()
      setDados(dados)
    }
    loadDados()
  }, [])

  const handlePress = () => {
    setShowModal(true)
  }

  return (
    <View style={styles.proceduresContainer}>
      {/* Tab Title */}
      <View style={styles.titleProceduresContainer}>
        <Text style={styles.helloProceduresText}>Procedimentos</Text>
      </View>

      {/* Tab Content */}
      <FlatList
        style={styles.proceduresList}
        data={proceduresList}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator
        renderItem={({ item }) => <Content data={item} />}
      />

      {/* Tab Actions Buttons */}

      <View style={styles.containerProcedureButton}>
        <TouchableOpacity style={styles.procedureButton} onPress={handlePress}>
          <Text style={styles.procedureButtonText}>Novo Procedimento</Text>
        </TouchableOpacity>
      </View>

      <SchedulingModalProc
        visible={showModal}
        onClose={() => setShowModal(false)}
      />
    </View>
  )
}
