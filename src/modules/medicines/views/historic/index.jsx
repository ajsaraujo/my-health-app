import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from '../../css/historic'

const setaEsquerda = require('../../img/chevron-left.png')
const setaDireita = require('../../img/chevron-right.png')
const setaInfo = require('../../img/arrow-info.png')

export default function Historic() {
  return (
    <View style={styles.historicsContainer}>
      {/* Tab Title */}
      <View style={styles.titleHistoricsContainer}>
        <Text style={styles.helloHistoricsText}>Histórico</Text>
      </View>

      {/* Tab Content */}
      <View>
        <View style={styles.containerHistoricsContent}>
          <Text style={styles.infoHistoricsDate}>01/03/2022</Text>
          <Text style={styles.infoHistoricsText}>Exame de estômago</Text>
          <TouchableOpacity style={styles.viewHistoricsButton}>
            <Image
              source={setaInfo}
              style={styles.viewHistoricsButtonText}
            ></Image>
          </TouchableOpacity>
        </View>

        <View style={styles.containerHistoricsContent}>
          <Text style={styles.infoHistoricsDate}>10/01/2023</Text>
          <Text style={styles.infoHistoricsText}>Fisioterapia para Joelho</Text>
          <TouchableOpacity style={styles.viewHistoricsButton}>
            <Image
              source={setaInfo}
              style={styles.viewHistoricsButtonText}
            ></Image>
          </TouchableOpacity>
        </View>

        <View style={styles.containerHistoricsContent}>
          <Text style={styles.infoHistoricsDate}>20/02/2023</Text>
          <Text style={styles.infoHistoricsText}>Hemograma</Text>
          <TouchableOpacity style={styles.viewHistoricsButton}>
            <Image
              source={setaInfo}
              style={styles.viewHistoricsButtonText}
            ></Image>
          </TouchableOpacity>
        </View>

        <View style={styles.containerHistoricsContent}>
          <Text style={styles.infoHistoricsDate}>15/03/2023</Text>
          <Text style={styles.infoHistoricsText}>Glicemia</Text>
          <TouchableOpacity style={styles.viewHistoricsButton}>
            <Image
              source={setaInfo}
              style={styles.viewHistoricsButtonText}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tab Actions Buttons */}

      <View style={styles.containerHistoricButton}>
        <TouchableOpacity style={styles.historicButton}>
          <Text style={styles.historicButtonText}>Anexar Resultado</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
