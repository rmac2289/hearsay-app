import React from 'react';
import Nav from '../Nav/Nav'
import './Login.css'
import Footer from '../Footer/Footer'

export default function Login(props){
    return(
        <div>
            <Nav />
            <header className="loginHeader">
                <h2>Log In</h2>
            </header>
            <section>
            <form className="loginForm">
                <label htmlFor="username">Username</label>
                <input type="text" id="username"/>
                <label htmlFor="password">Password</label>
                <input type="text" id="password"/>
                <button className="loginButton">Submit</button>
            </form>
            </section>
            <section>
                <h4>Forgot your password or username?</h4>
            </section>
            <Footer />
        </div>
    )
}