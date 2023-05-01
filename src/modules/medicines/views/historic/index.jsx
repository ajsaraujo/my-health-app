import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { styles } from '../../css/historic'
import * as FileSystem from 'expo-file-system'
import Content from './content'
import Result from '../form/result'

const setaInfo = require('../../img/arrow-info.png')

const historicList = []

async function getHistoric() {
  try {
    const caminho = `${FileSystem.documentDirectory}historic.json`

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
    var count_hist = 0
    console.log(dados)

    dados.forEach((dado) => {
      // console.log(dado)
      // Cria um novo objeto JSON com os dados
      const conteudo = {
        id: count_hist,
        date: dado.date,
        description: dado.description,
        operation: dado.operation,
        hour: dado.hour,
      }

      // Verifica se o objeto JSON já existe no array
      let jsonExistente = historicList.find((json) => json.id === conteudo.id)

      if (jsonExistente) {
        // Se já existir, exibe uma mensagem de erro
        console.log(`Erro: já existe um objeto JSON com ID ${conteudo.id}`)
      } else {
        // Se não existir, adiciona o novo objeto JSON ao array
        historicList.push(conteudo)
        count_hist++
      }
    })
  } catch (error) {
    console.log('Erro ao ler o JSON:', error)
  }
}

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
      // Cria um novo objeto JSON com os dados
      const conteudo = {
        id: count_proc,
        name: dado.nomeProcedimento,
      }

      // Verifica se o objeto JSON já existe no array
      let jsonExistente = proceduresList.find((json) => json.id === conteudo.id)

      if (jsonExistente) {
        // Se já existir, exibe uma mensagem de erro
        console.log(`Erro: já existe um objeto JSON com ID ${conteudo.id}`)
      } else {
        // Se não existir, adiciona o novo objeto JSON ao array
        proceduresList.push(conteudo)
        count_proc++
      }
      console.log(proceduresList)
    })
  } catch (error) {
    console.log('Erro ao ler o JSON:', error)
  }
}

export default function Historic() {
  const [dados, setDados] = useState(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    async function loadDados() {
      const dados = await getHistoric()
      setDados(dados)
    }
    loadDados()
  }, [])

  const [dadosProcedures, setDadosProcedures] = useState(null)

  useEffect(() => {
    async function loadDados() {
      const Procedures = await getProcedures()
      setDadosProcedures(Procedures)
    }
    loadDados()
  }, [])

  const handlePress = () => {
    setShowModal(true)
  }

  return (
    <View style={styles.historicsContainer}>
      {/* Tab Title */}
      <View style={styles.titleHistoricsContainer}>
        <Text style={styles.helloHistoricsText}>Histórico</Text>
      </View>

      {/* Tab Content */}
      <FlatList
        style={styles.historicList}
        data={historicList}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator
        renderItem={({ item }) => <Content data={item} />}
      />

      {/* Tab Actions Buttons */}

      <View style={styles.containerHistoricButton}>
        <TouchableOpacity style={styles.historicButton} onPress={handlePress}>
          <Text style={styles.historicButtonText}>Anexar Resultado</Text>
        </TouchableOpacity>
      </View>

      <Result
        visible={showModal}
        onClose={() => setShowModal(false)}
        proceduresList={proceduresList}
      />
    </View>
  )
}
