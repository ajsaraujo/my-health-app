import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { styles } from '../../css/historic'
import * as FileSystem from 'expo-file-system'
import Content from './content'

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

export default function Historic() {
  const [dados, setDados] = useState(null)

  useEffect(() => {
    async function loadDados() {
      const dados = await getHistoric()
      setDados(dados)
    }
    loadDados()
  }, [])

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
        <TouchableOpacity style={styles.historicButton}>
          <Text style={styles.historicButtonText}>Anexar Resultado</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
