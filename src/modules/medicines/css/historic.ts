import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  historicsContainer: {
    backgroundColor: '#D7E6F1',
    height: '75%',
    paddingVertical: 0,
    paddingHorizontal: 30,
  },
  navigationHistoricsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  helloHistoricsText: {
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
  titleHistoricsContainer: {
    marginTop: 0,
  },
  containerHistoricsContent: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
  },
  infoHistoricsDate: {
    width: '25%',
    marginTop: 10,
    marginLeft: 5,
    fontSize: 10,
    textAlign: 'center',
    verticalAlign: 'middle',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    height: '100%',
  },
  infoHistoricsText: {
    width: '55%',
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
  viewHistoricsButton: {
    backgroundColor: '#1E90FF',
    marginTop: 10,
    marginLeft: 5,
    padding: 10,
    borderRadius: 10,
    height: '100%',
  },
  viewHistoricsButtonText: {
    marginTop: 10,
  },
  containerHistoricButton: {
    marginTop: 100,
    width: '100%',
    alignItems: 'center',
  },
  historicButton: {
    justifyContent: 'center',
    backgroundColor: '#1E90FF',
    padding: 20,
    borderRadius: 20,
  },
  historicButtonText: {
    color: '#fff',
    verticalAlign: 'middle',
    fontWeight: 'bold',
  },
})
