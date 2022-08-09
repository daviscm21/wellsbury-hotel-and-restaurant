import axios from 'axios'

axios.defaults.headers.common = {
  "Content-Type": "application/json"
}

const baseUrl = 'bookings'; 

export const makeBooking = async (firstName, surname, roomType, dateFrom, nights) => {

  const request = axios.post(baseUrl, {firstName, surname, roomType, dateFrom, nights})
  
  return request.then(response => {
    console.log('this got sent back from the backend', response)
    return response.data
  })

}; 