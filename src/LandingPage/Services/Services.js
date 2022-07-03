import React from 'react'

import Flip from 'react-reveal/Flip';
import './Services.css';

export default function Services() {
  return (
    <div id='Services' className='container m-auto'>
        <div className='row container'>
        <Flip left cascade>
        <h1 className='text-center'>Services</h1>
         <hr className='mb-5 m-auto'/>
            <div className='col-md-4'>
                
                <div className='card'>
                    <img className='img-fluid' src='img/10.jpg' alt='photo'/>
                    <div className='card-body'>
                        <h2 className='card-text'>Web-design</h2>
                        <hr/>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
                    </div>
                </div>
           
            </div>
            <div className='col-md-4 mt-5 mt-md-0'>
              
                <div className='card'>
                    <img className='img-fluid' src='img/10.jpg' alt='photo'/>
                    <div className='card-body'>
                        <h2 className='card-text'>Web-Devolopment</h2>
                        <hr/>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
                    </div>
                </div>
          
            </div>
            <div className='col-md-4 mt-5 mt-md-0'>
              
                <div className='card'>
                    <img className='img-fluid' src='img/10.jpg' alt='photo'/>
                    <div className='card-body'>
                        <h2 className='card-text'>Digital-Marketing</h2>
                        <hr/>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
                    </div>
                </div>
                
            </div>
            </Flip>
        </div>    
    </div>
  )
}
