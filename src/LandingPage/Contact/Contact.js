import React, { Fragment , useState } from 'react'

import Slide from 'react-reveal/Slide';
import './Contact.css'

export default function Contact() {

  const [user,setUser]=useState({firstName:'',lastName:'',email:'',password:''});
  const{firstName,lastName,email,password}=user;

  const isValid=firstName && lastName && email && password !=null && firstName.trim() && lastName.trim() && email.trim() && password.trim().length>0

  const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(user);
    alert("Your login successfull");
    console.log(`${firstName} ${lastName}`);
    setUser({firstName:'',lastName:'',email:'',password:''})
  };
  
  return (
    <Fragment>
      <div id='Contact' className='container ms-auto'>
        
        <div className='row'>
          <div className='col-lg-6'>
          <Slide left>
            <h1>Contact Me</h1>
            <hr/>
            <p>If you create your website then you can contact me...I will give you the best priority..</p>
            <form action=''onSubmit={handleSubmit}>
               
              <input className='form-control mb-3' type="text" name="firstName"  placeholder='Enter Full Name' onChange={handleChange} value={firstName} />
              
              <input className='form-control mb-3' type="text" name="lastName" placeholder='Enter Last Name' onChange={handleChange} value={lastName} required/>

              <input className='form-control mb-3' type="email" name="email" placeholder='Enter Email' onChange={handleChange} value={email}/>
              <div>
              <input className='form-control mb-3' type="password" name="password" placeholder='Enter Password' onChange={handleChange} value={password}/>
              
              </div>
               
              <input type="radio" name='gender' onChange={handleChange} value='Male'/> Male 
              <input className='ms-3' type="radio" name='gender' onChange={handleChange} value='Female'/> Female

              <input className='ms-3' type="radio" name='gender' value='unknown'/> UnKnown

              <br/><br/>

              <button className='btn btn-outline-dark fw-bold' type="reset" value="Reset">Reset</button>
              <button disabled={!isValid} className='btn btn-outline-dark fw-bold ms-2' type="submit" value="Submit">Submit</button>
              
            </form>
            </Slide>
          </div>
          <div className='col-lg-6 mt-5'>
          <Slide right cascade>
            <img className='img-fluid photo' src='img/gggg.jpg' alt='my-photo'/>
            </Slide>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

