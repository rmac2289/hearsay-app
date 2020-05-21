import React from 'react';
import './Landing.css'
import Header from '../Header/Header'
import Signup from '../Signup/Signup'
import Community from '../Community/Community'
import Conversation from '../Conversation/Conversation'
import Threats from '../Threats/Threats'
import About from '../About/About'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'



export default function Landing(props) {
    
    return (
        <>
        <Nav />
        <div className="mainDiv">
            <Header />
        <div className="landingContainer">
            <div className="sectionContainer">
                <About />
                <Community />
                <Conversation />
                <Threats />
                <Signup />
            </div>
        </div>
        </div>
        <Footer />
        </>
    )
}