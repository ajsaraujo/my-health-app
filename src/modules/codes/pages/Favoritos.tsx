import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { MyHealthModule } from '../../../modules'
import { RouteParams } from '../../../routeParams'
import { PrimaryButton } from '../../../shared/ui/components/PrimaryButton'
import { TextBox } from '../../../shared/ui/components/TextBox'
import { globalStyles } from '../../../shared/ui/globalStyles'
import { StyledText } from '../../../shared/ui/components/StyledText'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CodeQuery from './Consulta'
import CodeQuery2 from './ConsultaCid11'
import { CIAN, GREEN, LIGHT_BLACK, LIGHT_GREY } from '@shared/ui/colors'
import CodeQuery3 from './ConsultaCif'
import { Picker } from '@react-native-picker/picker'

export function CodeQuery4() {
  const navigation = useNavigation()

  return (
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
        Favoritos
      </StyledText>
      <View
        style={[
          globalStyles.marginTop5,
          { borderRadius: 14, marginLeft: 8, marginRight: 8, flex: 1 },
        ]}
      >
        <PrimaryButton
          style={[
            globalStyles.marginBottom1,
            { borderColor: '#000000', backgroundColor: '#ffffff' },
          ]}
          textStyle={{ color: '#000000' }}
          onPress={() => navigation.goBack()}
        >
          CID-10
        </PrimaryButton>
        <PrimaryButton
          style={[
            globalStyles.marginBottom1,
            {
              backgroundColor: '#ffffff',
            },
          ]}
          textStyle={{ color: '#000000' }}
        >
          CID-11
        </PrimaryButton>
        <PrimaryButton
          style={[
            globalStyles.marginBottom1,
            {
              backgroundColor: '#ffffff',
            },
          ]}
          textStyle={{ color: '#000000' }}
        >
          CIF
        </PrimaryButton>
        <PrimaryButton
          style={[
            globalStyles.marginBottom1,
            {
              backgroundColor: '#ffffff',
            },
          ]}
          textStyle={{ color: '#000000' }}
        >
          Tabela Sus
        </PrimaryButton>
      </View>
      <View style={globalStyles.centerHorizontally}>
        <PrimaryButton
          style={[
            globalStyles.marginTop4,
            globalStyles.marginBottom4,
            { backgroundColor: '#ffffff' },
          ]}
          textStyle={{ color: '#000000' }}
          onPress={() => navigation.goBack()}
        >
          Voltar
        </PrimaryButton>
      </View>
    </View>
  )
}

export default CodeQuery4
