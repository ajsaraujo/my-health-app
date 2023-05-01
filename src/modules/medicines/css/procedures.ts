import React from 'react'
import { StyleSheet, Text } from 'react-native'

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
    padding: 10,
    elevation: 3,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  nameContentText: {
    fontSize: 25,
    marginBottom: 10,
    paddingTop: 15,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: '#333',
    borderRadius: 20,
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
    color: '#c4b529',
    fontSize: 18,
    fontWeight: 'bold',
  },
  endDateContentText: {
    color: '#c4b529',
    fontSize: 18,
    fontWeight: 'bold',
  },
  timeContentText: {
    color: '#48494a',
    fontSize: 20,
    fontWeight: 'bold',
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
