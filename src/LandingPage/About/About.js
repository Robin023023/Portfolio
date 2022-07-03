import React, { Fragment } from 'react'

import { Progress } from 'react-sweet-progress';
import Slide from 'react-reveal/Slide';
import "react-sweet-progress/lib/style.css";
import './About.css'

export default function About() {
  return (
    <Fragment>
      <div id='About' className='container m-auto'>
         <div className='row container ms-auto'>
          <div className='col-md-6'>
            <Slide left>
             <img className='img-fluid rounded-circle pt-5 d-none d-md-inline' src='img/1.jpg'/>
             </Slide>
          </div>
          <div className='col-md-6 Text'>
          <Slide right>
            <h1>About Me</h1>
            <hr/>
            
            <p>Hello!! I am Robin from Bangladesh.I am a Student with a Masters's Degree. Besides I am Web-designer. I have good knowledge of web design. I Know Html, CSS, Bootstrap5, Jquery, and React. I can convert PSD to react-component, Figma to react-component.</p>
            
             <div className='pt-3'>
             <h4>HTML</h4>
            <Progress type="bar" percent={80}/>
            <h4>CSS</h4>
            <Progress type="bar" percent={90}/>
            <h4>BOOTSTRAP</h4>
            <Progress type="bar" percent={90}/>
            <h4>Jquery</h4>
            <Progress type="bar" percent={50}/>
            <h4>React</h4>
            <Progress type="bar" percent={60}/>
            </div> *
            </Slide>
          </div>
         </div>
      </div>
    </Fragment>
  )
}
