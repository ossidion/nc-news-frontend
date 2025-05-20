import Nav from './Nav';
import { useContext } from 'react';
import { UserContext } from '../contexts/User'

function Header({ isMenuOpen, toggleMenu, closeMenu, isTopicsOpen, toggleTopics, closeTopics }) {
    const {loggedInUser} = useContext(UserContext) 
    return (
        <>
            <Nav isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
            closeMenu={closeMenu}
            isTopicsOpen={isTopicsOpen}
            toggleTopics={toggleTopics}
            closeTopics={closeTopics}/>
        </>
    )
}

export default Header;