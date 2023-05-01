import { View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { FloatingActionButton } from '@shared/ui/components'
import { globalStyles } from '@shared/ui/globalStyles'
import { useEffect, useState } from 'react'

import { MyHealthModule } from '../../modules'
import { RouteParams } from '../../routeParams'
import { fetchArticles } from './api'
import { ArticleList } from './components/ArticleList'
import { Article } from './interfaces/Article'
import { useToastActions } from '@shared/ui/components/toast/ToastProvider'
import { checkIfUserIsAdmin } from '@shared/services/auth'

type ArticlesProps = NativeStackScreenProps<
  RouteParams,
  MyHealthModule.Articles
>

export default function Articles(props: ArticlesProps) {
  const [articles, setArticles] = useState<Article[]>([])
  const [isAdmin, setIsAdmin] = useState(false)

  const toast = useToastActions()

  useEffect(() => {
    function fetchData() {
      fetchArticles()
        .then(setArticles)
        .catch(() =>
          toast.error(
            'Houve um erro ao buscar os artigos. Por favor, tente novamente.',
            3000
          )
        )

      checkIfUserIsAdmin().then(setIsAdmin)
    }

    fetchData()
  }, [])

  function goToPostNews() {
    props.navigation.push('PublishNews')
  }

  return (
    <View style={{ height: '100%' }}>
      <ArticleList articles={articles}></ArticleList>

      {true && (
        <FloatingActionButton
          icon="add"
          onPress={goToPostNews}
        ></FloatingActionButton>
      )}
    </View>
  )
}
