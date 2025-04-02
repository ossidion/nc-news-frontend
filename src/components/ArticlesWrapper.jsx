import ArticleCard from './ArticleCard'
import { useState, useEffect } from 'react';
import { getArticles } from '../api';
import { RingLoader } from 'react-spinners';

function ArticlesWrapper() {
  const [data, setArticles] = useState([]);
  const [error, setError] = useState([false]);
  const [isLoading, setIsLoading] = useState([true]);

  useEffect (() => {
    setIsLoading(true);
    setError(false);
    getArticles()
    .then((data) => {
      setArticles(data)
    })
    .catch(() => {
      setError(true)
    })
    .finally(() => {
      setIsLoading(false)
    })
  }, []);

  if (error) return <p>oops, something went wrong!</p>

  if (isLoading) return <RingLoader />

  return (
    <>
      <section>
          {/* <h2>Articles</h2> */}
          <section className="article-list">
            {data.map((article) => {
              return <ArticleCard article={article} key={article.article_id} />;
            })}
        </section>
      </section>   
    </>
  )
}

export default ArticlesWrapper;