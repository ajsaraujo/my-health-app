import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { getSession } from '@shared/services/auth/session'
import { useEffect, useState } from 'react'
import { RouteParams } from '../../../routeParams'
import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { useToastActions } from '@shared/ui/components/toast/ToastProvider'
import { editProfile } from '@modules/profile/services/editProfile'
import { FormField, PrimaryButton, TextBox } from '@shared/ui/components'
import { globalStyles } from '@shared/ui/globalStyles'

type EditProfileForm = Omit<
  UserSession,
  'id' | 'password' | 'permissions' | 'access_token' | 'refresh_token'
>

type EditProfileProps = NativeStackScreenProps<RouteParams, 'EditProfile'>

export default function EditProfile(props: EditProfileProps) {
  const [user, setUser] = useState<UserSession>()

  const [formValues, setFormValues] = useState<EditProfileForm>({
    name: user?.name || '',
    email: user?.email || '',
    bloodType: user?.bloodType || '',
    phone: user?.phone || '',
    birthday: user?.birthday || '',
  })

  useEffect(() => {
    async function fetchUser() {
      const session = await getSession()

      if (session !== null) {
        setUser(session)
      }
    }

    fetchUser()
  }, [])
  console.log(user)

  const [submitted, setSubmitted] = useState(false)
  const toast = useToastActions()

  function handleChange(field: keyof EditProfileForm) {
    return function handlerFn(value: string) {
      setFormValues({
        ...formValues,
        [field]: value,
      })
    }
  }
  async function handleEdit() {
    setSubmitted(true)

    const result = await editProfile(
      formValues.name,
      formValues.email,
      formValues.bloodType,
      formValues.phone,
      formValues.birthday
    )

    console.log(`Resultado ok? ${result.isOk}`)

    if (result.isOk) {
      toast.success('Dados editados com sucesso!')
      goToProfile()
    } else {
      toast.error(result.message)
    }
  }
  function goToProfile() {
    props.navigation.replace('Profile')
  }

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://www.bootdey.com/img/Content/avatar/avatar6.png',
          }}
        />
      </View>
      <View style={styles.form}>
        <FormField style={globalStyles.marginBottom2} label="Nome">
          <TextBox
            inputMode="text"
            value={formValues.name}
            onChangeText={handleChange('name')}
          ></TextBox>
        </FormField>
        <FormField style={globalStyles.marginBottom2} label="E-mail">
          <TextBox
            inputMode="email"
            value={formValues.email}
            onChangeText={handleChange('email')}
          ></TextBox>
        </FormField>
        <FormField style={globalStyles.marginBottom2} label="Tipo sanguineo">
          <TextBox
            inputMode="text"
            value={formValues.bloodType}
            onChangeText={handleChange('bloodType')}
          ></TextBox>
        </FormField>
        <FormField style={globalStyles.marginBottom2} label="Telefone">
          <TextBox
            inputMode="text"
            value={formValues.phone}
            onChangeText={handleChange('phone')}
          ></TextBox>
        </FormField>
        <FormField
          style={globalStyles.marginBottom2}
          label="Data de nascimento"
        >
          <TextBox
            inputMode="text"
            value={formValues.birthday}
            onChangeText={handleChange('birthday')}
          ></TextBox>
        </FormField>
        <PrimaryButton
          style={{ ...globalStyles.elevation1, width: '100%' }}
          onPress={handleEdit}
        >
          Enviar
        </PrimaryButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '80%',
  },
  label: {
    marginTop: 20,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#1E90FF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  avatarContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  changeAvatarButton: {
    marginTop: 10,
  },
  changeAvatarButtonText: {
    color: '#1E90FF',
    fontSize: 18,
  },
})
