import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'


export default function About(props){
    return (
        <section>
                <header>
                    <h3>Make your voice heard</h3>
                </header>
                <p>Hearsay allows you to get your voice out regarding contacts with law enforcement and the criminal justice system.</p>
                <div className="reviewLink">
                <h3><Link to='/review'>leave a review</Link></h3>
                </div>
            </section>
    )
}