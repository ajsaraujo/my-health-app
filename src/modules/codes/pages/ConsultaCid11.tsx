import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'

import { PrimaryButton } from '../../../shared/ui/components/PrimaryButton'
import { StyledText } from '../../../shared/ui/components/StyledText'
import { globalStyles } from '../../../shared/ui/globalStyles'

export function CodeQuery() {
  const navigation = useNavigation()

  return (
    <View style={{ alignItems: 'center' }}>
      <StyledText>MyHealth</StyledText>
      <StyledText>CID-11</StyledText>

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
