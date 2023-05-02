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
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 40,
    padding: 20,
    elevation: 3,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  nameContentText: {
    fontSize: 25,
    marginBottom: 10,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    color: '#333',
    borderRadius: 5,
  },
  viewProcedureContent: {
    flexDirection: 'column',
    alignItems: 'baseline',
    marginBottom: 3,
    paddingLeft: 15,
  },
  calendarDate: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  calendarIcon: {
    height: 43,
    width: 43,
  },
  startDateContentText: {
    fontSize: 18,
  },
  endDateContentText: {
    fontSize: 18,
  },
  timeContentText: {
    fontSize: 20,
  },
  containerHour: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  hourIcon: {
    marginRight: 10,
    height: 30,
    width: 30,
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
