const mongoose=require('mongoose');


console.log("hello world how are you")
const mongoURI=process.env.mongoUrl;
console.log(mongoURI,process.env)
// const newURI = 'mongodb+srv://deepak:deepak@cluster0.eucjtxg.mongodb.net/dailyNotes?retryWrites=true&w=majority'
// console.log(mongoURI,process.env)

//mongodb://localhost:27017/inotebook

mongoose.set("strictQuery", false);
const connectToMongo= ()=>{
    mongoose.connect(mongoURI).then(()=>{
        console.log("Connected to Mongo Atlas Successfully");
    }).catch((err)=>console.log("Deepak your MongoDB is showing an error  "+err));
}



module.exports=connectToMongo;


// new= /mongodb+srv://deepak:deepak@cluster0.eucjtxg.mongodb.net/dailyNotes?retryWrites=true&w=majority 

// old=/mongodb+srv://book:book@book.ilssjda.mongodb.net/book?retryWrites=true&w=majority 