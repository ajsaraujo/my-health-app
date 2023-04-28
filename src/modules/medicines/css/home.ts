import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  containerRemedies: {
    backgroundColor: '#D7E6F1',
    height: '75%',
    paddingVertical: 0,
    paddingHorizontal: 30,
  },
  helloRemediesText: {
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    marginTop: 20,
  },
  helloRemediesDate: {
    marginTop: 20,
    textAlign: 'center',
  },
  titleHomeContainer: {
    marginTop: 0,
  },
  containerDay: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tagDay: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
  },
  containerInfoDay: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
  },
  infoDayHour: {
    width: '20%',
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
  infoDayText: {
    width: '60%',
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
  infoDayButton: {
    backgroundColor: '#1E90FF',
    marginTop: 10,
    marginLeft: 5,
    padding: 10,
    borderRadius: 10,
    height: '100%',
  },
  infoDayButtonText: {
    marginTop: 10,
  },
  containerSchedulingButton: {
    marginTop: 100,
    width: '100%',
    alignItems: 'center',
  },
  schedulingButton: {
    justifyContent: 'center',
    backgroundColor: '#1E90FF',
    padding: 20,
    borderRadius: 20,
  },
  schedulingButtonText: {
    color: '#fff',
    verticalAlign: 'middle',
    fontWeight: 'bold',
  },
})
