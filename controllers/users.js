const User = require('../models/user');

module.exports = {
    signUp: async (req, res, next) => {
        // email and password 
       console.log('SignUp bein called')
       const{ email, password } = req.value.body;
    // save it in the db
       const newUser = new User({ email, password })
       await newUser.save();

       res.json({ user: 'created' });
      
    },
    signIn: async (req, res, next) => {
        // generate token
        console.log('Signin bein called')
    },
    secret: async (req, res, next) => {
        console.log('secret bein called')
     }
}