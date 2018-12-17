const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const User = require("../models/user.model");

passport.use(new LocalStrategy({
    
    usernameField: 'user[email]',
    passwordField: 'user[password]'

}, (email, password, done) => {
    
    User.findOne({ email: email })
        .then((user) => {
            if(!user){
                return done(null, false, { errors: {
                    'email': 'is invalid'
                }});
            }

            if(!user.validatePassword(password)){
                return done(null, false, { errors: {
                    'password': 'is incorrect'
                }});
            }

            return done(null, user);

        }).catch(done);

}));