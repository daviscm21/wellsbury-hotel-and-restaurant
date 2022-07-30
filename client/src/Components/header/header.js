import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import './header.css'; 

const Header = () => {
  const [display, setDisplay] = useState(false);

  const changeDisplay = () => {
    if(display){setDisplay(false)}
    else if(!display){setDisplay(true)}
  }

          return(
              <div className='header'>
                <h1>Wellsbury Furniture Store</h1>
                <p>Please note that this is a project website using Paypal sandbox and therefore no actual transactions should occur.</p>
                <div className='navbar'>
                <button onClick={(e) => {changeDisplay()}}>Navbar</button>
                {display &&
                  <div className='NavLinks'>
                <div className='NavLinkDiv'>
               <NavLink to='/' className='NavLink'>Home</NavLink> 
              </div>
                <div className='NavLinkDiv'>
               <NavLink to='/bedroom' className='NavLink'>Bedroom</NavLink> 
              </div>
              <div className='NavLinkDiv'>
               <NavLink to='/living-room' className='NavLink'>Living Room</NavLink>
               </div>
              <div className='NavLinkDiv'>
               <NavLink to='/dining-room' className='NavLink'>Dining Room</NavLink>
               </div>
              <div className='NavLinkDiv'>
               <NavLink to='/office' className='NavLink'>Office</NavLink>
               </div>
              <div className='NavLinkDiv'>
               <NavLink to='/garden' className='NavLink'>Garden</NavLink>
               </div>
               </div>
               }
              </div> 
              </div>

        )
    }

export default Header ;