import ArticleCard from './ArticleCard'
import { useState, useEffect } from 'react';
import { getArticles } from '../api';
import { RingLoader } from 'react-spinners';
import { useParams } from 'react-router-dom';

function ArticlesWrapper({closeTopics, closeMenu}) {
  
  const [data, setArticles] = useState([]);
  const [error, setError] = useState([false]);
  const [isLoading, setIsLoading] = useState([true]);
  const { topic } = useParams();

  useEffect (() => {
    setIsLoading(true);
    setError(false);
    getArticles(topic)
    .then((data) => {
      setArticles(data)
    })
    .catch(() => {
      setError(true)
    })
    .finally(() => {
      setIsLoading(false)
    })
  }, [topic]);

  if (error) return <p>oops, something went wrong!</p>

  if (isLoading) return <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '75vh',
  }}><RingLoader /></div>

  return (
    <>
      <section>
        {topic && (
          <h2 className="topic-heading">
          Articles about {topic.charAt(0).toUpperCase() + topic.slice(1)}
          </h2>
        )};
        <section className="article-list">
          {data.map((article) => {
            return <ArticleCard article={article} key={article.article_id} onClick={() => {
              closeTopics();
              closeMenu();
            }}/>
            })};
        </section>
      </section>   
    </>
  )
}

export default ArticlesWrapper;