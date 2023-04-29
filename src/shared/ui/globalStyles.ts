import { StyleSheet } from 'react-native'

import { GREEN_400, GREEN_600, RED } from './colors'

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

  marginTop6: {
    marginTop: 48,
  },
  marginTop7: {
    marginTop: 56,
  },

  marginTop8: {
    marginTop: 128,
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

  marginStart1: {
    marginStart: 128,
  },

  fontSize1: {
    fontSize: 8,
  },

  fontSize2: {
    fontSize: 16,
  },

  fontSize3: {
    fontSize: 24,
  },

  fontSize4: {
    fontSize: 32,
  },

  iconBall: {
    backgroundColor: GREEN,
    width: 100,
    height: 100,
    borderRadius: 50,
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
})
