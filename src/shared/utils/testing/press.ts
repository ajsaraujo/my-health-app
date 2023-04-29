import { fireEvent } from '@testing-library/react-native'
import { screen } from '@testing-library/react-native'

/**
 * Utilitário para apertar alguma coisa em um teste.
 *
 * @usage
 * ```
 * // Passando uma string, vai buscar o texto na tela
 * press('Entrar')
 *
 * // Também pode passar o elemento
 * const button = screen.getByRole('button')
 * press(button)
 * ```
 */
export function press(value: unknown) {
  if (typeof value === 'string') {
    fireEvent.press(screen.queryByText(value))
  } else {
    fireEvent.press(value)
  }
}
