import { render, screen } from '@testing-library/react-native'
import { CheckBox } from './CheckBox'

describe('CheckBox', () => {
  it('deve renderizar todas as alternativas', () => {
    render(
      <CheckBox
        items={['Pizza', 'Hamburguer', 'Sushi']}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onSelectionChange={() => {}}
        selectedItems={[]}
      ></CheckBox>
    )

    expect(screen.queryByText('Pizza')).toBeVisible()
    expect(screen.queryByText('Hamburguer')).toBeVisible()
    expect(screen.queryByText('Sushi')).toBeVisible()
  })
})
