import axios from 'axios'
import { Article } from '../interfaces/Article'
import { config } from 'src/config'
import { getSession } from '@shared/services/auth/session'

const URL = `${config.mainAPIUrl}/article`

async function fetchToken() {
  const session = await getSession()

  if (session !== null) {
    return session.access_token
  }
  return null
}

export async function fetchArticles(): Promise<Article[]> {
  let tokenStr = await fetchToken()
  if (tokenStr === null) {
    throw new Error('Usuario não autenticado')
  }
  const response = await axios.get(URL, {
    headers: { Authorization: `Bearer ${tokenStr}` },
  })
  return response.data
}

export async function postArticle(article: Article): Promise<number> {
  let tokenStr = await fetchToken()
  if (tokenStr === null) {
    throw new Error('Usuario não autenticado')
  }
  const response = await axios.post(URL, article, {
    headers: { Authorization: `Bearer ${tokenStr}` },
  })
  console.log(response.status)
  return response.status
}
