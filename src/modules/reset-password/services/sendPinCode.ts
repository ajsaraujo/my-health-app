import { handleHttpFailure } from '@shared/utils/axios/handleHttpFailure'
import { Result, success } from '@shared/utils/result/result'
import axios from 'axios'
import { config } from 'src/config'

/**
 * Envia um código Pin para recuperação de senha
 */
export async function sendPinCode(email: string): Promise<Result<null>> {
  const URL = `${config.mainAPIUrl}/user/forgot-password`

  try {
    await axios.post(URL, { email })

    return success(null)
  } catch (err) {
    return handleHttpFailure(err, { 400: `${email} não é um e-mail válido.` })
  }
}
