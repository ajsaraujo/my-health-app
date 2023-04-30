import axios from 'axios'
import { Article } from '../interfaces/Article'

let webApiUrl = 'https://my-health-api.herokuapp.com/article'
let tokenStr = 'access_token'
export async function fetchArticles(): Promise<Article[]> {
  const response = await axios.get(webApiUrl, {
    headers: { Authorization: `access_token ${tokenStr}` },
  })
  return response.data
}
