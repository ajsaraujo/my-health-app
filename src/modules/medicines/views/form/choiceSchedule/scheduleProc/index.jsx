import React, { useState } from 'react'
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
  FlatList,
} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import DateInput from '../../DateInput'
import TimeInput from '../../TimeInput'
import { styles } from '../../../../css/form/schedule'
import * as FileSystem from 'expo-file-system'

const diasDaSemana = [
  { pt: 'Domingo', en: 'Sunday' },
  { pt: 'Segunda', en: 'Monday' },
  { pt: 'Terça', en: 'Tuesday' },
  { pt: 'Quarta', en: 'Wednesday' },
  { pt: 'Quinta', en: 'Thursday' },
  { pt: 'Sexta', en: 'Friday' },
  { pt: 'Sábado', en: 'Saturday' },
]
let idCounter = 1 // Inicialize com o último ID utilizado

const SchedulingModalProc = ({ visible, onClose }) => {
  const [refresh, setRefresh] = useState(false)
  const [nomeProc, setNomeProc] = useState('')
  const [localProc, setLocalProc] = useState('')
  const [descProc, setDescProc] = useState('')
  const [selDateIni, setSelDateIni] = useState('')
  const [selDateFinal, setSelDateFinal] = useState('')
  const [horario, setHorario] = useState('')
  const [periodo, setPeriodo] = useState(null)

  const [selectedDay, setSelectedDay] = useState(null)

  function incrementId() {
    idCounter++
  }

  const handleDayChange = (day) => {
    setSelectedDay(day)
  }

  const cadAgendamento = {
    id: idCounter,
    hour: horario,
    description: descProc,
    dayOfWeek: selectedDay,
  }

  const cadHistoric = {
    id: idCounter,
    date: new Date().toLocaleDateString('pt-BR'),
    description: nomeProc,
    dataInicio: selDateIni,
    dataFinal: selDateFinal,
    hour: new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    }),
  }

  const cadProcedimento = {
    id: idCounter,
    nomeProcedimento: nomeProc,
    locProcedimento: localProc,
    descProcedimento: descProc,
    dataInicio: selDateIni,
    dataFinal: selDateFinal,
    hour: horario,
    periodo: periodo,
    result: null,
  }

  function alertSaveProc() {
    Alert.alert(
      'Sucesso',
      'Procedimento agendado com sucesso',
      [
        {
          text: 'OK',
          style: 'default',
          onPress: () => onClose(),
        },
      ],
      { cancelable: false }
    )
  }

  async function saveHistoric() {
    try {
      let dado = cadHistoric
      const caminho = `${FileSystem.documentDirectory}historic.json`

      // Verifica se o arquivo já existe
      const infoArquivo = await FileSystem.getInfoAsync(caminho)

      let dados
      if (infoArquivo.exists) {
        // Se o arquivo já existe, lê os dados existentes
        const arquivo = await FileSystem.readAsStringAsync(caminho)
        dados = JSON.parse(arquivo)

        // Adiciona o novo dado no array
        dados.push(dado)
      } else {
        // Se o arquivo não existe, cria um novo array contendo o dado
        dados = [dado]
      }

      // Converte o array para string JSON
      const dadosString = JSON.stringify(dados)

      // Salva os dados no arquivo
      await FileSystem.writeAsStringAsync(caminho, dadosString)

      alertSaveProc()
    } catch (error) {
      console.log('Erro ao adicionar ao JSON:', error)
    }
  }

  async function saveProc() {
    try {
      let dado = cadProcedimento
      const caminho = `${FileSystem.documentDirectory}procedures.json`

      // Verifica se o arquivo já existe
      const infoArquivo = await FileSystem.getInfoAsync(caminho)

      let dados
      if (infoArquivo.exists) {
        // Se o arquivo já existe, lê os dados existentes
        const arquivo = await FileSystem.readAsStringAsync(caminho)
        dados = JSON.parse(arquivo)

        // Adiciona o novo dado no array
        dados.push(dado)
      } else {
        // Se o arquivo não existe, cria um novo array contendo o dado
        dados = [dado]
      }

      // Converte o array para string JSON
      const dadosString = JSON.stringify(dados)

      // Salva os dados no arquivo
      await FileSystem.writeAsStringAsync(caminho, dadosString)
    } catch (error) {
      console.log('Erro ao adicionar ao JSON:', error)
    }
  }

  async function agendarProc() {
    try {
      let dado = cadAgendamento
      const caminho = `${FileSystem.documentDirectory}schedules.json`

      // Verifica se o arquivo já existe
      const infoArquivo = await FileSystem.getInfoAsync(caminho)

      let dados
      if (infoArquivo.exists) {
        // Se o arquivo já existe, lê os dados existentes
        const arquivo = await FileSystem.readAsStringAsync(caminho)
        dados = JSON.parse(arquivo)

        // Adiciona o novo dado no array
        dados.push(dado)
      } else {
        // Se o arquivo não existe, cria um novo array contendo o dado
        dados = [dado]
      }

      // Converte o array para string JSON
      const dadosString = JSON.stringify(dados)

      // Salva os dados no arquivo
      await FileSystem.writeAsStringAsync(caminho, dadosString)

      console.log('Dado adicionado com sucesso!')
    } catch (error) {
      console.log('Erro ao adicionar ao JSON:', error)
    }
  }

  return (
    <Modal
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
      transparent
    >
      <TouchableWithoutFeedback>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Novo Procedimento</Text>
            <TextInput
              onChangeText={(event) => {
                setNomeProc(event)
              }}
              value={nomeProc}
              style={styles.input}
              placeholder="Nome"
            />
            <TextInput
              onChangeText={(event) => {
                setLocalProc(event)
              }}
              value={localProc}
              style={styles.input}
              placeholder="Local"
            />
            <TextInput
              onChangeText={(event) => {
                setDescProc(event)
              }}
              value={descProc}
              style={styles.input}
              placeholder="Descrição"
            />
            <View style={styles.input}>
              <DateInput
                setValue={setSelDateIni}
                value={selDateIni}
                placeholder={'Data de início'}
              />
            </View>
            <View style={styles.input}>
              <DateInput
                setValue={setSelDateFinal}
                value={selDateFinal}
                placeholder={'Data de fim'}
              />
            </View>
            <View style={styles.input}>
              <TimeInput
                setValue={setHorario}
                value={horario}
                placeholder={'Horário'}
              />
            </View>
            <View style={styles.input}>
              <Picker
                style={{ width: '100%' }}
                selectedValue={periodo}
                onValueChange={(item, indexItem) => {
                  setPeriodo(item)
                }}
              >
                <Picker.Item key={0} value={null} label="Selecione o período" />
                <Picker.Item
                  key={0}
                  value="Somente uma vez"
                  label="Somente uma vez"
                />
                <Picker.Item
                  key={0}
                  value="A cada 15 dias"
                  label="A cada 15 dias"
                />
                <Picker.Item
                  key={0}
                  value="A cada 30 dias"
                  label="A cada 30 dias"
                />
              </Picker>
            </View>
            <View style={styles.input}>
              <Picker
                style={{ width: '100%' }}
                selectedValue={selectedDay}
                onValueChange={handleDayChange}
              >
                <Picker.Item key={0} value={null} label="Selecione o dia" />
                {diasDaSemana.map((dia) => (
                  <Picker.Item key={dia.pt} label={dia.pt} value={dia.en} />
                ))}
              </Picker>
            </View>
            <View style={styles.containerSchedulingButton}>
              <TouchableOpacity
                style={styles.schedulingButton}
                onPress={onClose}
              >
                <Text style={styles.schedulingButtonText}>Fechar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.schedulingButton}
                onPress={() => {
                  agendarProc()
                  saveProc()
                  saveHistoric()
                  incrementId()
                }}
              >
                <Text style={styles.schedulingButtonText}>Agendar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

export default SchedulingModalProc
