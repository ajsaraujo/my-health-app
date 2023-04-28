import React, { useState } from 'react'
import { TextInput } from 'react-native'

const TimeInput = (props) => {
  const [value, setValue] = useState('')

  const handleTextChange = (text) => {
    // Remove caracteres que não são números
    const cleanedValue = text.replace(/[^0-9]/g, '')

    // Verifica se o valor segue o formato __:__
    if (cleanedValue.length <= 2) {
      setValue(cleanedValue)
    } else {
      setValue(`${cleanedValue.slice(0, 2)}:${cleanedValue.slice(2)}`)
    }
    props.onChangeText()
  }

  return (
    <TextInput
      maxLength={5}
      placeholder={props.placeholder}
      keyboardType="numeric"
      onChangeText={handleTextChange}
      value={value}
    />
  )
}

export default TimeInput
