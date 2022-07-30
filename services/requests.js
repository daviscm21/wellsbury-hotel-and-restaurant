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

const getProducts = async (req, res) => {
const area = req.params.area; 
const query = 'SELECT * FROM products WHERE area = $1'

try{

    const products = await pool.query(query, [area]);  
    res.status(201).send({
      status: 'Success',
      data: products.rows,
      
    })



} catch(err) {
return res.status(500).send({
  error: err.message
});
}

}

module.exports = { getProducts }