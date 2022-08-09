import axios from 'axios'

axios.defaults.headers.common = {
  "Content-Type": "application/json"
}

export const getRoom = async (type) => {

    const request = axios.get(`rooms?type=${type}`)
    return request.then(response => response.data)

   }

