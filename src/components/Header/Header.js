import React from 'react'
import './Header.css'
import TokenService from '../../services/token-service'

export default function Header(props){
    return(
        <>
        {TokenService.hasAuthToken() && <h5 id="welcome">welcome, {sessionStorage.username}!</h5>}
        <header className="header">
            <h1 className="banner">hearsay</h1>
        </header>
        </>
        
    )

}