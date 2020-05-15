import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn } from '@fortawesome/free-solid-svg-icons'
import TokenService from '../../services/token-service'


export default class Nav extends Component{

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        this.forceUpdate()
    }

    renderLogoutLink = () => {
        return (
            <Link
              className="navLink"
              onClick={this.handleLogoutClick}
              to='/'
              >
              Logout
            </Link>
        )
      }
     
    renderLoginLink = () => {
        return (
            <>
            <li><Link className="navLink" to='/login'>Login</Link></li>
            <li><Link className="navLink" to='/signuppage'>Register</Link></li>
            </>
        )
      }
      render(){
    return (
        <nav>
            <h5 id="linkLogo"><Link id="navLogo" to="/">hearsay <span><FontAwesomeIcon id="bullhorn" icon={faBullhorn}/></span></Link></h5>
            <ul>{TokenService.hasAuthToken() ? this.renderLogoutLink():this.renderLoginLink()}
                <li><Link className="navLink" to='/'>Home</Link></li>
                <li><Link className="navLink" to='/departments'>Write Review</Link></li>
                <li><Link className="navLink" to='/forum'>Forum</Link></li>
            </ul>
        </nav>
    )
      }
}