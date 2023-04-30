import axios from 'axios'
import { Article } from '../interfaces/Article'

let webApiUrl = 'https://my-health-api.herokuapp.com/article'
let tokenStr = 'colocar access_token'
export async function fetchArticles(): Promise<Article[]> {
  const response = await axios.get(webApiUrl, {
    headers: { Authorization: `Bearer ${tokenStr}` },
  })
  return response.data
}

export async function postArticle(article: Article): Promise<number> {
  const response = await axios.post(webApiUrl, article, {
    headers: { Authorization: `Bearer ${tokenStr}` },
  })
  console.log(response.status)
  return response.status
}
