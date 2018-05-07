const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const userSchema = new Schema ({
    email: String,
    password: String
})

// Create model
const User = mongoose.model('user', userSchema)

// Export model
module.exports = User;