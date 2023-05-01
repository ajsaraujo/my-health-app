import { Navigation } from 'src/routeParams'
import { useNavigation } from '@react-navigation/native'
import { CgProfile } from 'react-icons/cg'
import { FiEdit } from 'react-icons/fi'

export function goToProfile() {
  const navigation = useNavigation<Navigation>()
  return (
    <CgProfile
      size={40}
      color="#fff"
      onClick={() => navigation.navigate('Profile')}
    />
  )
}

export function goToEditProfile() {
  const navigation = useNavigation<Navigation>()
  return (
    <FiEdit
      size={40}
      color="#fff"
      onClick={() => navigation.navigate('EditProfile')}
    />
  )
}
