import '../App.css';
import '../icons.js';
import Header from './Header';
import Footer from './Footer';
import ArticlesWrapper from './ArticlesWrapper';
import ArticleBody from './ArticleBody';
import About from './About.jsx';
import Contact from './Contact.jsx';
import { Routes, Route } from 'react-router-dom';
import { UserProvider } from '../contexts/User';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';



function App() {
  const location = useLocation(); 

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTopicsOpen, setIsTopicsOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleTopics = () => setIsTopicsOpen(prev => !prev);
  const closeTopics = () => setIsTopicsOpen(false);

  useEffect(() => {
    closeMenu();
    closeTopics();
  }, [location.pathname]);

  return (
    <>
      <UserProvider>
      <div className="page-wrapper">
        <Header 
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          closeMenu={closeMenu}
          isTopicsOpen={isTopicsOpen}
          toggleTopics={toggleTopics}
          closeTopics={closeTopics}/>
        <section className='main-container'>
          <Routes>
            <Route path="/" element={<ArticlesWrapper 
              isMenuOpen={isMenuOpen}
              isTopicsOpen={isTopicsOpen}
              toggleMenu={toggleMenu}
              closeMenu={closeMenu}
              toggleTopics={toggleTopics}
              closeTopics={closeTopics}/>} />
            <Route path="/articles/:id" element={<ArticleBody
              closeMenu={closeMenu}
              closeTopics={closeTopics}
            />} />
            <Route path="/topics/:topic" element={<ArticlesWrapper />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            </Routes>
        </section>
        <Footer />
        </div>
      </UserProvider>
    </>
  )
}

export default App
