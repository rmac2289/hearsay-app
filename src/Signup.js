import React from 'react'
import './Signup.css'

export default function Signup(props) {
    return (
        <section className="signupFormSection">
            <header className="signupHeader">
                <h3>Sign up below & join the conversation</h3>
            </header>
            <form className="signupForm">
                <div className="signupInput">
                    <div>
                        <input placeholder='First Name' type="text" name='first-name' id='first-name' />
                    </div>
                </div>
                <div className="signupInput">
                    <div>
                        <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
                    </div>
                </div>
                <div className="signupInput">
                    <div>
                        <input type="text" placeholder="Username" name='username' id='username' />
                    </div>
                </div>
                <div className="signupInput">
                    <div>
                        <input type="password" placeholder="Password" name='password' id='password' />
                    </div>
                </div>
                <button type='submit'>Sign Up</button>
            </form>
        </section>
    )
}