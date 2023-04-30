import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  proceduresContainer: {
    backgroundColor: '#D7E6F1',
    height: '84%',
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
  },//a partir daqui
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
    borderRadius: 10,
    padding: 10,
  },
  nameContentText:{
    fontSize: 20,
    marginBottom: 10,
  },
  viewProcedureContent:{
    flexDirection: 'row',
    marginBottom: 3,
  },
  localContentText:{
    marginBottom: 3,
  },
  startDateContentText:{
    marginRight: 25,
  },
  endDateContentText:{

  },
  timeContentText:{

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
    backgroundColor: '#1E90FF',
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
