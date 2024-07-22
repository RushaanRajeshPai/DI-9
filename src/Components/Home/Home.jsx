import React from 'react'
import './Home.css'
import text from '../Assets/text.png'
import hlogos from '../Assets/hlogos.png'

const Home = () => {
    return (
        <div className='homemain'>
            <div><img src={text} alt="" id='text' /></div>
            <h1 id='homeh1'>Welcome to the New <br /> Era of the Internet</h1>
            <div className='homebot'>
                <div className='home1'>
                    <h2 id='homeh2'>300+</h2>
                    <p id='homep'>Partnered Companies</p>
                </div>
                <div className='home1'>
                    <h2 id='homeh2'>5 Million+</h2>
                    <p id='homep'>Transactions Secured</p>
                </div>
                <div className='home1'>
                    <h2 id='homeh2'>24/7</h2>
                    <p id='homep'>Support Available </p>
                </div>
            </div>
            <div className='homelogos'>
                <div><img src={hlogos} alt="" /></div>
            </div>
        </div>
    )
}

export default Home