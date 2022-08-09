import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {makeBooking} from '../../../api/bookings'; 
import './bookings.css'; 

const Bookings = (props) => {
  const [firstname, setFirstname] = useState(''); 
  const [surname, setSurname] = useState(''); 
  const [from, setFrom] = useState(''); 
  const [nights, setNights] = useState(''); 
  const [redirect, setRedirect] = useState(null); 

  const navigate = useNavigate(); 

  const onAddNewBooking = (e) => {
    e.preventDefault();  
    
    makeBooking(firstname, surname, props.type, from, nights);

    setRedirect('/booked');

    }

useEffect(() => {if(redirect)
 navigate(redirect); 
}); 

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(dd<10){
      dd='0'+dd
    } 
    if(mm<10){
      mm='0'+mm
    } 
    
    today = yyyy+'-'+mm+'-'+dd;
    let todayPlusYear = (Number(yyyy)+1)+'-'+mm+'-'+dd;


          return(

              <div className='bookingsdiv' > 
                {props.type &&          
                <form className='bookings' onSubmit={onAddNewBooking}>
                  <h3>Book:</h3>
                  <label htmlFor='firstname'>First Name:</label>
                  <input type='text' id='firstname' name='firstname' required onChange={(e) => {setFirstname(e.target.value);}}></input>
                  <br></br>
                  <label htmlFor='surname'>Surname:</label>
                  <input type='text' id='surname' name='surname' required onChange={(e) => {setSurname(e.target.value);}}></input>  
                  <br></br>
                  <h4>Dates:</h4>
                  <label htmlFor='from'>From:</label>            
                  <input type='date' id='from' name='from' min={today} max={todayPlusYear} required onChange={(e) => {setFrom(e.target.value);}}></input>
                  <br></br>
                  <label htmlFor='nights'>Number of Nights:</label>
                  <input type='number' id='nights' name='nights' min='1' max='30' required onChange={(e) => {setNights(e.target.value);}}></input>
                  <br></br>
                  <input type='submit' value='Book'></input>
                </form>}
              </div>
                  
        )

    }

export default Bookings ;