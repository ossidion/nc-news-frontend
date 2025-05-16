import { reverseDate } from "../../utilityFunctions"
import { Link } from "react-router-dom"

function ArticleCard ({ article }) {
  return (
    <>
      <section className="article-card">
        <Link to={`articles/${article.article_id}`}>
          <p className="article-title">{article.title}</p>
          <img className="img" src={article.article_img_url} alt={article.title}></img>
        </Link> 
        <p className="article-published-by">Published by {article.author}</p>
        <p className="article-created-at">{article.created_at.slice(11, -8)}     
        {" on "}{reverseDate(article.created_at)}</p>
        <p className="article-list-votes">Votes: {article.votes}</p>
      </section>
    </>
  )
}

export default ArticleCard