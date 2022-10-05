const mongoose=require('mongoose');
const dotenv=require("dotenv");

dotenv.config({path:'./config.env'})

const mongoURI=process.env.mongoUrl;

//mongodb://localhost:27017/inotebook

const connectToMongo= ()=>{
    mongoose.connect(mongoURI).then(()=>{
        console.log("Connected to Mongo Atlas Successfully");
    }).catch((err)=>console.log(err));
}

module.exports=connectToMongo;