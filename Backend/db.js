const mongoose = require('mongoose');
const dotenv =require("dotenv");

dotenv.config();

const MongoDB = async () => {
  await mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>console.log("DB connected")).catch((err)=>console.log(err)); 
}

module.exports = MongoDB();
