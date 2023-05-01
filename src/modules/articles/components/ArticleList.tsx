import { View } from 'react-native'
import { Article } from '../interfaces/Article'
import { StyledText } from '@shared/ui/components'
import { ArticleCard } from './ArticleCard'
import { globalStyles } from '@shared/ui/globalStyles'
import { useFocusEffect } from '@react-navigation/native'

interface ArticleListProps {
  articles: Article[]
}

export function ArticleList({ articles }: ArticleListProps) {
  if (articles.length === 0) {
    return <StyledText>Não há notícias para exibir.</StyledText>
  }

  return (
    <View>
      {articles.map((article) => (
        <View key={article.id} style={globalStyles.marginBottom4}>
          <ArticleCard article={article}></ArticleCard>
        </View>
      ))}
    </View>
  )
}
