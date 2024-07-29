const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');

const mongoose = require('mongoose');
const User = require('./models/user');


passport.use(
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback',
        scope:["profile", "email"],
        },
        async (accessToken, refreshToken, profile, callback) =>{
            const existingUser = await User.findOne({ googleId: profile.id });
            if (existingUser) {
                console.log("User " + existingUser.googleId + " already exists");
                return callback(null, profile);
            }

            console.log("User regisetered");
            const newUser = await new User({ googleId: profile.id
                , name: profile.displayName
                , email: profile.emails[0].value
                , picture: profile.photos[0].value
             }).save();
            callback(null, profile);
        }
        
));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});