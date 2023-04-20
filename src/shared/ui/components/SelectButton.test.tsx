import { useState } from 'react'
import { Text } from 'react-native'
import { SelectButton } from './SelectButton'
import { fireEvent, render, screen } from '@testing-library/react-native'

describe('SelectButton', () => {
  function ExampleComponent() {
    const options = ['Masculino', 'Feminino']
    const [selectedOption, setSelectedOption] = useState('')

    return (
      <>
        <SelectButton
          options={options}
          selectedOption={selectedOption}
          onSelectionChange={setSelectedOption}
        ></SelectButton>

        <Text>Gênero: {selectedOption || 'Não selecionado'}</Text>
      </>
    )
  }

  beforeEach(() => {
    render(<ExampleComponent></ExampleComponent>)
  })

  it('deve selecionar uma opção', () => {
    fireEvent.press(screen.getByText('Masculino'))

    expect(screen.queryByText('Gênero: Masculino')).toBeVisible()
  })
})
