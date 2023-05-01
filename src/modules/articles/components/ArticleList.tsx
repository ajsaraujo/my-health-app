import { View } from 'react-native'
import { Article } from '../interfaces/Article'
import { StyledText } from '@shared/ui/components'

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
        <View key={article.id}>
          <StyledText>{article.title}</StyledText>
          <StyledText>{article.content}</StyledText>
        </View>
      ))}
    </View>
  )
}
