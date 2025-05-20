import { reverseDate } from "../../utilityFunctions"
import { Link } from "react-router-dom"
import { motion } from "framer-motion";


function ArticleCard ({ article }) {
  return (
      <motion.article
        className="article-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}>
        <Link to={`/articles/${article.article_id}`} className="article-title-link">
          <p className="article-title">{article.title}</p>
          <img className="img" src={article.article_img_url} alt={article.title}></img>
        </Link> 
        <p className="article-published-by">Published by {article.author}</p>
        <p className="article-created-at">{article.created_at.slice(11, -8)}     
        {" on "}{reverseDate(article.created_at)}</p>
        <p className="article-list-votes">Votes: {article.votes}</p>
      </motion.article>
  )
}

export default ArticleCard