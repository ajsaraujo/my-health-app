import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
} from 'react-native'

import { GRAY_300, GRAY_50, GREEN_700 } from '../colors'
import { StyledText } from './StyledText'

/**
 * Componente de SelectButton. Seu comportamento é equivalente ao de RadioButtons, ou seja:
 * deve ser usado para solicitar ao usuário que escolha uma dentre várias opções.
 *
 * @argument options Lista de opções que será exibida
 * @argument selectedOption Opção selecionada
 * @argument onSelectionChange Handler que será chamado quando o usuário escolher uma nova opção
 *
 * @usage
 * Na maioria das vezes nós passaremos o retorno de uma chamada de `useState` para `selectedOption` e `onSelectionChange`.
 *
 * Por exemplo:
 * ```tsx
 * const allOptions = ['Pizza', 'Sushi', 'Hamburguer']
 * const [selectedOption, setSelectedOption] = useState<string[]>([])
 *
 * return <CheckBox
 *  items={allItems}
 *  selectedOption={selectedOption}
 *  onSelectionChange={setSelectedOption}
 * ></CheckBox>
 * ```
 */
export function SelectButton(
  props: {
    options: string[]
    selectedOption: string
    onSelectionChange: (value: string) => unknown
  } & ViewProps
) {
  const { options, selectedOption, onSelectionChange } = props

  function isSelected(option: string): boolean {
    return option === selectedOption
  }

  function select(option: string) {
    if (isSelected(option)) {
      return
    }

    onSelectionChange(option)
  }

  function isFirstOption(option: string) {
    return options[0] === option
  }

  function isLastOption(option: string) {
    return options[options.length - 1] === option
  }

  return (
    <View {...props} style={[styles.buttonsContainer, props.style]}>
      {options.map((option) => (
        <OneButton
          style={[
            styles.button,
            isFirstOption(option) && styles.firstButton,
            isLastOption(option) && styles.lastButton,
            isSelected(option) && styles.selectedButton,
          ]}
          key={option}
          label={option}
          selected={isSelected(option)}
          onPress={() => select(option)}
        ></OneButton>
      ))}
    </View>
  )
}

function OneButton(
  props: { label: string; selected: boolean } & TouchableOpacityProps
) {
  const { label, selected } = props

  return (
    <TouchableOpacity {...props}>
      <StyledText
        style={[styles.buttonText, selected && styles.selectedButtonText]}
      >
        {label}
      </StyledText>
    </TouchableOpacity>
  )
}

const SELECT_BUTTON_BORDER_RADIUS = 5

const styles = StyleSheet.create({
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },

  button: {
    flex: 1,
    paddingVertical: 16,
    borderColor: GRAY_300,
    borderWidth: 1,
    backgroundColor: GRAY_50,
  },

  buttonText: {
    fontSize: 18,
    textAlign: 'center',
  },
  selectedButtonText: {
    color: 'white',
    fontWeight: '500',
  },

  firstButton: {
    borderTopLeftRadius: SELECT_BUTTON_BORDER_RADIUS,
    borderBottomLeftRadius: SELECT_BUTTON_BORDER_RADIUS,
  },

  lastButton: {
    borderTopRightRadius: SELECT_BUTTON_BORDER_RADIUS,
    borderBottomRightRadius: SELECT_BUTTON_BORDER_RADIUS,
  },

  selectedButton: {
    backgroundColor: GREEN_700,
    borderColor: GREEN_700,
    color: 'white',
  },
})
