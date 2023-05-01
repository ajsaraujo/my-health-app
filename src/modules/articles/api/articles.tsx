import { getSession } from '@shared/services/auth'
import axios from 'axios'
import { config } from 'src/config'

import { Article } from '../interfaces/Article'

const URL = `${config.mainAPIUrl}/article`

export async function fetchArticles(): Promise<Article[]> {
  return [
    {
      id: '7122a943-ff5f-423f-b2da-67fddd04b801',
      title: 'titulo',
      content: 'esse eh um teste',
      status: 'DRAFT',
      authorId: 'cab6998a-90d6-493c-b6b8-823eb3237b87',
    },
    {
      id: '15975d5e-386c-4141-a7b3-0d1bfb3d7411',
      title: 'titulo',
      content: 'esse eh um teste dois',
      status: 'DRAFT',
      authorId: 'cab6998a-90d6-493c-b6b8-823eb3237b87',
    },
    {
      id: 'fbb45cd9-45bc-4802-b6e2-b4a478e1954a',
      title: 'titulo 3',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      status: 'DRAFT',
      authorId: 'cab6998a-90d6-493c-b6b8-823eb3237b87',
    },
    {
      id: 'ecbffd01-0257-4058-a9dd-be83c0652c6a',
      title: 'titulo do app',
      content: 'texto do app',
      status: 'DRAFT',
      authorId: 'cab6998a-90d6-493c-b6b8-823eb3237b87',
    },
    {
      id: '339940e5-a068-4fea-8448-311b5f55235f',
      title: 'dwadwa',
      content: '',
      status: 'DRAFT',
      authorId: 'cab6998a-90d6-493c-b6b8-823eb3237b87',
    },
    {
      id: 'ebbb70bb-9aa9-4922-9e37-e2810c92afde',
      title: 'tes',
      content: 'dwadwadad',
      status: 'DRAFT',
      authorId: 'cab6998a-90d6-493c-b6b8-823eb3237b87',
    },
    {
      id: '7ffa16f0-a922-4636-8d96-d71bac6aec96',
      title: 'til',
      content: 'dwadwadwadwadsaca',
      status: 'DRAFT',
      authorId: 'cab6998a-90d6-493c-b6b8-823eb3237b87',
    },
    {
      id: 'ac4a2874-112f-4cca-8fda-523143ab42ac',
      title: 'outro teste',
      content: 'dwadwad',
      status: 'DRAFT',
      authorId: 'cab6998a-90d6-493c-b6b8-823eb3237b87',
    },
  ]
  const session = (await getSession()) as UserSession

  const response = await axios.get(URL, {
    headers: { Authorization: `Bearer ${session.access_token}` },
  })

  return response.data
}

export async function postArticle(article: Article): Promise<number> {
  const session = (await getSession()) as UserSession

  const response = await axios.post(URL, article, {
    headers: { Authorization: `Bearer ${session.access_token}` },
  })

  return response.status
}
