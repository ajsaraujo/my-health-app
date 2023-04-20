import { useState } from 'react'
import { Text, View } from 'react-native'
import { SelectButton } from './SelectButton'
import { fireEvent, render, screen } from '@testing-library/react-native'

describe.skip('SelectButton', () => {
  function ExampleComponent() {
    const options = ['Masculino', 'Feminino']
    const [selectedOption, setSelectedOption] = useState('')

    return (
      <View>
        <SelectButton
          options={options}
          selectedOption={selectedOption}
          onSelectionChange={setSelectedOption}
        ></SelectButton>

        <Text>Gênero: {selectedOption || 'Não selecionado'}</Text>
      </View>
    )
  }

  it('deve selecionar uma opção', async () => {
    render(<ExampleComponent></ExampleComponent>)

    console.log(`Botão: ${await screen.findByText('Feminino')}`)

    expect(screen.queryByText('Gênero: Masculino')).toBeVisible()
  })
})
