const express = require('express')
var cors = require('cors')
const connectToMongo=require('./db');


connectToMongo();
const app = express()
const port = process.env.PORT || 5000;


// console.log(process.env.test)


app.use(cors())
app.use(express.json())

// app.get('/', (req, res) => {
//   res.send('Hello Deepak!')
// })

// Available Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))



app.listen(port, () => {
  console.log(`dailyNotes backend listening at http://localhost:${port}`)
})


