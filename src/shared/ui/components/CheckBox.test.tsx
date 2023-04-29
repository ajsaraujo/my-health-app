import { render, screen } from '@testing-library/react-native'
import { View } from 'react-native'
import { CheckBox } from './CheckBox'
import { useState } from 'react'
import { StyledText } from './StyledText'
import { press } from '@shared/utils/testing'

describe('CheckBox', () => {
  function ExampleComponent() {
    const heroes = ['Geralt', 'Vesemir', 'Yennefer']
    const [selectedHeros, setSelectedHeroes] = useState<string[]>([])

    return (
      <View>
        <CheckBox
          items={heroes}
          onSelectionChange={setSelectedHeroes}
          selectedItems={selectedHeros}
        ></CheckBox>

        <StyledText>
          Selected heroes: {selectedHeros.join(', ') || 'None'}
        </StyledText>
      </View>
    )
  }

  it('should start with all items unselected (because thats the initial value passed to selectedItems)', () => {
    render(<ExampleComponent></ExampleComponent>)

    expect(screen.queryByText('Selected heroes: None')).toBeVisible()
  })

  it('should select an item', () => {
    render(<ExampleComponent></ExampleComponent>)

    press('Geralt')
    press('Yennefer')

    expect(
      screen.queryByText('Selected heroes: Geralt, Yennefer')
    ).toBeVisible()
  })

  it('should unselect an item', () => {
    render(<ExampleComponent></ExampleComponent>)

    press('Yennefer')
    press('Yennefer')

    expect(screen.queryByText('Selected heroes: None')).toBeVisible()
  })
})
