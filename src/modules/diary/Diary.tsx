import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, Text, StyleSheet } from 'react-native'
import { MyHealthModule } from '../../modules'
import { RouteParams } from '../../routeParams'
import { globalStyles } from '../../shared/ui/globalStyles'
import { MenuButton } from '../../shared/ui/components/MenuButton'
import lixeira from '../../../assets/garbageIcon.png'
import relatorio from '../../../assets/reportIcon.png'
import novoRegistro from '../../../assets/newRegisterIcon.png'
import visualizarRegistros from '../../../assets/lookRegistersIcon.png'
import * as Print from 'expo-print'
import { shareAsync } from 'expo-sharing'
import { PrimaryButton } from '../../shared/ui/components/PrimaryButton'
import { getRegistrosPaciente } from './infra/services'
import showError from './helpers/showError'
import axios from 'axios'

type DiaryProps = NativeStackScreenProps<RouteParams, MyHealthModule.Diary>

export default function Diary(props: DiaryProps) {
  const [listRegisters, setListRegisters] = useState([])
  const [userData, setUserData] = useState(null)

  const menuItens = [
    {
      label: 'Novo registro',
      route: 'RegisterNote',
      icon: novoRegistro,
      key: 1,
      id: 1,
      pressFunction: () => props.navigation.navigate('RegisterNote'),
    },
    {
      label: 'Visualizar registros',
      route: 'RegistersDiary',
      icon: visualizarRegistros,
      key: 2,
      id: 2,
      pressFunction: () => props.navigation.navigate('RegistersDiary'),
    },
    {
      label: 'Gerar relatório',
      route: 'RegistersDiary',
      icon: relatorio,
      key: 3,
      id: 3,
      pressFunction: () => printToFile(),
    },
    {
      label: 'Lixeira',
      route: 'GarbageDiary',
      icon: lixeira,
      key: 4,
      id: 4,
      pressFunction: () => props.navigation.navigate('RegistersDiary'),
    },
  ]

  const printToFile = async () => {
    var listaRegistros = []
    try {
      var user = await axios.get(
        'https://d691-138-255-87-166.ngrok-free.app/Paciente/Get/1'
      )
      setUserData(user.data)
      console.log('dados do usuario: ', userData)
      var response = await getRegistrosPaciente({ idPaciente: 1 })
      for (var i = 0; i < response.data.length; i++) {
        listaRegistros.push({
          data: response.data[i].dataCriacao,
          registro: response.data[i].relato,
        })
      }
      setListRegisters(listaRegistros)
    } catch (err) {
      showError('Ocorreu um erro', err)
      props.navigation.goBack()
    }

    let html = `
  <html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
      }
      .header {
        display: flex;
        align-items: center;
      }
      .header img {
        width: 80px;
        height: auto;
        margin-right: 20px;
      }
      .header table {
        border-collapse: collapse;
      }
      .header th,
      .header td {
        padding: 4px;
      }
      .header tr:nth-child(odd) {
        background-color: #f2f2f2;
      }
      ul {
        padding: 0;
        list-style-type: none;
      }
      ul li::before {
        color: #000;
        font-weight: bold;
        display: inline-block;
        width: 1em;
        margin-left: -1em;
        border-top: 1em;
      }
      li {
          border: 1px solid black;
          margin-top: 8px;
          margin-bottom: 8px;
          padding: 6px;
      }
      h1{
          align-self: center;
      }
    </style>
  </head>
  <body>
    <h1>Relatório de Sintomas Diário</h1>
    <div class="header">
      <img src="data:image/png;base64,..."/> <!-- Base64 image for logo -->
      <table>
        <tr>
          <th>Nome</th>
          <td>${userData.fullName}</td>
          <th>Sexo</th>
          <td>${userData.gender}</td>
        </tr>
        <tr>
          <th>Data de Nascimento</th>
          <td>20/01/1958</td>
          <th>Peso (KG)</th>
          <td>${userData.peso} kg</td>
        </tr>
        <tr>
          <th>Altura</th>
          <td>${userData.altura}</td>
          <th>Tipo sanguíneo</th>
          <td>${userData.tipoSanguineo}</td>
        </tr>
      </table>
    </div>
    <h2>Sintomas</h2>
    <ul>
    `
    for (var i = 0; i < listaRegistros.length; i++) {
      html += `<li>Data: ${listaRegistros[i].data} <br> ${listaRegistros[i].registro}</li>`
    }

    html += ` </ul>
            </body>
          </html>
          `
    const { uri } = await Print.printToFileAsync({ html })
    console.log('File has been saved to: ', uri)
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' })
  }

  return (
    <View style={globalStyles.defaultContainer}>
      <View style={styles.titleText}>
        <Text style={styles.titleText}>Diário de Saúde</Text>
      </View>
      <View style={styles.modulesContainer}>
        {menuItens.map((item) => (
          <MenuButton
            onPress={item.pressFunction}
            text={item.label}
            icon={item.icon}
          />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  modulesContainer: {
    marginTop: 32,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 24,
    rowGap: 24,
  },
  titleText: {
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    fontSize: 25,
    fontWeight: 'bold',
  },
})
