import React, { useState, useEffect }  from "react";
import {getRoom} from '../../../../api/rooms';
import './roomradios.css'; 

const RoomRadios = (props) => {


    const useChange = (event) => {
        props.setType(event.target.value);
        
    }

    useEffect(() =>{if(props.type)
        {getRoom(props.type).then(roomResult => props.setRoom(roomResult))}
    });                    

          return(
              <div className='roomradios'> 
                <form >
                    <input type='radio' id='single-room' name='room' value='single-room' onChange={useChange}></input>
                    <label htmlFor='single-room'> Single Room</label>
                    <br></br>
                    <input type='radio' id='double-room' name='room' value='double-room' onChange={useChange}></input>
                    <label htmlFor='double-room'> Double Room</label>
                    <br></br>
                    <input type='radio' id='royal-suite' name='room' value='royal-suite' onChange={useChange}></input>
                    <label htmlFor='royal-suite'> Royal Suite</label>
                </form>
              </div>

        )
    }

export default RoomRadios ;