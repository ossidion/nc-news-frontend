function Nav () {
  return (
    <nav className="nav">
      <div className="nav-div">
        <a href="/" className="logo-container">
            <img src="/assets/logo.jpg" className="header-logo" alt="Logo" />
            <span className="logo-text">NC News</span>
        </a>
        <button data-collapse-toggle="navbar-dropdown" type="button" className="navbar-dropdown" aria-controls="navbar-dropdown" aria-expanded="false">
          <span className="nav-bar-menu">Open menu</span>
          <svg className="nav-bar-menu-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className="navbar-dropdown-content" id="navbar-dropdown">
          <ul className="ul-navbar-dropdown-content ">
            <li>
              <a href="#" className="nav-bar-home" aria-current="page">Home</a>
          </li>
          
          </ul>

          </div>


        

{/*       
          <a className="nav-item" href="topics">topics</a>
          <a className="nav-item" href="about">about</a>
          <a className="nav-item" href="contact">contact</a> */}
      </div>
    </nav>



  )
}

export default Nav;