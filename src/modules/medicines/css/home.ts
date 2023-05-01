import { StyleSheet } from 'react-native'
import { GREEN_50, GREEN_600 } from '../../../shared/ui/colors'

export const styles = StyleSheet.create({
  containerRemedies: {
    backgroundColor: GREEN_50,
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
    fontWeight: 'bold',
    fontSize: 15,
  },
  titleHomeContainer: {
    marginTop: 0,
  },
  containerDay: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 20,
  },
  tagDay: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
    fontWeight: 'bold',
    fontSize: 18,
  },
  containerInfoDay: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 11,
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
    width: '70%',
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
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
    paddingBottom: 40,
  },
  schedulingButton: {
    justifyContent: 'center',
    backgroundColor: GREEN_600,
    padding: 20,
    borderRadius: 20,
    elevation: 10,
    shadowOpacity: 100,
  },
  schedulingButtonText: {
    color: '#fff',
    verticalAlign: 'middle',
    fontWeight: 'bold',
  },
  containerNoSchedules: {
    marginTop: 100,
    width: '100%',
    alignItems: 'center',
  },
  noSchedules: {
    justifyContent: 'center',
    backgroundColor: '#ccc',
    padding: 20,
    borderRadius: 20,
  },
  infoContainer: {
    width: '100%',
  },
  infoText: {
    marginRight: 20,
  },
})
