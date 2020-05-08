import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default function Nav(props){
    return (
        <nav>
            <ul>
                <li><Link className="navLink" to='/login' onClick={props.login}>Login</Link></li>
                <li><Link className="navLink" to='/'>Home</Link></li>
                <li><Link className="navLink" to='/singlereview'>Review Sample</Link></li>
            </ul>
        </nav>
    )
}