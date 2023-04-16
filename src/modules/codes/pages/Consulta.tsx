import React from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { PrimaryButton } from '../../../shared/ui/components/PrimaryButton'
import { globalStyles } from '../../../shared/ui/globalStyles'

export function CodeQuery() {
  const navigation = useNavigation()

  return (
    <View style={{ alignItems: 'center' }}>
      <Text>MyHealth</Text>
      <Text>CID-10</Text>

      <PrimaryButton>Adicionar aos Favoritos</PrimaryButton>

      <PrimaryButton
        onPress={() => navigation.goBack()}
        style={globalStyles.marginTop2}
      >
        Voltar
      </PrimaryButton>
    </View>
  )
}

export default CodeQuery
