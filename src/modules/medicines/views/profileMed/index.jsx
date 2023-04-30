import React, { useState, useEffect, useRef } from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView, Modal, StyleSheet } from 'react-native'
import { styles } from '../../css/profile'
import CameraO from '../camera'


const cameraIcon = require('../../img/camera-icon_resized.png')

export default function ProfileMed() {
  const [showModal, setShowModal] = useState(false)

  const handlePress = () => {
    setShowModal(true)
  }

  return (
    <View style={styles.profileContainer}>

      <View style={styles.titleProfileContainer}>
        <Text style={styles.perfilProfileText}>Perfil</Text>

        {/*camera*/}
        <View style={styles.cameraIconContainer}>
          <TouchableOpacity onPress={handlePress}>
            <Image
              source={cameraIcon}
              style={styles.cameraIcon}
            ></Image>
          </TouchableOpacity>
          <CameraO
            visible={showModal}
            onClose={() => setShowModal(false)}
          />
        </View>


        <View style={styles.profileInfoContainer}>
          <View style={styles.infoProfile}>
            <Text style={styles.profileText}>Nome</Text>
            <View style={styles.profileInfo}>
              <Text style={styles.profileInfoText}>Insulina</Text>
            </View>
          </View>

          <View style={styles.infoProfile}>
            <Text style={styles.profileText}>Função</Text>
            <View style={styles.profileInfo}>
              <Text style={styles.profileInfoText}>Por causa da Diabete</Text>
            </View>
          </View>

          <View style={styles.infoProfile}>
            <Text style={styles.profileText}>Observação</Text>
            <View style={styles.profileInfo}>
              <Text style={styles.profileInfoText}>Nada.</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
