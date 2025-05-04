import { useParams } from "react-router-dom"
import { getArticleById } from "../api";
import { useState, useEffect } from 'react';
import { RingLoader } from 'react-spinners';
import GetCommentsHandler from "./GetCommentsHandler";
import VoteHandler from "./VoteHandler";
import PostCommentHandler from "./PostCommentHandler";


function ArticleBody() {
    const { id } = useParams();
    const [article, setArticle] = useState([]);
    const [error, setError] = useState([false]);
    const [isLoading, setIsLoading] = useState([true]);

    useEffect(() => {
      setIsLoading(true);
      setError(false);
      getArticleById(id)
      
      .then((article) => {
        setArticle(article.updatedArticle)
      })
      .catch(() => {
        setError(true)
      })
      .finally(() => {
        setIsLoading(false)
      })

    }, [id])

    if (error) return <p>oops, something went wrong!</p>

    if (isLoading) return <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}><RingLoader /></div>

    return (
    <>
      <section className="article-card">
        <h2 className="article-title">{article.title}</h2>
        <img className="img" src={article.article_img_url} alt={article.title}></img>
        <p className="article-body">{article.body}</p>
        <VoteHandler article_id={article} />
        <h3 className="comment-count">Comments: {article.comment_count}</h3>
        <PostCommentHandler article_id={article} />
        <GetCommentsHandler article={article} />
      </section>
    </>
    )

}

export default ArticleBody