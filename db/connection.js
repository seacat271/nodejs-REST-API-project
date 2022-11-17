const mongoose = require('mongoose');

const dbInitConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const connectMongo = async () => {
    await mongoose.connect(process.env.MONGO_URL, dbInitConfig)
    .then(
        () => console.log("Database connection successful"),
        (error) => {
            console.log("Database connection error", error)
            process.exit(1)
        }  
    )
}

module.exports = {
    connectMongo
}