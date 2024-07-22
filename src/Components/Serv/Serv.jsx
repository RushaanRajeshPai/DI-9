import React from 'react'
import './Serv.css'
import a from '../Assets/a.png'
import stars from '../Assets/stars.png'

const Serv = () => {
  return (
    <div className='servmain'>
      <h4 id='servh4'>Our Services</h4>
      <div className='serv1'>
        <h1>Delivering Future <br /> Digital Services</h1>
        <div className='serv1box'>
          <div className='serv1inner'>
            <h2>1000+</h2>
            <p>Satisfies Clients Worldwide</p>
          </div>
          <div className='serv1inner'>
            <h2>99.9%</h2>
            <p> Uptime Guaranteed </p>
          </div>
        </div>
      </div>
      <div className='serv2'>
        <div className='serv2box'>
          <h3>Dedicated to <br /> Innovation</h3>
          <p>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod Ut enim <br />ad minim veniam, quis nostrud </p>
          <h4>Get Started</h4>
        </div>
        <div className='serv2box'>
          <h3>Dedicated to <br /> Innovation</h3>
          <p>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod Ut enim <br />ad minim veniam, quis nostrud </p>
          <h4>Get Started</h4>
        </div>
        <div className='serv2box'>
          <h3>Dedicated to <br /> Innovation</h3>
          <p>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod Ut enim <br />ad minim veniam, quis nostrud </p>
          <h4>Get Started</h4>
        </div>
      </div>
      <div className='serv2'>
        <div className='serv2box'>
          <h3>Dedicated to <br /> Innovation</h3>
          <p>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod Ut enim <br />ad minim veniam, quis nostrud </p>
          <h4>Get Started</h4>
        </div>
        <div className='serv2box'>
          <h3>Dedicated to <br /> Innovation</h3>
          <p>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod Ut enim <br />ad minim veniam, quis nostrud </p>
          <h4>Get Started</h4>
        </div>
        <div className='serv2box'>
          <h3>Dedicated to <br /> Innovation</h3>
          <p>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod Ut enim <br />ad minim veniam, quis nostrud </p>
          <h4>Get Started</h4>
        </div>
      </div>
      <div className='future'>
        <h1>Bringing Future Together, Today</h1>
        <div className='futin'>
          <div className='fut1'>
            <h3 id='fh3'>20+</h3>
            <p>Countries With Active Users</p>
          </div>
          <div className='fut1'>
            <h3 id='fh3'>1000+</h3>
            <p>Satisfied Clients</p>
          </div>
          <div className='fut1'>
            <h3 id='fh3'>500+</h3>
            <p>New Features</p>
          </div>
          <div className='fut1'>
            <h3 id='fh3'>3x</h3>
            <p>Faster Transaction Speed</p>
          </div>
        </div>
      </div>
      <div className='testim'>
        <h4 id='servh4a'>Our Services</h4>
        <div className='textim2'>
          <div className='testiml'>
            <h1>Testimonial from <br /> our clients</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br /> eiusmod tempor incididunt ut labore et dolore doloremque <br /> laudantium, totam rem aperiam, eaque ipsa quae ab illo <br /> inventore </p>
            <button className='explorebtn'>Explore Now</button>
          </div>
          <div className='testimr'>
            <div><img src={a} alt="" id='a' /></div>
            <p>I absolutely love the dress I bought! The quality is amazing, <br />and it fits perfectly. I've received so many compliments <br />every time I wear it. Highly recommend this store!</p>
            <h3>SARAH L</h3>
            <div><img src={stars} alt="" id='stars' /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Serv