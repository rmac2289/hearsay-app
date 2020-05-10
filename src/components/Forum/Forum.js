import React from 'react'
import './Forum.css'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import STORE from '../../STORE'
import ForumSection from '../ForumSection/ForumSection'

export default function Forum(){
    const topics = STORE[0].forum_categories
    const forumText = 'This is test text for a forum category. This is where the user will see what other users have writtin regarding the topic'
    return (
        <div>
            <Nav/>
            <header className="forumHeader">
                <h2>forum page</h2>
            </header>
            <section>
                <ul>
                    <h3>forum topics</h3>
                    {topics.map((value, index) => {
                        return <li key={index}><a id="forumLink" href="#">{value}</a></li>
                    })}
                </ul>
            </section>
            <ForumSection topic={topics[1]} forumText={forumText}/>
            <Footer/>
        </div>
    )
} 