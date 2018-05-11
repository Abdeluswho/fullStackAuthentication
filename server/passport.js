const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const { JWT_SECRET } = require('./config');
const User = require('./models/user')

// JSON WEB TOKEN Strategy
passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: JWT_SECRET
}, async(payload, done)=> {
    try {
    // find the user from token 
        const user = await User.findById(payload.sub)
    // if user doesn't exist
        if (!user) {
            return done(error, false);
        }
    // return user
        done(null, user);
    } catch (error) {
        done(error, false);
    }
}))

// LOCAL Strategy
passport.use(new LocalStrategy({
    usernameField: 'email'
}, async (email, password, done)=> {

    try {
            // find the user given email
        const user = await User.findOne({ email })
        // if not handle it
        if (!user) {
            return done(null, false);
        }
        // check if pass is correct
    
        const isMatch = await user.isValidPassword (password);
    
        if (!isMatch) {
            return done(null, false);
        }
        // return the user
        done(null, user);
    } catch (error) {
       done(error, false); 
    }
   
}))