const passport = require("passport");

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  //this allows the cookie to be sent back to the user.
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
