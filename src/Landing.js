import React from 'react';
import Nav from './Nav'
import './Landing.css'
import Header from './Header'
import Signup from './Signup'
import Footer from './Footer'
import LocationSearch from './Community'
import Conversation from './Conversation'
import Threats from './Threats'
import About from './About'
import Login from './Login'



export default function Landing(props) {
    
    return (
        <div>
            <Nav />
            <Header />
            <About />
            <LocationSearch />
            <Conversation />
            <Threats />
            <Signup />
            <Footer />

        </div>
    )
}