import { StyleSheet } from 'react-native'

import { RED } from './colors'

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

  errorMessage: {
    fontSize: 16,
    color: RED,
  },

  elevation1: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 1,
  },

  elevation2: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 2,
  },

  elevation3: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 3,
  },

  elevation4: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 6.68,
    elevation: 4,
  },

  elevation5: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 9.41,
    elevation: 5,
  },

  debug: {
    borderWidth: 1,
    borderColor: 'red',
  },
})
