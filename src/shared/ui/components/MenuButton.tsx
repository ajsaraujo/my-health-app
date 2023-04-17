import React from 'react'
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Image,
  TextStyle,
} from 'react-native'
import { GREEN } from '../colors'

export function MenuButton({ ...props }) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
      <>
        <View style={styles.button}>
          <Image source={props.icon} style={styles.icon} />
          <Text style={styles.text}>{props.text}</Text>
        </View>
      </>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: GREEN,
    width: 135,
    height: 145,
    borderRadius: 14,
  },
  text: {
    textAlign: 'center',
    paddingHorizontal: 5,
    color: 'white',
    fontSize: 15,
  },
  icon: {
    height: 60,
    width: 55,
    alignSelf: 'center',
    marginVertical: 20,
  },
})
