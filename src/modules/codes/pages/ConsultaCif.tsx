import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'

import { PrimaryButton } from '../../../shared/ui/components/PrimaryButton'
import { StyledText } from '../../../shared/ui/components/StyledText'
import { globalStyles } from '../../../shared/ui/globalStyles'
import { GREEN, CIAN } from '@shared/ui/colors'

export function CodeQuery3() {
  const navigation = useNavigation()

  return (
    <View style={{ backgroundColor: CIAN, flex: 1 }}>
      <StyledText
        style={[
          globalStyles.marginBottom1,
          globalStyles.fontSize4,
          { textAlign: 'left' },
        ]}
      >
        MyHealth
      </StyledText>
      <StyledText>CIF</StyledText>
      <View style={globalStyles.centerHorizontally}>
        <PrimaryButton
          style={[
            globalStyles.marginTop5,
            { backgroundColor: '#ffffff', width: '60%' },
          ]}
          textStyle={{ color: '#000000' }}
          onPress={() => navigation.goBack()}
        >
          Voltar
        </PrimaryButton>
        <PrimaryButton
          style={[
            globalStyles.marginTop5,
            { marginLeft: 8, backgroundColor: '#ffffff' },
          ]}
          textStyle={{ color: '#000000' }}
        >
          A.Fav
        </PrimaryButton>
      </View>
    </View>
  )
}

export default CodeQuery3
