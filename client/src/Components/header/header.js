import React from "react";
import { NavLink } from 'react-router-dom';
import './header.css'; 

const Header = () => {

          return(
              <div className='header'> 
                <h1>Wellsbury Hotel & Restaurant</h1>
                <nav>
                  <NavLink to='/' className='NavLink'>Home</NavLink>
                  <NavLink to='/hotel' className='NavLink'>Hotel</NavLink>
                  <NavLink to='/restaurant' className='NavLink'>Restaurant</NavLink>
                </nav>
              </div>

        )
    }

export default Header ;