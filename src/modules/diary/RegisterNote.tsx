import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RouteParams } from '../../routeParams'

type DiaryProps = NativeStackScreenProps<RouteParams, 'RegisterNote'>

export default function RegisterNote(props: DiaryProps) {
  const [noteText, setNoteText] = useState('')
  const [notes, setNotes] = useState([])

  const handleAddNote = () => {
    if (noteText.length > 0) {
      const currentTime = new Date().toLocaleTimeString()
      setNotes([...notes, { text: noteText, time: currentTime }])
      setNoteText('')
    }
  }

  const handleDeleteNote = (index, time) => {
    const newNotes = [...notes]
    const indexToDelete = newNotes.findIndex((note) => note.time === time)
    newNotes.splice(indexToDelete, 1)
    setNotes(newNotes)
  }

  return (
    <View style={styles.container}>
      <View style={styles.notesContainer}>
        {notes.map((note, index) => (
          <TouchableOpacity
            key={index}
            style={styles.note}
            onPress={() => handleDeleteNote(index, note.time)}
          >
            <Text style={styles.noteText}>{note.text}</Text>
            <Text style={styles.noteTime}>{note.time}</Text>
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
        <TouchableOpacity style={styles.addButton} onPress={handleAddNote}>
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  notesContainer: {
    flex: 1,
    padding: 20,
  },
  note: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    marginVertical: 10,
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
    backgroundColor: '#007aff',
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
