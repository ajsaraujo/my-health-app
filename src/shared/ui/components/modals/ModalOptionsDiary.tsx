import React, { useState } from 'react'
import { View, Modal, Text, StyleSheet, TouchableHighlight } from 'react-native'

export function ModalOptionsDiary({ ...props }) {
  const [visible, setVisible] = useState(props.isVisible)

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.containerModal}>
        <TouchableHighlight style={styles.button}>
          <Text>Excluir</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => setVisible(false)}
        >
          <Text>Cancelar</Text>
        </TouchableHighlight>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  containerModal: {
    backgroundColor: 'red',
    width: 80,
    height: 60,
    borderRadius: 5,
  },
  button: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    width: 80,
    height: 30,
  },
})
