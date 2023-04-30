import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MyHealthModule } from '../../modules'
import { RouteParams } from '../../routeParams'
import { useState, useEffect } from 'react'
import { ArticleList } from './components/ArticleList'
import { fetchArticles } from './api'
import { Article } from './interfaces/Article'
import { globalStyles } from '@shared/ui/globalStyles'
import { PrimaryButton } from '@shared/ui/components'
type ArticlesProps = NativeStackScreenProps<
  RouteParams,
  MyHealthModule.Articles
>

export default function ShowArticles(props: ArticlesProps) {
  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchArticles()
        setArticles(data)
      } catch (error) {
        // Melhorar esse catch error
        console.error(error)
      }
    }
    fetchData()
  }, [])

  function handlePostNews() {
    props.navigation.push('PublishNews')
  }

  return (
    <div>
      {articles.length > 0 ? (
        <ArticleList articles={articles} />
      ) : (
        <p>Não há notícias para exibir.</p>
      )}
      {/* Ocultar esse botão de acordo com a permissão e colocar ele flutuante */}
      <PrimaryButton
        style={{ ...globalStyles.elevation1, width: '100%' }}
        onPress={handlePostNews}
      >
        Publicar notícia
      </PrimaryButton>
    </div>
  )
}
