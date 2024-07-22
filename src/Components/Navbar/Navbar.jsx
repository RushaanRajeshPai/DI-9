import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import icons from '../Assets/icons.png'

const Navbar = () => {
  return (
    <div className='navmain'>
      <div className='navtop'>
        <div><img src={logo} alt="" /></div>
        <div><img src={icons} alt="" id='icons' /></div>
      </div>
      <div className='navbot'>
        <div className='navtags'>
          <p id='home'>Home</p>
          <p id='about'>About Us</p>
          <p id='services'>Services</p>
          <p id='features'>Features</p>
          <p id='blog'>Blog</p>
          <p id='comm'>Community</p>
        </div>
        <button id='navbtn'><strong>Get Started</strong></button>
      </div>
    </div>
  )
}

export default Navbar