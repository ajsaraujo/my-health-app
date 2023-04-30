import AsyncStorage from '@react-native-async-storage/async-storage'

const STORAGE_KEY = '@session_storage_key'

let currentSession: UserSession | null = null

export async function saveSession(session: UserSession) {
  currentSession = session

  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(session))
}

export async function getSession(): Promise<UserSession | null> {
  if (currentSession) {
    return currentSession
  }

  const sessionStr = await AsyncStorage.getItem(STORAGE_KEY)

  if (sessionStr !== null) {
    return JSON.parse(sessionStr)
  } else {
    return null
  }
}

export async function logOut() {
  currentSession = null
  await AsyncStorage.removeItem(STORAGE_KEY)
}
