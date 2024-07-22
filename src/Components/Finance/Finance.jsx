import React from 'react'
import './Finance.css'
import rect from '../Assets/rect.png'

const Finance = () => {
  return (
    <div className='finmain'>
        <h1 id='finh1'>The Latest in Finance and <br /> Investment</h1>
        <div className='finmid'>
            <div className='fin1'>
                <div className='finleft'>
                    <div><img src={rect} alt="" id='rect' /></div>
                </div>
                <div className='finright'>
                    <h2 id='finh2'>Insights for Financial Success</h2>
                    <p id='finp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore <br />doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et</p>
                    <h4 id='finh4'>Read More</h4>
                </div>
            </div>
            <div className='fin1'>
                <div className='finleft'>
                    <div><img src={rect} alt="" id='rect' /></div>
                </div>
                <div className='finright'>
                    <h2 id='finh2'>Insights for Financial Success</h2>
                    <p id='finp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore <br />doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et</p>
                    <h4 id='finh4'>Read More</h4>
                </div>
            </div>
            <div className='fin1'>
                <div className='finleft'>
                    <div><img src={rect} alt="" id='rect' /></div>
                </div>
                <div className='finright'>
                    <h2 id='finh2'>Insights for Financial Success</h2>
                    <p id='finp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore <br />doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et</p>
                    <h4 id='finh4'>Read More</h4>
                </div>
            </div>
        </div>
        <button id='readbtn'>Read Full News</button>
    </div>
  )
}

export default Finance