import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'

import { TextBox } from '../../../shared/ui/components/TextBox'
import { PrimaryButton } from '../../../shared/ui/components/PrimaryButton'
import { StyledText } from '../../../shared/ui/components/StyledText'
import { globalStyles } from '../../../shared/ui/globalStyles'
import { GREEN, CIAN } from '@shared/ui/colors'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CodeQuery4 from './Favoritos'
import Codes from '../Codes'
import CodeQuery3 from './ConsultaCif'
import { Code } from './../Codes'
import { RouteParams } from './../../../routeParams'

const Tab = createBottomTabNavigator()

export function CodeQuery() {
  const navigation = useNavigation()

  const route = useRoute()
  const cons = (route.params as RouteParams['Consulta']).consulta

  return (
    <View style={{ backgroundColor: '#94efe5', flex: 1 }}>
      <StyledText
        style={[
          globalStyles.marginTop2,
          globalStyles.fontSize4,
          {
            textAlign: 'left',
            fontFamily: 'Bahnschrift Light',
            fontSize: 40,
            padding: 30,
          },
        ]}
      >
        My
        <Text
          style={[
            {
              textAlign: 'left',
              fontFamily: 'Bahnschrift',
              fontWeight: 'bold',
            },
          ]}
        >
          Health
        </Text>
      </StyledText>
      <StyledText
        style={[
          globalStyles.marginBottom1,
          globalStyles.fontSize4,
          {
            paddingLeft: 20,
            paddingTop: 4,
            marginLeft: 16,
            marginRight: 16,
            textAlign: 'left',
            backgroundColor: '#ffffff',
            height: 50,
            borderRadius: 25,
          },
        ]}
      >
        <Text
          style={[
            {
              textAlign: 'left',
              fontFamily: 'Bahnschrift',
            },
          ]}
        >
          CID-10
        </Text>
        <Text
          style={[
            {
              textAlign: 'left',
              fontFamily: 'Bahnschrift',
            },
          ]}
        >
          {cons.titulo}
        </Text>
      </StyledText>

      <View
        style={[
          {
            borderRadius: 14,
            marginLeft: 16,
            marginRight: 16,
            backgroundColor: '#ffffff',
            flex: 1,
          },
        ]}
      >
        <Text
          style={[
            {
              textAlign: 'justify',
              fontFamily: 'Bahnschrift',
              padding: 16,
            },
          ]}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </View>
      <View style={globalStyles.centerHorizontally}>
        <PrimaryButton
          style={[
            globalStyles.marginTop4,
            globalStyles.marginBottom4,
            {
              backgroundColor: '#ffffff',
              width: '60%',
              height: 60,
              borderRadius: 30,
            },
          ]}
          textStyle={{
            color: '#263541',
            fontFamily: 'Bahnschrift SemiBold',
            fontSize: 24,
            fontWeight: 'bold',
          }}
          onPress={() => navigation.goBack()}
        >
          Voltar
        </PrimaryButton>
        <PrimaryButton
          style={[
            globalStyles.marginTop4,
            globalStyles.marginBottom4,
            {
              marginLeft: 8,
              backgroundColor: '#207868',
              width: 60,
              height: 60,
              borderRadius: 30,
            },
          ]}
          textStyle={{
            color: '#ffffff',
            fontFamily: 'Bahnschrift SemiBold',
            fontSize: 36,
            fontWeight: 'bold',
          }}
        >
          ★
        </PrimaryButton>
      </View>
    </View>
  )
}

export default CodeQuery
