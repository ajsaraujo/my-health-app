import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'

import { PrimaryButton } from '../../../shared/ui/components/PrimaryButton'
import { StyledText } from '../../../shared/ui/components/StyledText'
import { globalStyles } from '../../../shared/ui/globalStyles'
import { GREEN, CIAN, LIGHT_GREY } from '@shared/ui/colors'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CodeQuery4 from './Favoritos'

const Tab = createBottomTabNavigator()

export function CodeQuery5() {
  const navigation = useNavigation()

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Consultar códigos"
        component={() => (
          <View style={{ backgroundColor: CIAN, flex: 1 }}>
            <StyledText
              style={[
                globalStyles.marginTop4,
                globalStyles.marginBottom4,
                globalStyles.fontSize4,
                { marginLeft: 8, textAlign: 'left' },
              ]}
            >
              MyHealth
            </StyledText>

            <StyledText
              style={[
                globalStyles.marginBottom1,
                globalStyles.fontSize4,
                {
                  marginLeft: 8,
                  marginRight: 8,
                  textAlign: 'center',
                  backgroundColor: '#ffffff',
                  borderRadius: 14,
                },
              ]}
            >
              Favoritos - CID-10
            </StyledText>

            <View
              style={[
                {
                  borderRadius: 14,
                  marginLeft: 8,
                  marginRight: 8,
                  backgroundColor: '#ffffff',
                  flex: 1,
                },
              ]}
            >
              <PrimaryButton
                style={[
                  globalStyles.marginBottom1,
                  {
                    marginLeft: 32,
                    marginRight: 32,
                    borderColor: '#000000',
                    backgroundColor: '#49494933',
                  },
                ]}
                textStyle={{ color: '#000000' }}
              >
                Codigo da Cid-10
              </PrimaryButton>
            </View>
            <View style={globalStyles.centerHorizontally}>
              <PrimaryButton
                style={[
                  globalStyles.marginTop4,
                  globalStyles.marginBottom4,
                  { backgroundColor: '#ffffff', width: '60%' },
                ]}
                textStyle={{ color: '#000000' }}
                onPress={() => navigation.goBack()}
              >
                Voltar
              </PrimaryButton>
              <PrimaryButton
                style={[
                  globalStyles.marginTop4,
                  globalStyles.marginBottom4,
                  { marginLeft: 8, backgroundColor: '#ffffff' },
                ]}
                textStyle={{ color: '#000000' }}
              >
                A.Fav
              </PrimaryButton>
            </View>
          </View>
        )}
      ></Tab.Screen>
      <Tab.Screen name="Meus favoritos" component={CodeQuery4}></Tab.Screen>
    </Tab.Navigator>
  )
}

export default CodeQuery5
