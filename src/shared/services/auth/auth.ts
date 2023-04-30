import { ErrorResponse } from '@shared/models/ErrorResponse'
import { failure, Result, success } from '@shared/utils/result/result'
import axios, { AxiosError } from 'axios'
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
    if (error instanceof AxiosError) {
      return handleAxiosError(error)
    }

    return failure('Um erro desconhecido ocorreu. Por favor, tente novamente.')
  }
}

function handleAxiosError(error: Error | AxiosError): Result<UserSession> {
  const UNAUTHORIZED_STATUS = 401

  const isWrongPasswordError =
    axios.isAxiosError(error) && error.response?.status === UNAUTHORIZED_STATUS

  if (isWrongPasswordError) {
    return failure('Usuário e/ou senha inválidos.')
  }

  return failure(error.message)
}
