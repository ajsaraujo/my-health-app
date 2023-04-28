import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  medicinesContainer: {
    backgroundColor: '#D7E6F1',
    height: '75%',
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
  },
  containerMedicinesContent: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
  },
  infoMedicinesText: {
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
  viewMedicinesButton: {
    backgroundColor: '#1E90FF',
    marginTop: 10,
    marginLeft: 5,
    padding: 10,
    borderRadius: 10,
    height: '100%',
  },
  viewMedicinesButtonText: {
    marginTop: 10,
  },
  containerMedicineButton: {
    marginTop: 100,
    width: '100%',
    alignItems: 'center',
  },
  medicineButton: {
    justifyContent: 'center',
    backgroundColor: '#1E90FF',
    padding: 20,
    borderRadius: 20,
  },
  medicineButtonText: {
    color: '#fff',
    verticalAlign: 'middle',
    fontWeight: 'bold',
  },
})
