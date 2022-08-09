import axios from 'axios'

axios.defaults.headers.common = {
  "Content-Type": "application/json"
}

export const getMeals = async (type, region, vegetarian, vegan) => {

     const request = axios.get(`menu?type=${type}&region=${region}&vegetarian=${vegetarian}&vegan=${vegan}`)
     return request.then(response => response.data)

    }