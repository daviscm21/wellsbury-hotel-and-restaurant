import React from "react";
import './home.css'

const Home = () => {

          return(
            <div className='home'>
              <div className='welcome'> 
                <h2>Welcome...</h2>
                <div className='text-and-image'>
                <p>Welcome to Wellsbury Hotel & Restaurant, with over 300 rooms furnished to designer standards, a restaurant offering a choice of exquisite dishes from around the world and a range of other facilities, we have everything needed to make the most of your stay in Wellsbury.</p>
                <img alt='hand opening hotel room door' src='https://cdn.pixabay.com/photo/2016/04/15/11/48/hotel-1330850__480.jpg'></img>
                </div>
              </div>
              <div className='facilities'>
                <h2>Our Facilities:</h2>
                <div className='text-and-image'>
                <ul>
                  <li>Gym</li>
                  <li>Indoor swimming pool and jacuzzi</li>
                  <li>Outdoor tennis court</li>
                  <li>Function rooms for business and social events</li>
                </ul>
                <img alt='function room' src='https://cdn.pixabay.com/photo/2016/07/05/19/59/christening-1499314__480.jpg'></img>
                </div>
              </div>
            </div>

        )
    }

export default Home ;