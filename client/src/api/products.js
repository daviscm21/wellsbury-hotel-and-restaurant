import axios from 'axios'

axios.defaults.headers.common = {
  "Content-Type": "application/json"
}

const baseUrl = 'api'; 

export const getProducts = async (area) => {

     const request = axios.get(`${baseUrl}/${area}`)
     return request.then(response => response.data)

    }