const { Pool } = require('pg'); // import node-postgres
require('dotenv').config(); 

if(process.env.DATABASE_URL)
{var pool = new Pool({ // create connection to database
  connectionString: process.env.DATABASE_URL,	// use DATABASE_URL environment variable from Heroku app 
  ssl: {
    rejectUnauthorized: false // don't check for SSL cert
  }
})
}
else {
var pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
} 

let bookingIdCounter = 1; 

exports.bookRoom = async (req, res) => {
    const {firstName, surname, dateFrom, nights, roomType } = req.body; 
    const query = 'INSERT INTO bookings (id, first_name, surname, date_from, nights, room_type) VALUES ($1, $2, $3, $4, $5, $6)'; 

  try{

    let id = bookingIdCounter++;  
    
    const newBooking = await pool.query(query, [id, firstName, surname, dateFrom, nights, roomType]);

    res.status(201).send({
      status: 'Success',
      message: 'New booking made.'
    })
  } catch(err) {

    return res.status(500).send({
      error: err.message
    });
  }
}

exports.getMeal = async (req, res) => {
  const type = req.query.type;
  const region = req.query.region; 
  const vegetarian = req.query.vegetarian; 
  const vegan = req.query.vegan;   

  const query = 'SELECT * FROM menu WHERE '; 
  const typeString = 'type = $1';
  const regionString1 = 'region = $1';
  const regionString2 = 'region = $2';
  const vegetarianString = 'vegetarian = true'; 
  const veganString = 'vegan = true'; 
  let queryString = ''; 


  try{
    if (type === 'all' && region === 'all' && vegetarian  === 'false' && vegan === 'false'){
      queryString = 'SELECT * FROM menu';
    }

    if(type !== 'all'){
       queryString = query + typeString; 
    }

    if(type !== 'all' && region !== 'all'){
       queryString = queryString + ' AND ' + regionString2; 
    }
    else if(type === 'all' && region !== 'all'){
        queryString = query + regionString1; 
    }

    if((type !== 'all' || region !== 'all') && vegetarian === 'true'){
      queryString = queryString + ' AND ' + vegetarianString; 
    }
    else if(type === 'all' && region === 'all' && vegetarian === 'true'){
      queryString = query + vegetarianString; 
    }

    if((type !== 'all' || region !== 'all') && vegan === 'true'){
      queryString = queryString + ' AND ' + veganString; 
    }
    else if(type === 'all' && region === 'all' && vegan === 'true'){
      queryString = query + veganString; 
    }

   if(type === 'all' && region === 'all'){
    const meals = await pool.query(queryString);  
    res.status(201).send(meals.rows)
   }
   else if(type !== 'all' && region === 'all'){
    const meals = await pool.query(queryString, [type]);  
    res.status(201).send(meals.rows)
   }
   else if(type === 'all' && region !== 'all'){
    const meals = await pool.query(queryString, [region]);  
    res.status(201).send(meals.rows)
   }
   else if(type !== 'all' && region !== 'all'){
    const meals = await pool.query(queryString, [type, region]);  
    res.status(201).send(meals.rows)
   }

} catch(err) {
  return res.status(500).send({
    error: err.message
  });
}
}

exports.getRoom = async (req, res) => {
  const type = req.query.type;  

  const query = 'SELECT * FROM rooms WHERE type = $1'; 

  try{
    

      const room = await pool.query(query, [type]); 
      res.status(201).send(room.rows);

  


} catch(err) {
  return res.status(500).send({
    error: err.message
  });
}
}