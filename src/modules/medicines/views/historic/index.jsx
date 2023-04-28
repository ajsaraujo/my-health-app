import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import { styles } from '../../css/profile'

const setaInfo = require('../../img/arrow-info.png')

export default function Historic() {
  const [showModal, setShowModal] = useState(false)

  const handlePress = () => {
    setShowModal(true)
  }

  return (
    <View style={styles.profileContainer}>
      {/* Tab Title */}
      <View style={styles.titleProfileContainer}>
        <Text style={styles.perfilProfileText}>Perfil</Text>
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
