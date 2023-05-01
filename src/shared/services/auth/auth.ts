import { ErrorResponse } from '@shared/models/ErrorResponse'
import { handleHttpFailure } from '@shared/utils/axios/handleHttpFailure'
import { Result, success } from '@shared/utils/result/result'
import axios from 'axios'
import { config } from 'src/config'

import { saveSession } from './session'

const URL = `${config.mainAPIUrl}/auth`

export async function authenticate(
  email: string,
  password: string
): Promise<Result<UserSession>> {
  try {
    const response = await axios.post<UserSession | ErrorResponse>(
      `${URL}/authenticate`,
      {
        email,
        password,
      }
    )

    await saveSession(response.data as UserSession)

    return success(response.data as UserSession)
  } catch (error: unknown) {
    return handleHttpFailure(error, { 401: 'Usuário e/ou senha inválidos.' })
  }
}
