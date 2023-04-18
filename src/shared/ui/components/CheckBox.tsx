import { TouchableOpacity, View, StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { StyledText } from './StyledText'
import { GREEN_600 } from '../colors'

type CheckBoxProps = {
  items: string[]
  selectedItems?: string[]
  onSelectionChange: (items: string[]) => unknown
}

/**
 * Componente de checkbox (caixas de seleção).
 *
 * @argument items Lista de itens que será exibida
 * @argument selectedItems Lista de itens que foram selecionados
 * @argument onSelectionChange Handler que será chamado quando o usuário marcar/desmarcar uma caixinha
 *
 * @usage
 * Na maioria das vezes nós passaremos o retorno de uma chamada de `useState` para `selectedItems` e `onSelectionChange`.
 *
 * Por exemplo:
 * ```tsx
 * const allItems = ['Pizza', 'Sushi', 'Hamburguer']
 * const [selectedItems, setSelectedItems] = useState<string[]>([])
 *
 * return <CheckBox
 *  items={allItems}
 *  selectedItems={selectedItems}
 *  onSelectionChange={setSelectedItems}
 * ></CheckBox>
 * ```
 */
export function CheckBox(props: CheckBoxProps) {
  const { items, onSelectionChange } = props
  const selectedItems = props.selectedItems || []

  function isSelected(item: string) {
    return selectedItems.includes(item)
  }

  function removeItemFromSelection(item: string) {
    return selectedItems.filter((givenItem) => givenItem !== item)
  }

  function addItemToSelection(item: string) {
    return [...selectedItems, item]
  }

  function toggleSelection(item: string) {
    let updatedSelection: string[] = []

    if (isSelected(item)) {
      updatedSelection = removeItemFromSelection(item)
    } else {
      updatedSelection = addItemToSelection(item)
    }

    onSelectionChange(updatedSelection)
  }

  return (
    <View style={styles.allCheckBoxesContainer}>
      {items.map((item) => (
        <OneCheckbox
          key={item}
          value={item}
          onPress={() => toggleSelection(item)}
          selected={isSelected(item)}
        ></OneCheckbox>
      ))}
    </View>
  )
}

function OneCheckbox(props: {
  value: string
  onPress: () => void
  selected: boolean
}) {
  return (
    <TouchableOpacity
      style={styles.oneCheckBoxContainer}
      onPress={props.onPress}
    >
      <CheckboxSquare selected={props.selected}></CheckboxSquare>
      <StyledText style={styles.text}>{props.value}</StyledText>
    </TouchableOpacity>
  )
}

function CheckboxSquare(props: { selected: boolean }) {
  const { selected } = props

  return (
    <Ionicons
      size={24}
      color={GREEN_600}
      name={selected ? 'checkbox' : 'square-outline'}
    ></Ionicons>
  )
}

const styles = StyleSheet.create({
  allCheckBoxesContainer: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 16,
  },

  oneCheckBoxContainer: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 12,
    alignItems: 'center',
  },

  square: {
    width: 24,
    height: 24,
    backgroundColor: GREEN_600,
  },

  text: {
    lineHeight: 24,
  },
})
