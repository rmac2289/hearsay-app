import React from 'react'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import './NotFound.css'

export default function NotFound(){
    return (
        <>
        <Nav />
        <section className="notfound">
            <h4>Page not found! Navigate back or use the links above.</h4>
        </section>
        <Footer />
        </>
    )
}