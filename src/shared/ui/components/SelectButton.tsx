import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native'

import { GRAY_300, GRAY_50, GREEN_700 } from '../colors'
import { StyledText } from './StyledText'

export function SelectButton(props: {
  options: string[]
  selectedOption: string
  onSelectionChange: (value: string) => unknown
}) {
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
    <View style={styles.buttonsContainer}>
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
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },

  lastButton: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },

  selectedButton: {
    backgroundColor: GREEN_700,
    borderColor: GREEN_700,
    color: 'white',
  },
})
