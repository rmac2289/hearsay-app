import React from 'react'
import './Forum.css'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'


export default function Forum(){
    return (
        <div>
            <Nav/>
            <header className="forumHeader">
                <h2>forum page</h2>
            </header>
            <section>
                <ul>
                    <h3>forum topics</h3>
                    <li>topic 1</li>
                    <li>topic 2</li>
                    <li>topic 3</li>
                </ul>
            </section>
            <section className="forumSection">
                <h4>open forum topic</h4>
                <p>forum topic text</p>
                <textarea id="forumText" rows="5"></textarea>
            </section>
            <Footer/>
        </div>
    )
} 