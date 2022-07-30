import { API_ENDPOINT } from ".";

export const getProducts = async (area) => {

     const res = await fetch(`${API_ENDPOINT}/api/${area}`)
     const products = await res.json(); 
     return products.data;

    }