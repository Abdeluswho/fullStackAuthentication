const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

mongoose.connect('mongodb://localhost/fullAuthentication');

const app = express();

// Middlewares
if (!process.env.Node_ENV == 'test') {
    app.use(morgan('dev'));
}

app.use(bodyParser.json());

// app.use(passport.initialize());
// app.use(passport.session());

// Routes
app.use('/users', require('./routes/users'));

module.exports = app;

