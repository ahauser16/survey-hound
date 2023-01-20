const passport = require("passport");

module.exports = (app) => {
  //this second argument to GoogleStrategy sends a request to Google's servers for the specified kind of access to the user profile which in our case is their profile and email address.
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  //at this point we have the user's user-granted-permission-code from the redirect URL: 'localhost:5000/auth/google/callback?code=abc123' and we then want to send a request that contains that code to Google's servers whose protocol is handled by GoogleStrategy.  Google servers receives the 'code' which tells Google servers that this is not the first time the user is trying to log in.  Then Google servers reply back with details about the user.  GoogleStrategy is doing the work for us here...
  app.get("/auth/google/callback", passport.authenticate("google"), (req, res) => {
    res.redirect('/surveys');
  });

  app.get("/api/logout", (req, res) => {
    //this kills the cookie
    req.logout();
    res.redirect('/');
  });

  //this is the entrypoint of our website when the user chooses to login for the first time or has been logged in and at the landing page
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
