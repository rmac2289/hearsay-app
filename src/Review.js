import React from 'react'
import STORE from './STORE'
import Nav from './Nav'
import Footer from './Footer'

export default function Review(props){
    return(
        <div>
            <Nav />
            <section>
            <p>Locality: {STORE[0].reviews[0].locality}</p>
            <p>Nature of Encounter: {STORE[0].reviews[0].nature}</p>
            <p>Rating: {STORE[0].reviews[0].rating}</p>
            <p>Date: April 17th, 2020 11:15 AM</p>
            <p>Comments: {STORE[0].reviews[0].comments}</p>
            <p>User: {STORE[0].reviews[0].user}</p>
            <p>How you think the situation could've been improved</p>
            </section>
            <Footer/>
        </div>
    )
}