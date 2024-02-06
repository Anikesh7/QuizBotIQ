const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

require('dotenv').config();

const app = express()
app.use(cors())

// mongoose.connect(process.env.MONGODB_URL,{
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
// })
// .then(()=> console.log("Connected to database"))
// .catch(e => console.log(e))

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('tiny'));

const quizRouter = require('./routes/quizzes')

app.use('/quiz', quizRouter)

app.listen(5000, ()=>{
    console.log("Server started")
})
