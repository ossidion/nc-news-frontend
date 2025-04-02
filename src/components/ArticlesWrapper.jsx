import ArticleCard from './ArticleCard'
import { useState, useEffect } from 'react';
import { getArticles } from '../api';

function ArticlesWrapper() {
  const [data, setArticles] = useState([])

  useEffect (() => {
    getArticles()
    .then((data) => {
      setArticles(data)
    })
  }, []);

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