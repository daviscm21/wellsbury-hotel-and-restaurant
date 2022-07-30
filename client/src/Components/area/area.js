import React, { useState, useEffect } from "react";
import {getProducts} from '../../api/products'; 
import './area.css';
const parse = require('html-react-parser');

const Area = (props) => {
    const [products, setProducts] = useState(''); 

    useEffect(() => {
      setProducts(''); 
      props.setArea(window.location.pathname.slice(1)); 
  
    }, []); 

    useEffect(() => {
      setProducts(''); 
      props.setArea(window.location.pathname.slice(1)); 
  
    }, [window.location.pathname]); 
    
    useEffect(() => {
      if(props.area){
      getProducts(props.area).then(fetchedProducts => setProducts(fetchedProducts))
      }

   }, [props.area]) 

   function capitalizeFirstLetter(string) {
    const words = string.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}

const newString = words.join(" ");

return newString; 
  }
  

          return(
            <div className='area'>
              <h2 className='area-header'>{capitalizeFirstLetter(window.location.pathname.slice(1).replace('-', ' '))} Furniture</h2>
              <div className='products'>
              {products && products.map((product, index) => {return <div key={index} className={'product ' + 'product' + product.id}>
                   <img src={product.image} alt={product.name}></img>
                   <h2>{capitalizeFirstLetter(product.name)}</h2>
                   <p>£{product.cost}</p>
                   <div>{parse(String(product.paypal))} </div>           
               </div>})
               }
               </div>
            </div>

        )
    }

export default Area ;