import { Article } from '../interfaces/Article'

interface ArticleListProps {
  articles: Article[]
}

export function ArticleList({ articles }: ArticleListProps) {
  return (
    <div>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
          <p></p>
        </div>
      ))}
    </div>
  )
}
