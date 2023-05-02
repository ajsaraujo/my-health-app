import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { getSession } from '@shared/services/auth/session'
import { useEffect, useState } from 'react'
import { RouteParams } from '../../routeParams'
import React from 'react'
import { Text, View, Image, Button, StyleSheet } from 'react-native'
import { logOut } from '@shared/services/auth'
import { useNavigation } from '@react-navigation/native'

type ProfileProps = NativeStackScreenProps<RouteParams, 'Profile'>

export default function Profile(props: ProfileProps) {
  const navigation = useNavigation()

  const [user, setUser] = useState<UserSession | null>(null)
  const today = new Date()
  const birthday = new Date(user?.birthday || '')

  const ageDiff = today.getTime() - birthday.getTime()
  const ageDate = new Date(ageDiff) // miliseconds from epoch
  const age = Math.abs(ageDate.getUTCFullYear() - 1970)
  useEffect(() => {
    async function fetchUser() {
      const session = await getSession()

      if (session !== null) {
        setUser(session)
      }
    }

    fetchUser()
  }, [])

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://www.bootdey.com/img/Content/avatar/avatar6.png',
            }}
          />
          <View style={styles.info}>
            <Text style={styles.name}>{user?.name}</Text>
          </View>
        </View>
        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.statLabel}>Idade: {age} anos</Text>
          </View>
        </View>
        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.statLabel}>Email: {user?.email}</Text>
          </View>
        </View>
        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.statLabel}>
              Tipo sanguineo: {user?.bloodType}
            </Text>
          </View>
        </View>
        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.statLabel}>Telefone: {user?.phone}</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.info}>
          <Button
            title="Sair"
            onPress={async () => {
              await logOut()
              navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
              })
            }}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  info: {
    marginLeft: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  username: {
    color: '#999',
    fontSize: 18,
  },
  stats: {
    flexDirection: 'row',
    alignItems: 'right',
    padding: 20,
  },
  stat: {
    flex: 1,
    alignItems: 'right',
  },
  statLabel: {
    color: 'black',
    fontSize: 14,
  },
  statValue: {
    fontSize: 18,
  },
  bio: {
    padding: 20,
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    marginTop: '80%',
    marginRight: 'auto',
    marginLeft: 'auto',
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: 'red',
  },
})
