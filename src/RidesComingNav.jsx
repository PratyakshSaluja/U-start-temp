import React from "react";
import UStart_logo from '/src/assets/U_Start_logo.png'
import { FaWhatsapp } from 'react-icons/fa';

import './RidesComingNav.css'


function Rides_Coming_Nav () {
    return(
        <div className="nav-bar">
            <div className="logo">
                <img src={UStart_logo} alt="" />
            </div>
            <div className="whatsapp-link">
                <a href="https://chat.whatsapp.com/GaUyo6vhz1KEJiPVexJgLq"><button> <FaWhatsapp size={20} color="green" /> <span>Join WhatsApp Group</span></button></a>
                <div className = "privacy-policy"> 
                <a href="/privacy-policy">Privacy policy</a>
            </div>
            </div>
            
        </div>
    )
}

export default Rides_Coming_Nav;