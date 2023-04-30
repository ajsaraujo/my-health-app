type SuccessfulResult<T> = {
  isOk: true
  isFailure: false
  value: T
}

type FailedResult = {
  isOk: false
  isFailure: true
  error: unknown
  message: string
}

export type Result<T> = SuccessfulResult<T> | FailedResult

export function success<T>(data: T): Result<T> {
  return {
    isOk: true,
    isFailure: false,
    value: data,
  }
}

export function failure<T>(message: string, error?: unknown): Result<T> {
  return { isOk: false, isFailure: true, error, message }
}
