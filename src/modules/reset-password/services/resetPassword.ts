import axios from 'axios'
import { config } from 'src/config'

export async function resetPassword(pinCode: string, newPassword: string) {
  const URL = `${config.mainAPIUrl}/user/reset-password`

  await axios.post(URL, {
    pin: pinCode,
    confirmPassword: newPassword,
    password: newPassword,
  })
}
