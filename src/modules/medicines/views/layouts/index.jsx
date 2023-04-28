import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { styles } from '../../css/footer'
const calendarIcon = require('../../img/calendar-icon.png')
const healthIcon = require('../../img/health-icon.png')
const remedioIcon = require('../../img/remedio-icon.png')
const relogioIcon = require('../../img/relogio-icon.png')

const FooterButton = ({ id, image, isActive, onPress }) => {
  return (
    <TouchableOpacity
      style={isActive ? styles.footerButtonActive : styles.footerButton}
      onPress={onPress}
    >
      <Image
        source={image}
        style={
          isActive ? styles.footerButtonImageActive : styles.footerButtonImage
        }
      />
    </TouchableOpacity>
  )
}

export default function Navigation(props) {
  const handleViewChange = (viewName) => {
    props.setCurrentView(viewName)
  }

  return (
    <View style={styles.footerContainer}>
      <FooterButton
        id="button1"
        image={calendarIcon}
        isActive={props.activeButton === 'button1'}
        onPress={() => {
          props.handleButtonPress('button1')
          handleViewChange('home')
        }}
      />
      <FooterButton
        id="button2"
        image={healthIcon}
        isActive={props.activeButton === 'button2'}
        onPress={() => {
          props.handleButtonPress('button2')
          handleViewChange('procedures')
        }}
      />
      <FooterButton
        id="button3"
        image={remedioIcon}
        isActive={props.activeButton === 'button3'}
        onPress={() => {
          props.handleButtonPress('button3')
          handleViewChange('medicines')
        }}
      />
      <FooterButton
        id="button4"
        image={relogioIcon}
        isActive={props.activeButton === 'button4'}
        onPress={() => {
          props.handleButtonPress('button4')
          handleViewChange('historic')
        }}
      />
    </View>
  )
}
