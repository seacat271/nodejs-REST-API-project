const app = require('./app');
const { connectMongo } = require('./db/connection');
require("dotenv").config();
const PORT = process.env.PORT || 8081;

const start = async () => {
  try { 
    await connectMongo();
    app.listen(PORT, (error) => {
      if(error) console.error(`Error server launch:`, error)
      console.log(`Server running. Use our API on port: ${PORT}`)
    })
  } catch{error}
}
start();




