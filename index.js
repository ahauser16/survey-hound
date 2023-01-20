const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./models/user");
require("./models/survey");
require("./services/passport");
//NB--> THE ORDER OF THE ABOVE REQUIRE STATEMENTS MATTERS
//the the wrong way to order the require statements is to require passport before user or survey.  the reason is that ideally we want to extract the user model but the Passport.js file is executed whenever the index.js file requires it in.
mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);

//INSERT MORE NOTES ON HOW THE PRODUCTION BUILD AND DEVELOPMENT BUILD WORKS...
if (process.env.NODE_ENV === 'production') {

  //Express will serve up production assets.
  //such as our main.js file, or main.css file!
  app.use(express.static('client/build'));

  //Express will serve up the index.html file
  //if it doesn't recognize the route.
  const path = require('path');
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
