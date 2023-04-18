import { StyleSheet } from 'react-native'
import {
  GRAY_100,
  GRAY_200,
  GRAY_300,
  GRAY_400,
  GRAY_500,
  GREEN,
  LIGHT_GRAY,
  RED,
} from './colors'

export const globalStyles = StyleSheet.create({
  marginTop1: {
    marginTop: 8,
  },
  marginTop2: {
    marginTop: 16,
  },
  marginTop3: {
    marginTop: 24,
  },
  marginTop4: {
    marginTop: 32,
  },
  marginTop5: {
    marginTop: 40,
  },
  marginBottom1: {
    marginBottom: 8,
  },
  marginBottom2: {
    marginBottom: 16,
  },
  marginBottom3: {
    marginBottom: 24,
  },
  marginBottom4: {
    marginBottom: 32,
  },
  marginBottom5: {
    marginTop: 40,
  },

  centerHorizontally: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  centerVertically: {
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
  },

  defaultContainer: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },

  textInput: {
    borderWidth: 2,
    borderColor: GRAY_300,
    borderRadius: 4,
    width: '100%',
    padding: 8,
    outlineStyle: 'none',
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

  errorMessage: {
    fontSize: 16,
    color: RED,
  },
})
