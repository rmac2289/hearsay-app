import React from 'react'
import './Community.css'

export default function Community(props){
    return (
        <section>
                <header>
                    <h3>See what others are saying in your community</h3>
                </header>
                <p>Find out what others in the country are saying about their local officials. Search for your city to see reviews near you.</p>
                <div className="citySearch">
                <input type="search" name="search" id="search" />
                <button id="communityButton">search</button>
                </div>
        </section>
    )
}