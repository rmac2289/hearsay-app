import React from 'react'
import './Conversation.css'
import { Link } from 'react-router-dom'
import { Button } from '../../Utils/Utils'


export default function Conversation(props){
    return (
        <section className="conversationSection">
                <header>
                    <h1>keep the conversation going</h1>
                </header>
                <p>Talk with your peers about what is working, what isn't, and what needs improvement.</p>
                <div className="buttonDiv">
                <Button><Link id="chatLink" to='/'>forum</Link></Button>
                </div>
            </section>
    )
}