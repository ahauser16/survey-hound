const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys.js");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  //calling the serializeUser function with the user generates an identifying piece of info from our MongoDB user entry.  THEN we pass that unique info into Passport which will stuff that same info into a cookie that will be sent back to the user.
  done(null, user.id);
});

//when the user decides they make a follow up request to our server the cookie will be automatically included in that request by the browser.

passport.deserializeUser((id, done) => {
  //calling the deserializeUser function causes Passport to take the cookie with the unique info and turns it back into the id associated with our MongoDB model.
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      //this query below returns a promise...
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          //then we already have a record with the given profile ID
          done(null, existingUser);
        } else {
          //we don't have a user record with this ID, make a new record

          //this creates an instance of a new user but this will not automatically be saved to the db.  it only exists within our express API.
          new User({ googleId: profile.id })
            // We need to call '.save()' to this instance...
            .save()
            //...and in this callback we get ANOTHER model instance.
            .then((user) => done(null, user));
        }
      });
    }
  )
);
