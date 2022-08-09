import React, { useState } from "react";
import RoomRadios from './RoomRadios/roomradios';
import RoomResult from "./RoomResult/roomresult";
import './rooms.css'

const Rooms = (props) => {

    const [room, setRoom] = useState(''); 

          return(
              <div className='rooms'> 
                <h3>Please select a room to book:</h3>
                <RoomRadios type={props.type} setType={props.setType} setRoom={setRoom} />
                <RoomResult room={room}/>

              </div>

        )
    }

export default Rooms ;