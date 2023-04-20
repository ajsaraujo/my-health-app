import { View } from 'react-native'
import { Text } from 'react-native'
import { SelectButton } from './SelectButton'
import { useState } from 'react'
import { render, screen } from '@testing-library/react-native'
import { press } from '@shared/utils/testing'

describe('SelectButton', () => {
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
  it('deve selecionar uma opção', () => {
    render(<ExampleComponent></ExampleComponent>)

    press('Tarde')

    expect(screen.queryByText('Opção selecionada: Tarde')).toBeVisible()
  })

  it('deve alterar a seleção', () => {
    render(<ExampleComponent></ExampleComponent>)

    press('Tarde')
    press('Noite')

    expect(screen.queryByText('Opção selecionada: Noite')).toBeVisible()
  })

  it('não deve desfazer a seleção se clicar duas vezes', () => {
    render(<ExampleComponent></ExampleComponent>)

    press('Tarde')
    press('Tarde')

    expect(screen.queryByText('Opção selecionada: Tarde')).toBeVisible()
  })
})
