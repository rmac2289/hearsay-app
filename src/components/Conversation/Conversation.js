import React from 'react'
import './Conversation.css'
import { Link } from 'react-router-dom'


export default function Conversation(props){
    return (
        <section>
                <header>
                    <h3>Keep the conversation going</h3>
                </header>
                <p>Talk with your peers about what is working, what isn't, and what needs improvement.</p>
                <div className="buttonDiv">
                <button><Link id="chatLink" to='/chat'>chat</Link></button>
                </div>
            </section>
    )
}