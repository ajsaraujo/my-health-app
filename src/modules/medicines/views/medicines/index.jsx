import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import { styles } from '../../css/medicines'
import MedSchedule from '../form/choiceSchedule/scheduleMed'
import Content from './content'
import * as FileSystem from 'expo-file-system'

const medicinesList = []

async function getMedicines() {
  try {
    const caminho = `${FileSystem.documentDirectory}medicines.json`

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
      // console.log(dado)
      // Cria um novo objeto JSON com os dados
      const conteudo = {
        id: dado.id,
        nome: dado.nomeMedicamento,
        funcao: dado.funcMedicamento,
        descricao: dado.descMedicamento,
        periodo: dado.periodo,
        data_inicio: dado.dataInicio,
        data_fim: dado.dataFinal,
        horario: dado.hour,
      }

      // Verifica se o objeto JSON já existe no array
      let jsonExistente = medicinesList.find((json) => json.id === conteudo.id)

      if (jsonExistente) {
        // Se já existir, exibe uma mensagem de erro
        console.log(`Erro: já existe um objeto JSON com ID ${conteudo.id}`)
      } else {
        // Se não existir, adiciona o novo objeto JSON ao array
        medicinesList.push(conteudo)
      }
    })
  } catch (error) {
    console.log('Erro ao ler o JSON:', error)
  }
}

export default function Medicines() {
  const [dados, setDados] = useState(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    async function loadDados() {
      const dados = await getMedicines()
      setDados(dados)
    }
    loadDados()
  }, [])

  const handlePress = () => {
    setShowModal(true)
  }

  return (
    <View style={styles.medicinesContainer}>
      {/* Tab Title */}
      <View style={styles.titleMedicinesContainer}>
        <Text style={styles.helloMedicinesText}>Medicamentos</Text>
      </View>

      {/* Tab Content */}
      <FlatList
        style={styles.medicinesList}
        data={medicinesList}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator
        renderItem={({ item }) => <Content data={item} />}
      />

      {/* Tab Actions Buttons */}

      <View style={styles.containerMedicineButton}>
        <TouchableOpacity style={styles.medicineButton} onPress={handlePress}>
          <Text style={styles.medicineButtonText}>Novo Medicamento</Text>
        </TouchableOpacity>
      </View>
      <MedSchedule visible={showModal} onClose={() => setShowModal(false)} />
    </View>
  )
}
