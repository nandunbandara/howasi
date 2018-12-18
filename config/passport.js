const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const User = require("../models/user.model");

passport.use(new LocalStrategy(

    (email, password, done) => {
        User.find({email: email}, (err, user) => {

            if(err) return done(err);
            if(!user) return done(null, false);
            if(!user.validatePassword(password)) return done(null, false);

            return done(null, user);
        });
    }
    
));