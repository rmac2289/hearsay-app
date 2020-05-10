import React from 'react'
import './Community.css'
import { Link } from 'react-router-dom'
import { Input, Button } from '../../Utils/Utils'

export default function Community(props){
    return (
        <section>
                <header>
                    <h2>see what others are saying in your community</h2>
                </header>
                <p>Find out what others in the country are saying about their local officials. Search for your city to see reviews near you.</p>
                <div className="citySearch">
                <Input type="search" name="search" id="search" defaultValue="New York" />
                <Button id="communityButton"><Link id="communityLink" to='/singlereview'>search</Link></Button>
                </div>
        </section>
    )
}