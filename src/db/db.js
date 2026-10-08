const mongoose = require("mongoose")

async function connectDB() {
   try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("Db is connected")
    
   } catch (error) {
    console.log(error);
    process.exit(1);
   } 
}

module.exports = connectDB