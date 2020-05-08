import React from 'react';
import Nav from '../Nav/Nav'
import './Landing.css'
import Header from '../Header/Header'
import Signup from '../Signup/Signup'
import Footer from '../Footer/Footer'
import Community from '../Community/Community'
import Conversation from '../Conversation/Conversation'
import Threats from '../Threats/Threats'
import About from '../About/About'



export default function Landing(props) {

    return (
        <div>
            <Nav />
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
            <Footer />

        </div>
    )
}