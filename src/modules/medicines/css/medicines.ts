import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  medicinesContainer: {
    backgroundColor: '#D7E6F1',
    height: '84%',
    paddingVertical: 0,
    paddingHorizontal: 30,
  },
  navigationMedicinesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  helloMedicinesText: {
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
  titleMedicinesContainer: {
    marginTop: 0,
    marginBottom: 60,
  },//a partir daqui
  medicinesList: {
    //backgroundColor: '#fff',
    marginLeft: 18,
    marginRight: 18,
    
  },
  containerMedicinesContent: {
    width: '100%',
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  nameContentText:{
    fontSize: 25,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  viewMedicineContent:{
    flexDirection: 'row',
    marginBottom: 3,
  },
  FuncaoContentText:{
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
  containerMedicineButton: {
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
    paddingBottom: 40,
  },
  medicineButton: {
    justifyContent: 'center',
    backgroundColor: '#1E90FF',
    padding: 20,
    borderRadius: 20,
    elevation: 10,
    shadowOpacity: 100,
  },
  medicineButtonText: {
    color: '#fff',
    verticalAlign: 'middle',
    fontWeight: 'bold',
  },
})
