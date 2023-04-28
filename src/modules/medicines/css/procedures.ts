import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  proceduresContainer: {
    backgroundColor: '#D7E6F1',
    height: '75%',
    paddingVertical: 0,
    paddingHorizontal: 30,
  },
  navigationProceduresContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  helloProceduresText: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
  },
  iconNavigationLeft: {
    marginRight: 150,
  },
  iconNavigationRight: {
    marginLeft: 150,
  },
  titleProceduresContainer: {
    marginTop: 0,
  },
  containerProceduresContent: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
  },
  infoProceduresText: {
    width: '85%',
    marginTop: 10,
    marginLeft: 5,
    fontSize: 15,
    textAlign: 'center',
    verticalAlign: 'middle',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    height: '100%',
  },
  viewProceduresButton: {
    backgroundColor: '#1E90FF',
    marginTop: 10,
    marginLeft: 5,
    padding: 10,
    borderRadius: 10,
    height: '100%',
  },
  viewProceduresButtonText: {
    marginTop: 10,
  },
  containerProcedureButton: {
    marginTop: 100,
    width: '100%',
    alignItems: 'center',
  },
  procedureButton: {
    justifyContent: 'center',
    backgroundColor: '#1E90FF',
    padding: 20,
    borderRadius: 20,
  },
  procedureButtonText: {
    color: '#fff',
    verticalAlign: 'middle',
    fontWeight: 'bold',
  },
})
