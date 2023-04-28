import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#c3d1db',
    paddingHorizontal: 60,
    paddingVertical: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    height: '10.59%',
    marginBottom: 15, //blueStack: 71, //iphone: 55
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
    backgroundColor: '#1E90FF',
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
    tintColor: '#1E90FF',
  },
})
