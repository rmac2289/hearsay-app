import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn } from '@fortawesome/free-solid-svg-icons'
import TokenService from '../../services/token-service'

export default function Nav(props){
    const [loggedIn, setLoggedIn] = useState(false)
    function handleLogoutClick(){
    }

    function renderLogoutLink(){
        return (
            <Link
              className="navLink"
              onClick={handleLogoutClick}
              to='/'>
              Logout
            </Link>
        )
      }
      function isLoggedIn(){
        if (TokenService.hasAuthToken()){
            setLoggedIn(true)
        }
        setLoggedIn(false)
    }
    
    
    function renderLoginLink() {
        return (
            <>
            <li><Link className="navLink" to='/login' onClick={props.login}>Login</Link></li>
            <li><Link className="navLink" to='/signuppage'>Register</Link></li>
            </>
        )
      }
    return (
        <nav>
            <h5 id="linkLogo"><Link id="navLogo" to="/">hearsay <span><FontAwesomeIcon id="bullhorn" icon={faBullhorn}/></span></Link></h5>
            <ul>{isLoggedIn ? renderLogoutLink():renderLoginLink()}
                <li><Link className="navLink" to='/'>Home</Link></li>
                <li><Link className="navLink" to='/departments'>Write Review</Link></li>
                <li><Link className="navLink" to='/forum'>Forum</Link></li>
            </ul>
        </nav>
    )
}