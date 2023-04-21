// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
import 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyClcezNjrXXZd6ujR9XSfJMa32YJh3G_gI',
  authDomain: 'my-health-556cf.firebaseapp.com',
  projectId: 'my-health-556cf',
  storageBucket: 'my-health-556cf.appspot.com',
  messagingSenderId: '234766706',
  appId: '1:234766706:web:f56570baa7fa55f79d9deb',
  measurementId: 'G-3Z2JPF6DXH',
}

// Initialize Firebase
const database = initializeApp(firebaseConfig)
const analytics = getAnalytics(database)

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export default db

// Get a list of cities from your database
export async function getCities(db) {
  const citiesCol = collection(db, 'Noticias')
  const citySnapshot = await getDocs(citiesCol)
  const cityList = citySnapshot.docs.map((doc) => doc.data())
  return cityList
}
