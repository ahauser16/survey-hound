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
      proxy: true,
    },
    // accessToken => {
    //   console.log(assToken);
    // }

    //this second argument to GoogleStrategy has been refactored into authRoutes.js which essentially sends a request to Google's servers for the specified kind of access to the user profile which in our case is access to their profile and email address.  Now at this point we have the user's information provided to us by GoogleStrategy: user's profile and access token.  This second argument below is the entry point to take user info and save it to our database. Also, as a fyi, if we wanted to modify the user's account in some fashion we would need the user's accessToken.  Also, as a fyi, once we have the refreshToken would allow us to refresh the accessToken.

    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }
      
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
