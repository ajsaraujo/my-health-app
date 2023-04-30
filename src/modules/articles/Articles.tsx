import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View } from 'react-native'
import { MyHealthModule } from '../../modules'
import { RouteParams } from '../../routeParams'
import { globalStyles } from '@shared/ui/globalStyles'
import { StyledText } from '@shared/ui/components'
import { useState, useEffect } from 'react'
import { ArticleList } from './components/ArticleList'
import { fetchArticles } from './api'
import { Article } from './interfaces/Article'

type ArticlesProps = NativeStackScreenProps<
  RouteParams,
  MyHealthModule.Articles
>

export default function ShowArticles(props: ArticlesProps) {
  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    async function fetchData() {
      const data = await fetchArticles()
      setArticles(data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  )
}
