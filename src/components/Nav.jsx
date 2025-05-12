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

            <li>
            <button id="dropdown-Navbar-Link" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
            <!-- Dropdown menu -->
            <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                  </li>
                </ul>
                <div class="py-1">
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </div>
            </div>
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