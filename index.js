const express = require('express')
var cors = require('cors')
const connectToMongo=require('./db');


connectToMongo();
const app = express();
const port = process.env.PORT || 5000;


app.use(cors())
app.use(express.json())

// app.get('/', (req, res) => {
//   res.send('Hello Deepak!')
// })

// Available Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

// hosting on heroku
if ( process.env.NODE_ENV == "production"){
  app.use(express.static("inotebook/build"));
}

app.listen(port, () => {
  console.log(`dailyNotes backend listening at http://localhost:${port}`)
})


