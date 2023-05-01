import React, { useState, useEffect } from 'react'
import { View, Modal, Text, StyleSheet, TouchableHighlight } from 'react-native'

export function ModalOptionsDiary({ ...props }) {
  return (
    <Modal
      visible={props.isVisible}
      animationType="fade"
      transparent={true}
      onRequestClose={props.onCancel}
    >
      <View
        style={[
          styles.containerModal,
          { top: props.positionTop, left: props.positionSide },
        ]}
      >
        <View style={styles.containerModal}>
          <TouchableHighlight style={styles.button}>
            <Text>Excluir</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={() => props.onCancel()}
          >
            <Text>Cancelar</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  containerModal: {
    width: 80,
    height: 60,
  },
  button: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 3,
    width: 80,
    height: 30,
    backgroundColor: '#789F81',
  },
})
