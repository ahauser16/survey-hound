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
  
  // I. returns a list of surveys created by the current_user
  app.get("/api/surveys", requireLogin, async (req, res) => {
    const surveys = await Survey.find({ _user: req.user.id }).select({
      recipients: false,
    });

    res.send(surveys);
  });

  app.get("/api/surveys/:surveyId/:choice", (req, res) => {
    res.send("Thanks for voting!");
  });



// II - record feedback from a user
  app.post("/api/surveys/webhooks", (req, res) => {
    const p = new Path("/api/surveys/:surveyId/:choice");

    _.chain(req.body)
      .map(({ email, url }) => {
        const match = p.test(new URL(url).pathname);
        if (match) {
          return { email, surveyId: match.surveyId, choice: match.choice };
        }
      })
      .compact()
      .uniqBy("email", "surveyId")
      .each(({ surveyId, email, choice }) => {
        Survey.updateOne(
          //MongoDB requires you to use the _id syntax when sending data to your DB.
          //Also, this is an asynchronous query but we're not using async/await syntax because, prior to this mongo query, sendgrid sent us data but sendgrid doesn't care if we send any response back to them--and we won't so that means we don't need to send back a response.
          {
            _id: surveyId,
            recipients: {
              $elemMatch: { email: email, responded: false },
            },
          },
          {
            $inc: { [choice]: 1 },
            $set: { "recipients.$.responded": true },
            lastResponded: new Date(),
          }
        ).exec();
      })
      .value();

    res.send({});
  });



// III - create a new survey
  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

//REFACTOR INSTRUCTIONS!!! you could add 'questions' to the list above.

    const survey = new Survey({
      //ES6 allows you to refactor 'title: title' to simply 'title'
      title: title,
      subject: subject,
      body: body,
      //because there is only one JS expression in the 'return' portion of the formula after the => we are able to shorten `{ return { email: email.trim() }}` to simply `{ email: email.trim() }`.  We need to wrap `{ email: email.trim() }` with parantheticals bcs JS is confused if try to define a function body or a shortened object.  n.b. `req.user.id` --> the id generated here is done by Mongo.
      recipients: recipients
        .split(",")
        .map((email) => ({ email: email.trim() })),

// REFACTOR INSTRUCTIONS: THIS IS WHERE THE SURVEY IS CREATED SO SOMEHOW I NEED TO ADD CODE HERE THAT GENERATES THE QUESTIONS THAT THE USER DECIDED TO INCLUDE IN THE SURVEY.

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
