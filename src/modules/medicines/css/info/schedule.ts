import { GREEN_100, GREEN_50, GREEN_600 } from '@shared/ui/colors'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: GREEN_50,
    width: '70%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  containerSchedulingButton: {
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  containerSchedulingButtonInfo: {
    width: '100%',
    alignItems: 'center',
  },
  schedulingButton: {
    justifyContent: 'center',
    backgroundColor: GREEN_600,
    width: '40%',
    padding: 10,
    margin: 10,
    borderRadius: 20,
  },
  schedulingButtonInfo: {
    justifyContent: 'center',
    backgroundColor: GREEN_600,
    width: '40%',
    padding: 10,
    marginBottom: 10,
    marginTop: 20,
    borderRadius: 20,
  },
  modalInfoText: {
    fontSize: 16,
    marginVertical: 5,
  },
  schedulingButtonText: {
    color: '#fff',
    verticalAlign: 'middle',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
  },
  resultButton: {
    backgroundColor: GREEN_100,
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    margin: 20,
    borderRadius: 20,
  },
  resultButtonText: {
    fontSize: 12,
    marginLeft: 10,
  },
  modalResultProcedureLabel: {
    width: '80%',
  },
  modalResultProcedureLabelText: {
    textAlign: 'center',
    fontSize: 16,
  },
  modalResultProcedureSelect: {
    width: '77%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    marginTop: 20,
  },
})
