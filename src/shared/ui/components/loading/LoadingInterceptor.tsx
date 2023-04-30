import axios from 'axios'
import { useState } from 'react'
import { Loading } from './Loading'

export function LoadingInterceptor() {
  const [requestCount, setRequestCount] = useState(0)

  axios.interceptors.request.use((config) => {
    setRequestCount(requestCount + 1)
    return config
  })

  axios.interceptors.response.use(
    (config) => {
      decreaseRequestCount()
      return config
    },
    (error) => {
      decreaseRequestCount()
      throw error
    }
  )

  function decreaseRequestCount() {
    setRequestCount(requestCount - 1)
  }

  return <Loading visible={requestCount > 0}></Loading>
}
