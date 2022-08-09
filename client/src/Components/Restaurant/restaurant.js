import React, {useState} from "react";
import {getMeals} from '../../api/menu'; 
import './restaurant.css'; 

const Restaurant = () => {
  const [type, setType] = useState('all'); 
  const [region, setRegion] = useState('all');
  const [vegetarian, setVegetarian] = useState(false); 
  const [vegan, setVegan] = useState(false); 
  const [starters, setStarters] = useState('');
  const [mains, setMains] = useState(''); 
  const [desserts, setDesserts] = useState(''); 

const handleSubmit = async (e) => {
e.preventDefault(); 

setStarters('');
setMains(''); 
setDesserts(''); 

if(type === 'starter'){
  getMeals('starter', region, vegetarian, vegan).then(mealResults => {
    setStarters(mealResults); 
  })
}

if(type === 'main'){
  getMeals('main', region, vegetarian, vegan).then(mealResults => {
       setMains(mealResults); 
})
   
}

if(type === 'dessert'){
  getMeals('dessert', region, vegetarian, vegan).then(mealResults => {
    setDesserts(mealResults);     
  })
}

if(type === 'all'){

  getMeals('starter', region, vegetarian, vegan).then(mealResults => {setStarters(mealResults)})
  getMeals('main', region, vegetarian, vegan).then(mealResults => {setMains(mealResults)})
  getMeals('dessert', region, vegetarian, vegan).then(mealResults => {setDesserts(mealResults)})

}

}



          return(
              <div className='restaurant'> 
               <div className='restaurantSearchBar'>
                <h2>Restaurant</h2>
                <form onSubmit={handleSubmit}>
                  <label htmlFor='type'>Type:</label>
                  <select id='type' name='type' onChange={(e) => {setType(e.target.value)}}>
                    <option value='all'>All</option>
                    <option value='starter'>Starter</option>
                    <option value='main'>Main</option>
                    <option value='dessert'>Dessert</option>
                  </select>
                  <br></br>
                  <label htmlFor='region'>Region:</label>
                  <select id='region' name='region' onChange={(e) => {setRegion(e.target.value)}}>
                    <option value='all'>All</option>
                    <option value='chinese'>Chinese</option>
                    <option value='french'>French</option>
                    <option value='indian'>Indian</option>
                    <option value='italian'>Italian</option>
                    <option value='japanese'>Japanese</option>
                    <option value='mexican'>Mexican</option>
                    <option value='spanish'>Spanish</option>
                  </select> 
                  <br></br>
                  <label htmlFor='vegetarian'>Vegetarian</label>
                  <input type='checkbox' id='vegetarian' name='vegetarian' onChange={() => {setVegetarian(document.getElementById('vegetarian').checked)}}></input>
                  <label htmlFor='vegan'>Vegan</label>
                  <input type='checkbox' id='vegan' name='vegan' onChange={() => {setVegan(document.getElementById('vegan').checked)}}></input>
                  <br></br>
                  <input type='submit' value='Search'></input>
                </form>
                </div>
                <div className='meals'>
                <h3>Starters</h3>
                {
                  starters === '' ? <p>Please search our choice of starters.</p> : <p></p>
                }
                {                   
                 starters && starters.length === 0 ? <p>No starters found.</p> : <p></p>
                }

                {
                 starters &&  
                 starters.map((meal, index) => {return <div key={index} className='meal' > 
                 <img src={meal.image}></img>
                 <h4>{meal.name}</h4>
                 <p>{meal.description}</p> 
                 <p>Cost: £{meal.cost}</p>                
               </div>})
                }

                </div>
                <div className='meals'>
                <h3>Mains</h3>
                {
                  mains === '' ? <p>Please search our choice of mains.</p> : <p></p>
                }
                {
                  mains && mains.length === 0 ? <p>No mains found.</p> : <p></p>
                }

                {
                 mains &&  
                 mains.map((meal, index) => {return <div key={index} className='meal'>
                 <img src={meal.image}></img>
                 <h4>{meal.name}</h4>
                 <p>{meal.description}</p> 
                 <p>Cost: £{meal.cost}</p>                
               </div>})

                }
               
                </div>
                
                <div className='meals'>
                <h3>Desserts</h3>
                {
                  desserts === '' ? <p>Please search our choice of desserts.</p> : <p></p>
                }
                {
                  desserts && desserts.length === 0 ? <p>No desserts found.</p> : <p></p>
                }

                {
                 desserts &&  
                 desserts.map((meal, index) => {return <div key={index} className='meal'>
                 <img src={meal.image}></img>
                 <h4>{meal.name}</h4>
                 <p>{meal.description}</p> 
                 <p>Cost: £{meal.cost}</p>                
               </div>})
                }
                </div>
                
              </div>
        )
    }

export default Restaurant ;