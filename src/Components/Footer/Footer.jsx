import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png'

const Footer = () => {
    return (
        <div className='footermain'>
            <div className='foottop'>
                <div className='foottopl'>
                    <div><img src={logo} alt="" id='logo1' /></div>
                    <p>But I must explain to you how all this mistaken  <br />idea of denouncing pleasure and</p>
                </div>
                <div className='foottopr'>
                    <div className='navtags'>
                        <p id='home'>Home</p>
                        <p id='about'>About Us</p>
                        <p id='services'>Services</p>
                        <p id='features'>Features</p>
                        <p id='blog'>Blog</p>
                        <p id='comm'>Community</p>
                    </div>
                </div>
            </div>
            <div className='footbot'>
                <div className='foot1'>
                    <h3 id='footh3'>Email :</h3>
                    <p id='footp'>support@triploin.com</p>
                    <p id='footp'>support@www.triploin.com</p>
                </div>
                <div className='foot1'>
                    <h3 id='footh3'>Phone :</h3>
                    <p id='footp'>+1 456-780-998</p>
                    <p id='footp'>+1 456-792-106</p>
                </div>
                <div className='foot1'>
                    <h3 id='footh3'>Address :</h3>
                    <p id='footp'>123 Fashion Avenue</p>
                    <p id='footp'>New York, NY 10001</p>
                    <p id='footp'>USA</p>
                </div>
                <div className='foot1'>
                    <h3 id='footh3'>Business Hours :</h3>
                    <p id='footp'>Monday - Friday: 9:00 AM - 6:00 PM (EST)</p>
                    <p id='footp'>Saturday: 10:00 AM - 4:00 PM (EST)</p>
                    <p id='footp'>Sunday: Closed</p>
                </div>
            </div>
            <div className='end'>
                <p>Copyrighted © 2024 UI UX By Sanstive.std</p>
            </div>
        </div>
    )
}

export default Footer