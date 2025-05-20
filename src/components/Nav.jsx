import { Link } from 'react-router-dom';

function Nav({ isMenuOpen, toggleMenu, closeMenu, isTopicsOpen, toggleTopics, closeTopics }) {

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-top-row">
        <Link to="/" className="navbar-logo" onClick={() => {
            closeTopics();
            closeMenu();
                  }}>            
        <img src="./public/assets/logo.jpg" className="logo-img" alt="Logo"/>
            <span className="navbar-title">NC News</span>
            </Link>
          <div className="navbar-button-wrapper">
            <button
              onClick={toggleMenu}
              type="button"
              className="navbar-dropdown-button"
              aria-controls="navbar-multi-level"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Toggle menu</span>
              <svg className="icon" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>
        </div>
        <div className={`navbar-dropdown-content ${isMenuOpen ? 'open' : ''}`} id="navbar-multi-level">
          <ul className="ul-navbar-dropdown-content">
            <li>
              <button onClick={toggleTopics} className="topics-drop-down-button">
                Topics
                <svg className="topics-drop-down-button-svg">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>

              {isTopicsOpen && (
                <div className={`topics-drop-down-menu ${isTopicsOpen ? 'open' : ''}`}>
                <ul className="topics-ul">
                  <li><Link to="/topics/coding" className="topic-list" onClick={() => {
                    closeTopics();
                    closeMenu();
                  }}>Coding</Link></li>
                  <li><Link to="/topics/football" className="topic-list" onClick={() => {
                    closeTopics();
                    closeMenu();
                  }}>Football</Link></li>
                  <li><Link to="/topics/cooking" className="topic-list" onClick={() => {
                    closeTopics();
                    closeMenu();
                  }}>Cooking</Link></li>
                  </ul>
                </div>
              )}
            </li>
            <li><Link to="/about" className="nav-link" onClick={() => {
                    closeTopics();
                    closeMenu();
                  }}>About</Link></li>
            <li><Link to="/contact" className="nav-link" onClick={() => {
                    closeTopics();
                    closeMenu();
                  }} >Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
