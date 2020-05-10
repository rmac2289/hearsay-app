import React from 'react'
import './ForumSection.css'


export default function ForumSection(props){
    return (
            <section className="forumSection">
                <h4>{props.topic}</h4>
                <p>{props.forumText}</p>
                <textarea id="forumText" rows="5"></textarea>
                <button id="forumSubmit">submit</button>
            </section>
    )
}