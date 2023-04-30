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
    //marginRight: 25,
  },
  footerButtonActive: {
    width: '25%',
    backgroundColor: '#1E90FF',
    borderRadius: 20,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    //marginRight: 25
  },
  footerButtonImage: {
    height: 43,
    width: 43,
    tintColor: '#383f42',
    //marginRight: 30,
    //marginLeft: 40,
  },
  footerButtonImageActive: {
    height: 43,
    width: 43,
    tintColor: '#195cf7',
   // marginRight: 30,
    //marginLeft: 40,
  },
})
