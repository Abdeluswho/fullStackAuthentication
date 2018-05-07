const User = require('../models/user');

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

       // respond with token
       res.json({ user: 'created' });
      
    },
    signIn: async (req, res, next) => {
        // generate token
        
    },
    secret: async (req, res, next) => {
       
     }
}