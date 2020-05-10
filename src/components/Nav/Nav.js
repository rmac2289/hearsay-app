import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn } from '@fortawesome/free-solid-svg-icons'

export default function Nav(props){
    return (
        <nav>
            <h5 ><Link id="navLogo" to="/">hearsay <span><FontAwesomeIcon id="bullhorn" icon={faBullhorn}/></span></Link></h5>
            <ul>
                <li><Link className="navLink" to='/login' onClick={props.login}>Login</Link></li>
                <li><Link className="navLink" to='/signuppage'>Register</Link></li>
                <li><Link className="navLink" to='/'>Home</Link></li>
                <li><Link className="navLink" to='/departments'>Write Review</Link></li>
                <li><Link className="navLink" to='/forum'>Forum</Link></li>
            </ul>
        </nav>
    )
}