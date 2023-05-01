import React, { useState } from 'react'
import { TextInput } from 'react-native'

const DateInput = (props) => {
  const [mesAtual, setMesAtual] = useState(new Date().getMonth() + 1)
  const [anoAtual, setAnoAtual] = useState(new Date().getFullYear())

  function AnoBissexto(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  }

  function diaspormes(year, month) {
    if (month === 2) {
      return AnoBissexto(year) ? 29 : 28
    } else if ([4, 6, 9, 11].includes(month)) {
      return 30
    } else {
      return 31
    }
  }

  const handleTextChange = (text) => {
    // Remove caracteres que não são números
    const cleanedValue = text.replace(/[^0-9]/g, '')

    // Verifica se o valor segue o formato dd/mm/aaaa
    if (
      cleanedValue.length <= 2 &&
      Number(cleanedValue) <= diaspormes(anoAtual, mesAtual)
    ) {
      props.setValue(cleanedValue)
    } else if (
      cleanedValue.length <= 4 &&
      Number(cleanedValue.slice(0, 2)) <= diaspormes(anoAtual, mesAtual) &&
      Number(cleanedValue.slice(2, 4)) <= mesAtual
    ) {
      props.setValue(`${cleanedValue.slice(0, 2)}/${cleanedValue.slice(2)}`)
    } else if (
      cleanedValue.length <= 8 &&
      Number(cleanedValue.slice(0, 2)) <= diaspormes(anoAtual, mesAtual) &&
      Number(cleanedValue.slice(2, 4)) <= 12 &&
      Number(cleanedValue.slice(4)) <= anoAtual
    ) {
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
