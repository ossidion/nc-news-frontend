import { reverseDate } from "../../utilityFunctions"

function ArticleCard ({ article }) {
  return (
    <>
      <section className="article-card">
        <p>{article.title}</p> 
        <img className="img" src={article.article_img_url} alt={article.title}></img>
        <p className="article-published-by">Published by {article.author}</p>
        <p className="article-created-at">{article.created_at.slice(11, -8)}     
        {" on "}{reverseDate(article.created_at)}</p>
        <p class="article-list-votes">Votes: {article.votes}</p>
      </section>
    </>
  )
}

export default ArticleCard