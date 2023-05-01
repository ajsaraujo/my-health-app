import { GREEN_50, GREEN_600 } from '@shared/ui/colors'
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
    marginBottom: 14,
  },
  modalSelectionText: {
    fontSize: 15,
  },
  modalSelection: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  selectionMedButton: {
    justifyContent: 'center',
    backgroundColor: GREEN_600,
    padding: 10,
    borderRadius: 14,
    marginRight: 40,
  },
  modalSelectionMedText: {
    fontSize: 13,
    color: '#fff',
    verticalAlign: 'middle',
    fontWeight: 'bold',
  },
  SelectionProcButton: {
    justifyContent: 'center',
    backgroundColor: GREEN_600,
    padding: 10,
    borderRadius: 14,
  },
  modalSelectionProcText: {
    fontSize: 13,
    color: '#fff',
    verticalAlign: 'middle',
    fontWeight: 'bold',
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
  },
  schedulingButton: {
    justifyContent: 'center',
    backgroundColor: GREEN_600,
    width: '80%',
    padding: 20,
    margin: 20,
    borderRadius: 20,
  },
  schedulingButtonText: {
    color: '#fff',
    verticalAlign: 'middle',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
  },
})
