import Nav from './Nav';
import { useContext } from 'react';
import { UserContext } from '../contexts/User'

function Header() {
    const {loggedInUser} = useContext(UserContext) 
    return (
        <>
            <p>Welcome: { loggedInUser }</p>
            <h1 className="header">NC News</h1>
                <Nav />
        </>
    )
}

export default Header;