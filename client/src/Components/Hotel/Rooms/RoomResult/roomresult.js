import React  from "react";
import './roomresult.css'; 

const RoomResult = (props) => {

          return(
              <div > 
                 {props.room && 
                 <div className='roomresult'>
                   <img src={props.room[0].image} alt={props.room[0].type}></img>
                   <h4>Cost: £{props.room[0].cost} p/n</h4>
                   <p>Amenities: {props.room[0].amenities}</p>
                 </div>
                 }
              </div>

        )
    }

export default RoomResult;