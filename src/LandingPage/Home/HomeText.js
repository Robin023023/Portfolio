import React, { Fragment } from 'react'

import Fade from 'react-reveal/Fade';
import Typed from 'react-typed';
import './HomeText.css'

export default function HomeText() {
  return (
    <Fragment>
      <Fade bottom cascade>
      <div className='row container m-auto'>
        <div className='col-md-7'>
            <h6>GET EVERY SINGLA SOLUTION</h6>
            {/* <h1>I'm Designer</h1> */}
            <h1>I'm <Typed
                    strings={["Web-Desiner","Front-End-Devolopar","Freelancer"]}
                    loop
                    typeSpeed={50}
                    backSpeed={30}
                />
            </h1>
            <h1>Robin Hossain</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br/> industry. Lorem Ipsum has been the industry's standard dummy text <br/> ever since the 1500s</p>
            <button className='btn btn-outline-primary fw-bolder me-3 me-md-1'>Learn More</button>
            <button className='btn btn-outline-dark fw-bolder me-3'>Higher Me</button>
            
         </div>
        <div className='col-md-5'>
            <img className='img-fluid' src='img/2.jpg' alt='my-photo'/>
        </div>
      </div>
      </Fade>
    </Fragment>
  )
}
