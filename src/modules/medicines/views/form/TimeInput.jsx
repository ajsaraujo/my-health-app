import React, { useState } from 'react'
import { TextInput } from 'react-native'

const TimeInput = (props) => {
  const handleTextChange = (text) => {
    // Remove caracteres que não são números
    const cleanedValue = text.replace(/[^0-9]/g, '')

    // Verifica se o valor segue o formato __:__
    if (cleanedValue.length <= 2) {
      props.setValue(cleanedValue)
    } else {
      const horas = parseInt(cleanedValue.slice(0, 2))
      const minutos = parseInt(cleanedValue.slice(2))

      // Verifica se as horas estão dentro do intervalo de 0 a 23
      if (horas >= 0 && horas <= 23 && minutos >= 0 && minutos <= 59) {
        props.setValue(`${cleanedValue.slice(0, 2)}:${cleanedValue.slice(2)}`)
      }
    }
  }

  return (
    <TextInput
      maxLength={5}
      placeholder={props.placeholder}
      keyboardType="numeric"
      onChangeText={handleTextChange}
      value={props.value}
    />
  )
}

export default TimeInput
