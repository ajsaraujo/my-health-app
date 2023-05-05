import { getSession } from '@shared/services/auth'
import { genericFailure, Result, success } from '@shared/utils/result/result'
import axios from 'axios'

import { Article } from '../interfaces/Article'
import { config } from 'src/config'

const URL = `${config.mainAPIUrl}/article`

async function fetchToken() {
  const session = await getSession()

  if (session !== null) {
    return session.access_token
  }
  return null
}

let articles: Article[] | null = null

export async function fetchArticles(): Promise<Article[]> {
  if (articles !== null) {
    return articles
  }

  const session = (await getSession()) as UserSession

  const response = await axios.get(URL, {
    headers: { Authorization: `Bearer ${session.access_token}` },
  })

  articles = response.data
  return response.data
}

export async function postArticle(
  title: string,
  content: string
): Promise<Result<null>> {
  const session = (await getSession()) as UserSession

  try {
    const response = await axios.post<Article>(
      URL,
      { title, content, authorId: session.id },
      {
        headers: { Authorization: `Bearer ${session.access_token}` },
      }
    )

    articles?.push(response.data)

    return success(null)
  } catch (err) {
    return genericFailure()
  }
}
