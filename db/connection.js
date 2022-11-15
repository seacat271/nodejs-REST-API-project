const mongoose = require('mongoose');
const connectMongo = async () => {
console.log("Database connection successful")
   return mongoose.connect(
        process.env.MONGO_URL, {
useNewUrlParser: true,
useUnifiedTopology: true
        }
    )
}

module.exports = {
    connectMongo
}