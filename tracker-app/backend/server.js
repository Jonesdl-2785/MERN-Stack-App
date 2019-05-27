// Dependencies
const express = require('express');
// const bodyParser = require('body-parser'); deprecated
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
// Express Server
const app = express();
const port = process.env.PORT || 5000;
// Middleware
app.use(cors());
// app.use(bodyParser.json());
app.use(express.json()); // REsplaced deprecated bodyParser
// Database Connect
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database successfully connected");
});

const workoutsRouter = require('./routes/workouts');
const usersRouter = require('./routes/users');

app.use('/workouts', workoutsRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
