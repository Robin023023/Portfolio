import React, { Fragment } from 'react'

import './Home.css'
import HomeText from './HomeText';
import Navbar from './Navbar';

export default function Home() {
  return (
    <Fragment>
      <div id='Home'>
         <Navbar/>
         <HomeText/>
        </div>
    </Fragment>
  )
}
