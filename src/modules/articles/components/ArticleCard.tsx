import { View, StyleSheet } from 'react-native'
import { Article } from '../interfaces/Article'
import { StyledText } from '@shared/ui/components'

export function ArticleCard(props: { article: Article }) {
  const { article } = props
  const { title, content } = article

  return (
    <View>
      <StyledText style={styles.title}>{title}</StyledText>
      <StyledText style={styles.content}>{content}</StyledText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
    lineHeight: 20,
  },
})
