import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Burger from '../Burger/Burger';
import './NotFound.css';

export default function NotFound(){
    return (
        <>
        <Burger />
        <Nav />
        <section className="notfound">
            <h4>Page not found! Navigate back or use the links above.</h4>
        </section>
        <Footer />
        </>
    );
};