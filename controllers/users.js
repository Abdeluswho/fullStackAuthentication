const JWT = require('jsonwebtoken');
const User = require('../models/user');
const { JWT_SECRET } = require('../config');

signToken = user => {
    return JWT.sign({ 
        iss: 'sofcode', 
        sub: user.id,
        iat: new Date().getTime(), // current time
        exp: new Date().setDate(new Date().getDate() +1) // one day ahead
    }, JWT_SECRET);
}

module.exports = {
    signUp: async (req, res, next) => {
    // email and password 
       const{ email, password } = req.value.body;

    // check if user exist
      const foundUser = await User.findOne({ email })
      if (foundUser) {
          return res.status(403).send({ error: "Email is already in use" })
      }

    // save it in the db
       const newUser = new User({ email, password })
       await newUser.save();

    // generate token
    const token = signToken(newUser);
    // respond with token
    res.status(200).json({ token });
      
    },
    signIn: async (req, res, next) => {
        // generate token
        
    },
    secret: async (req, res, next) => {
       
     }
}