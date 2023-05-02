import { handleHttpFailure } from '@shared/utils/axios/handleHttpFailure'
import { Result, success } from '@shared/utils/result/result'
import axios from 'axios'
import { config } from 'src/config'

export async function editProfile(
  name?: string,
  email?: string,
  bloodType?: string,
  phone?: string,
  birthday?: string
): Promise<Result<null>> {
  const URL = `${config.mainAPIUrl}/user`

  try {
    await axios.post(URL, {
      name: name,
      email: email,
      bloodType: bloodType,
      phone: phone,
      birthday: birthday,
    })

    return success(null)
  } catch (error) {
    return handleHttpFailure(error, {
      400: `Houve algo de errado, tente novamente mais tarde`,
    })
  }
}
