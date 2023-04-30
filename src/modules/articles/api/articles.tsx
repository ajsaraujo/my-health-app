import axios from 'axios'
import { Article } from '../interfaces/Article'

let webApiUrl = 'https://my-health-api.herokuapp.com/article'
let tokenStr = 'colocar token aqui'
export async function fetchArticles(): Promise<Article[]> {
  const response = await axios.get(webApiUrl, {
    headers: { Authorization: `Bearer ${tokenStr}` },
  })
  return response.data
}
