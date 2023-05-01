import { handleHttpFailure } from '@shared/utils/axios/handleHttpFailure'
import { Result, success } from '@shared/utils/result/result'
import axios from 'axios'
import { config } from 'src/config'

export async function resetPassword(
  pinCode: string,
  newPassword: string
): Promise<Result<null>> {
  const URL = `${config.mainAPIUrl}/user/reset-password`

  try {
    await axios.post(URL, {
      pin: pinCode,
      confirmPassword: newPassword,
      password: newPassword,
    })

    return success(null)
  } catch (error) {
    return handleHttpFailure(error, {
      400: `${pinCode} não é um código válido. Por favor, verifique o código recebido no seu e-mail.`,
    })
  }
}
