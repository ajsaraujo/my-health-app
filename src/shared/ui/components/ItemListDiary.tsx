import React from 'react'
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native'
import { GREEN } from '../colors'

export function ItemListDiary({ ...props }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.6}>
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
          <Text style={styles.textList}>
            Data do registro: {'\n'}01/01/2024
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  itensList: {
    borderWidth: 1,
    borderColor: GREEN,
    marginHorizontal: 5,
    borderRadius: 5,
    marginVertical: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    marginTop: 10,
    marginBottom: 15,
  },
  textTitle: {
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 5,
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
  buttonContainer: {
    alignItems: 'center',
  },
})
