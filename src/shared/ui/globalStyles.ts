import { StyleSheet } from 'react-native'
import { GREEN } from './colors'

export const globalStyles = StyleSheet.create({
  defaultContainer: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },

  textInput: {
    borderWidth: 2,
    borderColor: '#616161',
    borderRadius: 14,
    width: '100%',
    padding: 8,
  },

  textInputLabel: {
    color: '#616161',
    fontWeight: '500',
    fontSize: 19,
    marginBottom: 8,
  },

  textButton: {
    color: GREEN,
    textDecorationLine: 'underline',
    fontWeight: '500',
    fontSize: 18,
  },

  primaryButton: {
    backgroundColor: GREEN,
    padding: 14,
    borderRadius: 14,

    alignItems: 'center',
    justifyContent: 'center',

    elevation: 3,

    text: {
      color: 'white',
      fontSize: 21,
    },
  },
})
