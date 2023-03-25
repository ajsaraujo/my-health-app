import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { MyHealthModule } from '../../modules'
import { RouteParams } from '../../routeParams'
import { styles } from './css/styles'

const setaEsquerda = require('./img/chevron-left.png')
const setaDireita = require('./img/chevron-right.png')
const setaInfo = require('./img/arrow-info.png')

type RemediesProps = NativeStackScreenProps<
  RouteParams,
  MyHealthModule.Remedies
>

export default function Remedies(props: RemediesProps) {
  return (
    <View style={styles.containerRemedies}>
      {/* Tab Navigation */}
      <View style={styles.navigationRemediesContainer}>
        {/* @todo fazer botao */}
        <Image source={setaEsquerda} style={styles.iconNavigationLeft}></Image>
        <Image source={setaDireita} style={styles.iconNavigationRight}></Image>
      </View>

      {/* Tab Title */}
      <View style={styles.titleHomeContainer}>
        {/* substituir dps pelo username do user e date atual */}
        <Text style={styles.helloRemediesText}>Olá, José!</Text>
        <Text style={styles.helloRemediesDate}>19/09/2022</Text>
      </View>

      {/* Tab Calendar */}
      <View style={styles.containerDay}>
        <Text style={[styles.tagDay, { opacity: 0.5 }]}>seg</Text>
        <Text style={[styles.tagDay, { opacity: 0.5 }]}>ter</Text>
        <Text style={[styles.tagDay, { opacity: 0.5 }]}>qua</Text>
        <Text style={[styles.tagDay, { opacity: 0.5 }]}>qui</Text>
        <Text style={[styles.tagDay, { opacity: 0.5 }]}>sex</Text>
        <Text style={[styles.tagDay, { opacity: 0.5 }]}>sáb</Text>
        <Text style={[styles.tagDay, { opacity: 0.5 }]}>dom</Text>
      </View>

      {/* Tab Calendar content @todo substituir com info do DB */}
      <View>
        <View style={styles.containerInfoDay}>
          <Text style={styles.infoDayHour}>8:00</Text>
          <Text style={styles.infoDayText}>Tomar insulina</Text>
          <TouchableOpacity style={styles.infoDayButton}>
            <Image source={setaInfo} style={styles.infoDayButtonText}></Image>
          </TouchableOpacity>
        </View>

        <View style={styles.containerInfoDay}>
          <Text style={styles.infoDayHour}>15:00</Text>
          <Text style={styles.infoDayText}>Exame de Rotina</Text>
          <TouchableOpacity style={styles.infoDayButton}>
            <Image source={setaInfo} style={styles.infoDayButtonText}></Image>
          </TouchableOpacity>
        </View>

        <View style={styles.containerInfoDay}>
          <Text style={styles.infoDayHour}>21:30</Text>
          <Text style={styles.infoDayText}>Exame Urinário</Text>
          <TouchableOpacity style={styles.infoDayButton}>
            <Image source={setaInfo} style={styles.infoDayButtonText}></Image>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tab Actions Buttons */}

      <View style={styles.containerSchedulingButton}>
        <TouchableOpacity style={styles.schedulingButton}>
          <Text style={styles.schedulingButtonText}>Novo Agendamento</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
