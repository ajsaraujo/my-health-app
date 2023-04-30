import React, { useState } from 'react'
import { TextInput } from 'react-native'

const DateInput = (props) => {
  const handleTextChange = (text) => {
    // Remove caracteres que não são números
    const cleanedValue = text.replace(/[^0-9]/g, '')

    // Verifica se o valor segue o formato dd/mm/aaaa
    if (cleanedValue.length <= 2) {
      props.setValue(cleanedValue)
    } else if (cleanedValue.length <= 4) {
      props.setValue(`${cleanedValue.slice(0, 2)}/${cleanedValue.slice(2)}`)
    } else if (cleanedValue.length <= 8) {
      props.setValue(
        `${cleanedValue.slice(0, 2)}/${cleanedValue.slice(
          2,
          4
        )}/${cleanedValue.slice(4)}`
      )
    } else {
      props.setValue(
        `${cleanedValue.slice(0, 2)}/${cleanedValue.slice(
          2,
          4
        )}/${cleanedValue.slice(4, 8)}`
      )
    }
  }

  return (
    <TextInput
      maxLength={10}
      placeholder={props.placeholder}
      keyboardType="numeric"
      onChangeText={handleTextChange}
      value={props.value}
    />
  )
}

export default DateInput
