import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View } from 'react-native'
import { MyHealthModule } from '../../modules'
import { RouteParams } from '../../routeParams'
import { globalStyles } from '@shared/ui/globalStyles'
import { StyledText } from '@shared/ui/components'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import Home from './views/home'
import Procedures from './views/procedures'
import Medicines from './views/medicines'
import Historic from './views/historic'
import Navigation from './views/layouts'
import Head from './views/layouts/head'

type RemediesProps = NativeStackScreenProps<
  RouteParams,
  MyHealthModule.Remedies
>

export default function Remedies(props: RemediesProps) {
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
