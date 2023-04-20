import { View } from 'react-native'
import { Text } from 'react-native'
import { SelectButton } from './SelectButton'
import { useState } from 'react'
import { fireEvent, render, screen } from '@testing-library/react-native'

describe('SelectButton', () => {
  it('deve selecionar uma opção', () => {
    function ExampleComponent() {
      const options = ['Dia', 'Tarde', 'Noite']
      const [selectedOption, setSelectedOption] = useState('')

      return (
        <View>
          <SelectButton
            options={options}
            selectedOption={selectedOption}
            onSelectionChange={setSelectedOption}
          ></SelectButton>

          <Text>Opção selecionada: {selectedOption}</Text>
        </View>
      )
    }

    render(<ExampleComponent></ExampleComponent>)

    fireEvent.press(screen.getByText('Tarde'))

    expect(screen.queryByText('Opção selecionada: Tarde')).toBeVisible()
  })
})
