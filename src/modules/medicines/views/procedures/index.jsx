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

    dados.forEach((dado) => {
      // Cria um novo objeto JSON com os dados
      const conteudo = {
        id: dado.id,
        nome: dado.nomeProcedimento,
        local: dado.locProcedimento,
        descricao: dado.descProcedimento,
        periodo: dado.periodo,
        data_inicio: dado.dataInicio,
        data_fim: dado.dataFinal,
        horario: dado.hour,
        result: dado.result,
      }

      // Verifica se o objeto JSON já existe no array
      let jsonExistente = proceduresList.find((json) => json.id === conteudo.id)

      if (jsonExistente) {
        // Se já existir, exibe uma mensagem de erro
        console.log(`Erro: já existe um objeto JSON com ID ${conteudo.id}`)
      } else {
        // Se não existir, adiciona o novo objeto JSON ao array
        proceduresList.push(conteudo)
      }
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
