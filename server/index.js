const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv/config');

const app = express();
app.use(cors());

mongoose.connect(process.env.MONGODB_URL,{})
.then(() => console.log("Connected to database"))
.catch(e => console.log(e));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan('tiny'));

const usersRoutes = require('./routes/users');
const quizRoutes = require('./routes/quiz');
const authRoutes = require('./routes/auth');

app.use("/auth", authRoutes);
app.use("/quiz", quizRoutes);
app.use("/user", usersRoutes);

app.listen(4000,()=>{
    console.log("Server started at port 4000");
})