import React from 'react'
import { Modal, View, Text, Button } from 'react-native'

const Popup = ({ visible, onClose, data }) => {
  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <View
          style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}
        >
          <Text>{data.descricao}</Text>
          <Text>{data.dtInicio}</Text>
          <Text>{data.dtFinal}</Text>
          <Text>{data.horario}</Text>
          <Text>{data.periodo}</Text>
          <Button title="Fechar" onPress={onClose} />
        </View>
      </View>
    </Modal>
  )
}

export default Popup
