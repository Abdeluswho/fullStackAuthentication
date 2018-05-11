const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema;

// Create Schema
const userSchema = new Schema ({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.pre('save', async function (next) {
    try {
        // Generate a salt
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(this.password, salt)
        this.password = passwordHash;
        next();
    } catch (error) {
        next(error)
    }
})

// Create model
const User = mongoose.model('user', userSchema)

// Export model
module.exports = User;