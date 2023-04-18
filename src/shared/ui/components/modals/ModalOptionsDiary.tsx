import React, { useState } from 'react'
import { View, Modal, Text, StyleSheet, TouchableHighlight } from 'react-native'

export function ModalOptionsDiary({ ...props }) {
  return (
    <Modal visible={props.isVisible} animationType="slide" transparent={true}>
      <View style={styles.containerModal}>
        <TouchableHighlight style={styles.button}>
          <Text>Excluir</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}>
          <Text>Cancelar</Text>
        </TouchableHighlight>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  containerModal: {
    backgroundColor: '#e2e2e2',
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
