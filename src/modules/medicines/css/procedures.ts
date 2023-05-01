import { GREEN_50, GREEN_600 } from '@shared/ui/colors'
import { StyleSheet, Text } from 'react-native'

export const styles = StyleSheet.create({
  proceduresContainer: {
    backgroundColor: GREEN_50,
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
    marginBottom: 60,
  }, //a partir daqui
  proceduresList: {
    //backgroundColor: '#fff',
    marginLeft: 18,
    marginRight: 18,
  },
  containerProceduresContent: {
    width: '100%',
    marginTop: 10,
    height: 123,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    elevation: 3,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  nameContentText: {
    fontSize: 25,
    marginBottom: 5,
    paddingTop: 15,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: '#333',
  },
  viewProcedureContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 3,
    paddingLeft: 15,
    paddingTop: 5,
    backgroundColor: '#83a38e',
    borderRadius: 20,
    height: 46.5,
  },
  startDateContentText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 20,
  },
  endDateContentText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 20,
  },
  timeContentText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 15,
    paddingRight: 23,
  },
  //
  containerProcedureButton: {
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
    paddingBottom: 40,
  },
  procedureButton: {
    justifyContent: 'center',
    backgroundColor: GREEN_600,
    padding: 20,
    borderRadius: 20,
    elevation: 10,
    shadowOpacity: 100,
  },
  procedureButtonText: {
    color: '#fff',
    verticalAlign: 'middle',
    fontWeight: 'bold',
  },
})
