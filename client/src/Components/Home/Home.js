import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import './home.css';

const Home = (props) => {
    useEffect(() => {
        props.setArea(''); 
    
      }, []) 
                  

          return(
            <div className='home'>
                <div className='about'>
                <p>
                    At Wellsbury Furniture Store we pride ourselves on our high quality furniture at affordable prices. 
                    Browse our range of products on our website or come in to our store where one of our sales agents will be happy to help. 
                </p>
                </div>
                <div className='NavLinkDivs'>
                <div className='NavLinkDiv'>
               <NavLink to='/bedroom' className='NavLink'>
                <div className='NavLinkContent'>
                <img src='https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389254_1280.jpg' alt='bedroom'></img>
                <p>Bedroom</p>
                </div>
                </NavLink> 
              </div>
              <div className='NavLinkDiv'>
               <NavLink to='/living-room' className='NavLink'>
                <div className='NavLinkContent'>
                <img src='https://cdn.pixabay.com/photo/2017/01/07/17/48/interior-1961070_1280.jpg' alt='Living Room'></img>
                <p>Living Room</p>
                </div>
                </NavLink> 
              </div>
              <div className='NavLinkDiv'>
               <NavLink to='/dining-room' className='NavLink'>
                <div className='NavLinkContent'>
                <img src='https://cdn.pixabay.com/photo/2017/06/13/22/42/kitchen-2400367__340.jpg' alt='Dining Room'></img>
                <p>Dining Room</p>
                </div>
                </NavLink> 
              </div>
              <div className='NavLinkDiv'>
               <NavLink to='/office' className='NavLink'>
                <div className='NavLinkContent'>
                <img src='https://cdn.pixabay.com/photo/2014/04/26/00/41/office-332211_1280.jpg' alt='office'></img>
                <p>Office</p>
                </div>
                </NavLink> 
              </div>
              <div className='NavLinkDiv'>
               <NavLink to='/garden' className='NavLink'>
                <div className='NavLinkContent'>
                <img src='https://cdn.pixabay.com/photo/2017/06/27/07/48/armchair-2446560__480.jpg' alt='garden'></img>
                <p>Garden</p>
                </div>
                </NavLink> 
              </div>
              </div>
            </div>

        )
    }

export default Home ;