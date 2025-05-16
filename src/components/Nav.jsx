import { useState } from 'react';


function Nav () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
<nav className="navbar">
  <div className="navbar-container">
  <div className="navbar-top-row">
    <a href="/" className="navbar-logo">
      <img src="./public/assets/logo.jpg" className="logo-img" alt="Logo" />
      <span className="navbar-title">NC News</span>
    </a>
    <div className="navbar-button-wrapper">
    <button onClick={toggleMenu} type="button" className="navbar-dropdown-button"  aria-controls="navbar-multi-level" aria-expanded={isMenuOpen}>
      <span className="sr-only"></span>
      <svg className="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
    </button>
    </div>
    </div>
      <div className={`navbar-dropdown-content ${isMenuOpen ? 'open' : ''}`} id="navbar-multi-level">
      <ul className="ul-navbar-dropdown-content">
        <li>
          <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="topics-drop-down-button">
            Topics
            <svg className="topics-drop-down-button-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          <div id="dropdownNavbar" className="topics-drop-down-menu">
            <ul className="topics-ul">
              <li><a href="#" className="topic-list">Dashboard</a></li>
              <li>
                <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="topic-list">
                  Dropdown
                  <svg className="topics-drop-down-button-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </button>
                <div id="doubleDropdown" className="topics-drop-down-menu">
                  <ul className="topics-ul">
                    <li><a href="#" className="topic-list">Overview</a></li>
                    <li><a href="#" className="topic-list">My downloads</a></li>
                    <li><a href="#" className="topic-list">Billing</a></li>
                    <li><a href="#" className="topic-list">Rewards</a></li>
                  </ul>
                </div>
              </li>
              <li><a href="#" className="topic-list">Earnings</a></li>
            </ul>
            <div className="py-1">
              <a href="#" className="topic-list">Sign out</a>
            </div>
          </div>
        </li>
        <li><a href="#" className="nav-link">About</a></li>
        <li><a href="#" className="nav-link">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>


  )
}

export default Nav;