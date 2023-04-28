import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { styles } from '../../css/head'

const setaEsquerda = require('../../img/chevron-left.png')
const setaDireita = require('../../img/chevron-right.png')

export default function Head(props) {
  var pageLeft = ''
  var pageRight = ''
  var buttonLeft = ''
  var buttonRight = ''

  if (props.currentView === 'home') {
    pageLeft = 'home'
    pageRight = 'procedures'
    buttonLeft = 'button1'
    buttonRight = 'button2'
  } else if (props.currentView === 'procedures') {
    pageLeft = 'home'
    pageRight = 'medicines'
    buttonLeft = 'button1'
    buttonRight = 'button3'
  } else if (props.currentView === 'medicines') {
    pageLeft = 'procedures'
    pageRight = 'historic'
    buttonLeft = 'button2'
    buttonRight = 'button4'
  } else if (props.currentView === 'historic') {
    pageLeft = 'medicines'
    pageRight = 'historic'
    buttonLeft = 'button3'
    buttonRight = 'button4'
  }

  const handleViewChange = (viewName) => {
    props.setCurrentView(viewName)
  }
  return (
    <View>
      {/* Tab Navigation */}
      <View style={styles.navigationRemediesContainer}>
        <TouchableOpacity
          onPress={() => {
            handleViewChange(pageLeft)
            props.handleButtonPress(buttonLeft)
          }}
        >
          <Image
            source={setaEsquerda}
            style={styles.iconNavigationLeft}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleViewChange(pageRight)
            props.handleButtonPress(buttonRight)
          }}
        >
          <Image
            source={setaDireita}
            style={styles.iconNavigationRight}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  )
}
