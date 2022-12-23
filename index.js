const express = require('express')
var cors = require('cors')
const dotenv = require("dotenv");
const connectToMongo = require('./db');



dotenv.config()

connectToMongo();
const app = express();
const port = process.env.PORT || 5000;


app.use(cors())
app.use(express.json())

// app.get('/', (req, res) => {
//   res.send('Hello Deepak!')
// })


// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.get('/', (res, req) => {
  req.send("Welcome to my app")

})

// hosting on heroku


app.listen(port, () => {
  console.log(`dailyNotes backend listening at http://localhost:${port}`)
})


