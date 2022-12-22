const mongoose=require('mongoose');
const dotenv=require("dotenv");

dotenv.config({path:'./config.env'})

// const mongoURI=process.env.mongoUrl;
const newURI = 'mongodb+srv://deepak:deepak@cluster0.eucjtxg.mongodb.net/dailyNotes?retryWrites=true&w=majority'
// console.log(mongoURI,process.env)

//mongodb://localhost:27017/inotebook


const connectToMongo= ()=>{
    mongoose.connect(newURI).then(()=>{
        console.log("Connected to Mongo Atlas Successfully");
    }).catch((err)=>console.log("Deepak your MongoDB is showing an error  "+err));
}

module.exports=connectToMongo;


// new= /mongodb+srv://deepak:deepak@cluster0.eucjtxg.mongodb.net/dailyNotes?retryWrites=true&w=majority 

// old=/mongodb+srv://book:book@book.ilssjda.mongodb.net/book?retryWrites=true&w=majority 