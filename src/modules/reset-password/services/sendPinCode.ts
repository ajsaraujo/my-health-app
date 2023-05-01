import { Result, failure, success } from '@shared/utils/result/result'
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
    if (axios.isAxiosError(err)) {
      const isBadRequest = err.response?.status === 400

      if (isBadRequest) {
        return failure(`${email} não é um e-mail válido.`)
      }
    }

    return failure('Um erro desconhecido ocorreu. Por favor, tente novamente.')
  }
}
