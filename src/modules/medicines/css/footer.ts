import { StyleSheet } from 'react-native'
import { GREEN_50, GREEN_600 } from '../../../shared/ui/colors'

export const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: GREEN_50,
    paddingHorizontal: 60,
    paddingVertical: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    height: '20%',
  },
  footerButton: {
    width: '25%',
    borderRadius: 20,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerButtonActive: {
    width: '25%',
    backgroundColor: GREEN_600,
    borderRadius: 20,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerButtonImage: {
    height: 30,
    width: 30,
  },
  footerButtonImageActive: {
    height: 30,
    width: 30,
    tintColor: 'white',
  },
})
