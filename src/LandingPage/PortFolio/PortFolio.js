import React, { Fragment, useState } from 'react'

import './PortFolio.css'
import Slide from 'react-reveal/Slide';
import PortFolioJson from './Portfolio.json';

export default function PortFolio() {
  const [items,setItems]=useState(PortFolioJson);

  const filterItem=(categItem)=>{
    const updatedItems=PortFolioJson.filter((curyElem)=>{
      return curyElem.category===categItem
    })
    setItems (updatedItems)
  }
  return (
    <Fragment>
      <div id='Portfolio' className='container text-center'>
         <h1 className='text-center'>Portfolio</h1>
         <hr/>
        <div className='text-center container mt-5'>
          <button onClick={()=>setItems(PortFolioJson)} className='btn btn-outline-primary fw-bold'>All</button>
          <button onClick={()=>filterItem('Web-Design')} className='btn btn-outline-primary fw-bold'>Web-Design</button>
          <button onClick={()=>filterItem('Web-Devlopment')} className='btn btn-outline-primary fw-bold'>Web-Devolopment</button>
          <button onClick={()=>filterItem('Digital-Marketing')} className='btn btn-outline-primary fw-bold'>Digital-Marketing</button>
        </div>

        <div className='row'>
        {
         items.map((elo)=>{
           return <div className='col-lg-3 col-md-6 mb-4'>
            <Slide left>
            <div className='box'>
             <img className='img-fluid' src={elo.image}/>
             
            <div className='text'>
              <h4>{elo.category}</h4>
            </div>    
           </div>
           </Slide>
          </div>
         })
       }
        </div>
      </div>
      </Fragment> 
  )
}
