import React from 'react'
import './Team.css'
import box from '../Assets/box.png'

const Team = () => {
    return (
        <div className='teammain'>
            <div className='teamtop'>
                <div className='team1'>
                    <h3 id='teamh3'>The Team Behind the <br />Digital Revolution</h3>
                    <p id='teamp'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore </p>
                    <div className='intteam'>
                        <h4 id='teamh4'>20+</h4>
                        <p id='intp'>Countries with active users</p>
                    </div>
                    <div className='intteam'>
                        <h4 id='teamh4'>1000+</h4>
                        <p id='intp'>Worlwide Clients</p>
                    </div>
                    <div className='intteam'>
                        <h4 id='teamh4'>99.9%</h4>
                        <p id='intp'>Uptime Guaranteed</p>
                    </div>
                </div>
                <div className='team3'>
                    <p id='aboutp'>About Us</p>
                    <h1 id='abh1'>The Team Behind the <br /> Digital Revolution</h1>
                    <p id='abp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor <br /> incididunt ut labore et dolore doloremque laudantium, totam rem aperiam, <br />eaque ipsa quae ab illo inventore  </p>
                    <button className='explorebtn'>Explore Now</button>
                </div>
            </div>
            <div className='teambot'>
                <div className='tb1'>
                    <p id='aboutp'>About Us</p>
                    <h3 id='teamh3a'>The Team Behind the <br />Digital Revolution</h3>
                    <p id='tep'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor <br /> incididunt ut labore et dolore doloremque laudantium, totam rem aperiam, <br />eaque ipsa quae ab illo inventore  </p>
                    <div className='tbox'>
                        <h2 id='th2'>120K</h2>
                        <h4 id='th4'>Bringing Future Technology to Life</h4>
                    </div>
                </div>
                <div><img src={box} alt="" /></div>
                <div><img src={box} alt="" /></div>
            </div>
        </div>
    )
}

export default Team