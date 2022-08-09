import React, {useState} from "react";
import Rooms from './Rooms/rooms'
import Bookings from './Bookings/bookings'; 
import './hotel.css'

const Hotel = () => {
  const [type, setType] = useState('');

          return(
              <div className='hotel'> 
                <h2>Hotel</h2>
                <Rooms type={type} setType={setType}/>
                <Bookings type={type}/>
              </div>

        )
    }

export default Hotel ;