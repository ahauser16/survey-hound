const _ = require("lodash");
const { Path } = require("path-parser");
const { URL } = require("url");
const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

//sometimes mongoose doesn't like when you "require-in" too many of the same models so we use the code.
const Survey = mongoose.model("surveys");

module.exports = (app) => {
  app.get("/api/surveys/thanks", (req, res) => {
    res.send("Thanks for voting!");
  });

  app.post("/api/surveys/webhooks", (req, res) => {
    // the commented text below is pre-refactor with ES6 destructuring
    // const events = _.map(req.body, event => {
    const events = _.map(req.body, ({email, url }) => {
      // the commented text below is pre-refactor with ES6 destructuring
      // const pathname = new URL(event.url).pathname;
      const pathname = new URL(url).pathname;
      const p = new Path("/api/surveys/:surveyId/:choice");
      const match = p.test(pathname);
      if (match) {
        // the commented text below is pre-refactor with ES6 destructuring
        // return { email: event.email, surveyId: match.surveyId, choice: match.choice };
        return { email, surveyId: match.surveyId, choice: match.choice };
      }
    });

    const compactEvents = _.compact(events);
    const uniqueEvents = _.uniqBy(compactEvents, 'email', 'surveyId');

    console.log(uniqueEvents);

    res.send({});
  });

  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      //ES6 allows you to refactor 'title: title' to simply 'title'
      title: title,
      subject: subject,
      body: body,
      //because there is only one JS expression in the 'return' portion of the formula after the => we are able to shorten `{ return { email: email.trim() }}` to simply `{ email: email.trim() }`.  We need to wrap `{ email: email.trim() }` with parantheticals bcs JS is confused if try to define a function body or a shortened object.  n.b. `req.user.id` --> the id generated here is done by Mongo.
      recipients: recipients
        .split(",")
        .map((email) => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now(),
    });

    //great place to send an email - n.b. async-await interacting here, in Mailer.js and between each other.
    const mailer = new Mailer(survey, surveyTemplate(survey));

    try {
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
