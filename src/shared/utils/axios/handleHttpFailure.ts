import axios from 'axios'
import { Result, failure, genericFailure } from '../result/result'

export function handleHttpFailure<T>(
  error: unknown,
  errorMessages: Record<number, string>
): Result<T> {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status || -1

    if (errorMessages[status]) {
      return failure(errorMessages[status])
    }
  }

  return genericFailure()
}
