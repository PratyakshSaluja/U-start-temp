// RidesComingSoon.js
import React, { useState } from 'react';
import './RidesComingSoon.css'
import UStart_logo from '/src/assets/UStart_logo.jpeg'

// import Nav from './Nav'

function RidesComingSoon() {
  return (
    <>
      <div className='rides-coming-soon-container'>

        <div className='image-logo'>
          <img src={UStart_logo} alt="" />
        </div>
        <h1>Rides Coming Soon</h1>
        <p><em>For any queries, contact us at <a href="mailto:contact@ustart.in">contact@ustart.in</a></em></p>
      </div>
    </>
  )
}

export default RidesComingSoon;
