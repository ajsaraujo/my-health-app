import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Keyboard,
  Image,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import MaskInput from 'react-native-mask-input'
import { PrimaryButton } from '../../../shared/ui/components/PrimaryButton'
import { TextBox } from '../../../shared/ui/components/TextBox'
import { PasswordTextBox } from '../../../shared/ui/components/PasswordTextBox'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RouteParams } from '../../../routeParams'

type SignInProps = NativeStackScreenProps<RouteParams, 'Login'>

export default function SignIn(props: SignInProps) {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 110 }))
  const [opacity] = useState(new Animated.Value(0))
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [senhaConfirm, setSenhaConfirm] = useState('')
  const [sangue, setSangue] = useState('')
  const [dataNasc, setDataNasc] = useState('')

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start()
  }, [])

  function verificaDados() {
    alert('Cadastrado')
    _goBack()
  }

  const _goBack = () => props.navigation.goBack()

  return (
    <KeyboardAvoidingView style={styles.background}>
      <TouchableOpacity style={styles.buttonBack} onPress={_goBack}>
        <Image
          source={require('../Back.png')}
          style={{ width: 40, height: 30 }}
        />
      </TouchableOpacity>

      <View style={styles.containerLogo}>
        <Image
          source={require('../Icone.png')}
          style={{ width: 110, height: 100 }}
        />
      </View>
      <Animated.View
        style={[
          styles.containerAnimation,
          {
            opacity: opacity,
            transform: [{ translateY: offset.y }],
          },
        ]}
      >
        <Text style={styles.text}>Nome</Text>
        <TextBox value={nome} onChangeText={setNome} />

        <Text style={styles.text}>Senha</Text>
        <View style={{ width: '100%' }}>
          <PasswordTextBox
            value={senha}
            onChangeText={setSenha}
          ></PasswordTextBox>
        </View>

        <Text style={styles.text}>Confirmar Senha</Text>
        <View style={{ width: '100%' }}>
          <PasswordTextBox
            value={senhaConfirm}
            onChangeText={setSenhaConfirm}
          ></PasswordTextBox>
        </View>

        <Text style={styles.text}>E-mail</Text>
        <TextBox value={email} onChangeText={setEmail} />

        <View style={styles.containerInputDuplo}>
          <View style={styles.containerSangueData}>
            <Text style={styles.text}>Tipo Sang.</Text>
            <TextBox value={sangue} onChangeText={setSangue} />
          </View>

          <View style={styles.containerSangueData}>
            <Text style={styles.text}>Data de Nasc.</Text>
            <TextBox
              keyboardType="decimal-pad"
              value={dataNasc}
              onChangeText={setDataNasc}
            />
          </View>
        </View>

        <View style={styles.containerButton}>
          <PrimaryButton style={{ width: '60%' }} onPress={verificaDados}>
            Cadastrar
          </PrimaryButton>
        </View>
      </Animated.View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBack: {
    alignSelf: 'flex-start',
    marginTop: 20,
    marginLeft: 20,
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingTop: 16,
  },
  containerAnimation: {
    flex: 4,
    width: '75%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  containerInputDuplo: {
    width: '100%',
    height: '7%',
    flexDirection: 'row',
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  containerSangueData: {
    width: '45%',
    height: '100%',
  },
  containerButton: {
    height: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 30,
    paddingBottom: 30,
  },
  text: {
    color: '#616161',
    alignSelf: 'flex-start',
    marginBottom: 8,
    marginTop: 16,
    fontSize: 19,
    fontWeight: '500',
  },
})
