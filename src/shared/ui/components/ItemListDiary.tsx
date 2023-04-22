import React, { useState } from 'react'
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native'
import { GREEN } from '../colors'
import { ModalOptionsDiary } from './modals/ModalOptionsDiary'

export function ItemListDiary({ ...props }) {
  const [modalViseble, setModalViseble] = useState(false)

  return (
    <View>
      <TouchableOpacity activeOpacity={0.6} onPress={() => props.onPress()}>
        <View style={styles.itensList}>
          <View style={styles.imageContainer}>
            {props.typeList === 'lixeira' ? (
              <Image
                source={require('../../../../assets/garbageIcon.png')}
                style={styles.sizeIcon}
              />
            ) : (
              <Image
                source={require('../../../../assets/checkIcon.png')}
                style={styles.sizeIcon}
              />
            )}
          </View>
          <Text style={styles.textList}>{props.text}</Text>
          <View style={styles.buttonOptionContainer}>
            <TouchableOpacity onPress={() => setModalViseble(true)}>
              <Image
                source={require('../../../../assets/dotsOptionsIcon.png')}
                style={styles.buttonOption}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
      <ModalOptionsDiary isVisible={modalViseble} />
    </View>
  )
}

const styles = StyleSheet.create({
  itensList: {
    borderWidth: 1,
    borderColor: GREEN,
    marginHorizontal: 8,
    borderRadius: 5,
    marginVertical: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    marginTop: 10,
    marginBottom: 15,
  },
  sizeIcon: {
    height: 30,
    width: 30,
  },
  imageContainer: {
    backgroundColor: GREEN,
    borderRadius: 100,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 5,
  },
  textList: {
    fontSize: 16,
    marginLeft: 3,
    fontWeight: 'bold',
  },
  buttonOption: {
    height: 25,
    width: 20,
  },
  buttonOptionContainer: {
    flexDirection: 'row',
    position: 'absolute',
    right: 5,
  },
})
