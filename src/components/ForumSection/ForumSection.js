import React from 'react'
import './ForumSection.css'
import { Textarea, Button } from '../../Utils/Utils'


export default function ForumSection(props){
    return (
            <section className="forumSection">
                <h4>{props.topic}</h4>
                <p>{props.forumText}</p>
                <Textarea id="forumText" rows="5"></Textarea>
                <Button id="forumSubmit">submit</Button>
            </section>
    )
}