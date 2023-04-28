import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Home from './views/home'
import Procedures from './views/procedures'
import Medicines from './views/medicines'
import Historic from './views/historic'
import Navigation from './views/layouts'
import Head from './views/layouts/head'

export default function Remedies() {
  const [currentView, setCurrentView] = useState('home')
  const [activeButton, setActiveButton] = useState('button1')

  const handleButtonPress = (id) => {
    if (id === activeButton) {
      setActiveButton(activeButton)
    } else {
      setActiveButton(id)
    }
  }

  return (
    <View style={styles.container}>
      <Head
        setCurrentView={setCurrentView}
        currentView={currentView}
        activeButton={activeButton}
        handleButtonPress={handleButtonPress}
      />
      {currentView === 'home' && <Home />}
      {currentView === 'procedures' && <Procedures />}
      {currentView === 'medicines' && <Medicines />}
      {currentView === 'historic' && <Historic />}
      <Navigation
        setCurrentView={setCurrentView}
        activeButton={activeButton}
        handleButtonPress={handleButtonPress}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
})
