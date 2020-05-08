import React from 'react'
import './Header.css'

export default function Header(props){
    return(
        <header className="header">
            <h1 className="banner">hearsay</h1>
            <h3 className="bannerSub">where <span id="almost">almost</span> anything is admissible</h3>
        </header>
    )

}