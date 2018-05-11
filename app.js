const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

mongoose.connect('mongodb://localhost/fullAuthentication');

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

// app.use(passport.initialize());
// app.use(passport.session());

// Routes
app.use('/users', require('./routes/users'));
// Start the server
const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Server listening at ${port}`);
