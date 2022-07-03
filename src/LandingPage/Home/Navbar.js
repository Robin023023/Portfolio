import React, { Fragment,useState } from 'react'

import { FiAlignJustify } from 'react-icons/fi';
import './Navbar.css';

export default function Navbar() {
  const [position,setPosition]=useState(false);

  const changePosition=()=>{
    if(window.scrollY>=400){
      setPosition(true);
    }
    else{
      setPosition(false);
    }
  }

  window.addEventListener('scroll',changePosition)

  return (
    <Fragment>
      <div className={position?'Navbar Navbar2':'Navbar'}>
        <nav className='navbar navbar-expand-lg'>
           <div className="container">
             <a className="navbar-brand" href="#Home">Robin</a>
             <button className="navbar-toggler border" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               
               <FiAlignJustify/>
             </button>
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav ms-auto">
                 <li className="nav-item">
                   <a className="nav-link active" href="#Home">Home</a>
                 </li>
                 <li className="nav-item">
                   <a className="nav-link" href="#About">About</a>
                 </li>
                 
                 <li className="nav-item">
                   <a className="nav-link" href="#Services">Services</a>
                 </li>
                 <li className="nav-item">
                   <a className="nav-link" href="#Portfolio">Portfolio</a>
                 </li>
                 <li className="nav-item">
                   <a className="nav-link" href="#Contact">Contact Me</a>
                 </li>
               </ul> 
            </div>
           </div>
         </nav>
        </div>
    </Fragment>
  )
}
