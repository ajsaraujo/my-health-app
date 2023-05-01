import { getSession } from '@shared/services/auth'
import { genericFailure, Result, success } from '@shared/utils/result/result'
import axios from 'axios'
import { config } from 'src/config'

import { Article } from '../interfaces/Article'

const URL = `${config.mainAPIUrl}/article`

export async function fetchArticles(): Promise<Article[]> {
  const session = (await getSession()) as UserSession

  const response = await axios.get(URL, {
    headers: { Authorization: `Bearer ${session.access_token}` },
  })

  return response.data
}

export async function postArticle(
  title: string,
  content: string
): Promise<Result<null>> {
  const session = (await getSession()) as UserSession

  try {
    await axios.post(
      URL,
      { title, content, authorId: session.id },
      {
        headers: { Authorization: `Bearer ${session.access_token}` },
      }
    )

    return success(null)
  } catch (err) {
    return genericFailure()
  }
}
