import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from '../../css/profile'

const setaInfo = require('../../img/arrow-info.png')

export default function Profile() {
  const [showModal, setShowModal] = useState(false)

  const handlePress = () => {
    setShowModal(true)
  }

  return (
    <View style={styles.profileContainer}>
      {/* Tab Title */}
      <View style={styles.titleProfileContainer}>
        <Text style={styles.helloProfileText}>Perfil</Text>
      </View>

      {/* Tab Content */}
      <View>
        <View style={styles.containerProfileContent}>
          <Text style={styles.infoProfileText}>Salmeterol</Text>
          <TouchableOpacity style={styles.viewProfileButton}>
            <Image
              source={setaInfo}
              style={styles.viewProfileButtonText}
            ></Image>
          </TouchableOpacity>
        </View>

        <View style={styles.containerProfileContent}>
          <Text style={styles.infoProfileText}>Formoterol</Text>
          <TouchableOpacity style={styles.viewProfileButton}>
            <Image
              source={setaInfo}
              style={styles.viewProfileButtonText}
            ></Image>
          </TouchableOpacity>
        </View>

        <View style={styles.containerProfileContent}>
          <Text style={styles.infoProfileText}>Insulina</Text>
          <TouchableOpacity style={styles.viewProfileButton}>
            <Image
              source={setaInfo}
              style={styles.viewProfileButtonText}
            ></Image>
          </TouchableOpacity>
        </View>

        <View style={styles.containerProfileContent}>
          <Text style={styles.infoProfileText}>Coticóides Inalatórios</Text>
          <TouchableOpacity style={styles.viewProfileButton}>
            <Image
              source={setaInfo}
              style={styles.viewProfileButtonText}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tab Actions Buttons */}

      <View style={styles.containerProfileButton}>
        <TouchableOpacity style={styles.profileButton} onPress={handlePress}>
          <Text style={styles.profileButtonText}>Novo Medicamento</Text>
        </TouchableOpacity>
      </View>

      <MedChoice visible={showModal} onClose={() => setShowModal(false)} />
    </View>
  )
}
