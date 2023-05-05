import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RouteParams } from '../../routeParams'
import { GREEN } from '../../shared/ui/colors'
import salvar from '../../../assets/saveicon.png'
import voltar from '../../../assets/backIcon.png'
import enviar from '../../../assets/sendIcon.png'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import showError from './helpers/showError'
import showSuccess from './helpers/showSucess'

type DiaryProps = NativeStackScreenProps<RouteParams, 'RegisterNote'>

export default function RegisterNote(props: DiaryProps) {
  const [noteText, setNoteText] = useState('')
  const [notes, setNotes] = useState([])
  const [lastScreen, setLastScreen] = useState('')
  const navigation = useNavigation()

  useEffect(() => {
    const aux = navigation.addListener('state', () => {
      const previousScreen =
        navigation.getState().routes[navigation.getState().routes.length - 2]
          .name
      setLastScreen(previousScreen)
    })
    if (props.route.params)
      setNotes([...notes, { text: props.route.params.relato }])
    console.log('params: ', props.route.params)
  }, [])

  const handleAddNote = () => {
    if (noteText.length > 0) {
      setNotes([...notes, { text: noteText }])
      setNoteText('')
    }
  }

  const handleDeleteNote = (index, time) => {
    const newNotes = [...notes]
    const indexToDelete = newNotes.findIndex((note) => note.time === time)
    newNotes.splice(indexToDelete, 1)
    setNotes(newNotes)
  }

  const saveNewRegister = async () => {
    try {
      var relato = ''
      for (let i = 0; i < notes.length; i++) {
        relato = relato + notes[i].text + '\r\n'
      }
      if (lastScreen == 'Diário') {
        var response = await axios.post(
          `https://e0fb-138-255-87-166.ngrok-free.app/Registro/AddRegistro`,
          { relato, pacienteId: 1 }
        )
        showSuccess('Sucesso', 'Seu registro foi salvo com sucesso!')
      } else {
        var response = await axios.put(
          `https://e0fb-138-255-87-166.ngrok-free.app/Registro/UpdateRegistro`,
          { relato, id: props.route.params.id }
        )
        showSuccess('Sucesso', 'Seu registro foi atualizado com sucesso!')
      }
      props.navigation.goBack()
    } catch (err) {
      showError('Ocorreu um erro', err)
      props.navigation.goBack()
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.notesContainer}>
        {notes.map((note, index) => (
          <TouchableOpacity
            key={index}
            style={styles.note}
            onPress={() => {}}
            activeOpacity={0.7}
          >
            <Text style={styles.noteText}>{note.text}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua anotação"
          placeholderTextColor="#999"
          value={noteText}
          onChangeText={(text) => setNoteText(text)}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddNote}
          activeOpacity={0.7}
        >
          <Image source={enviar} style={styles.sendIcon} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.saveButton}
        activeOpacity={0.7}
        onPress={saveNewRegister}
      >
        <Image style={styles.saveIcon} source={salvar} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.backButton}
        activeOpacity={0.7}
        onPress={props.navigation.goBack}
      >
        <Image source={voltar} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0FFFF',
  },
  notesContainer: {
    flex: 1,
    padding: 15,
    marginTop: 8,
  },
  note: {
    padding: 5,
    marginVertical: 0,
    borderRadius: 5,
  },
  noteText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: GREEN,
    padding: 10,
    borderRadius: 20,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  saveButton: {
    backgroundColor: GREEN,
    width: 60,
    height: 60,
    borderRadius: 30,
    position: 'absolute',
    right: 20,
    bottom: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveIcon: {
    height: 40,
    width: 40,
  },
  backButton: {
    backgroundColor: '#FFF5EE',
    width: 60,
    height: 60,
    borderRadius: 30,
    position: 'absolute',
    right: 20,
    bottom: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendIcon: {
    height: 25,
    width: 25,
  },
})
