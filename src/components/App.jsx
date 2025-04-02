import '../App.css';
import Header from './Header';
import Footer from './Footer';
import ArticlesWrapper from './ArticlesWrapper';
import ArticleBody from './ArticleBody';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<ArticlesWrapper />} />
          <Route path="/articles/:id" element={<ArticleBody />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
