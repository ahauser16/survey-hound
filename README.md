# Website notes necessary for startup

## Introduction

Initial Reason for these notes. I am migrating this app from Heroku to Railway. The instructions on Udemy course were detailed but I am still getting errors. I am revisiting the Google OAuth parts of the course. These include all of Section 3: videos 20 through 33, Section 4: videos 34 - 53, Section 5: videos 54 through 62,
(NB-->review the basics of Redux Thunk: video 91.)

===The "passport" and "passport-google-oauth20" npm packages are the correct ones.

===the server port is process.env.PORT || 5000.

Question: Which videos cover the Google+ OAuth api steps?
Answer: lesson 25 has best setup overview with the new UI.

phase one of our authentication is complete by lecture 32. Referring to the diagram everything in the yellow PassportJS box is phase one.

phase two deals with creating an account in our database and taking user data and implementing the 'business logic' within our app.

===lesson 51 goes over what to add and where to add it if you want to incorporate another strategy from passport.

===lesson 56&57 production tutorial for creating production DB and production Google+ credentials.

---

MONGODB related...the emaily-dev and emaily-prod deployments MAY BE PAUSED DUE TO INACTIVITY. SO...as a housekeeping item you should keep tabs on these accounts...btw you authenticate through Google+

---

Emaily-production client id and secret
Client ID-->586775967591-4nd0qgcf8vrkl6hr55r1ns90uu5srl9f.apps.googleusercontent.com
Secret-->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

---

emaily-dev client id and secret
client id-->176363345205-msndp31kb30pveis27eqn31s96v1vjfu.apps.googleusercontent.com
secret-->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

---

Question: how are the two Google accounts: emaily-production and emaily-dev used? Do both client ids and secrets matter or only one or the other?
Answer: ???

===if we're deploying production then we're using env variables and if we're deploying development then we're using config/dev.js<-- that will contain our sensitive keys info which we do not want to commit to github.

FollowupQuestion: which localhost:3000, localhost:5000, etc. get added to the redirect lists for (i) development and (ii) production servers...

Question: Do the PassportJS related files need to be changed?
Answer: the PassportJS code can be broken down into two parts. The first is the general passport module that contains general helpers for handling oauth in express apps. The second is the OAuth provider strategy module that contains helpers for authenticating with email/password, Spotify, Facebook, etc or Google in our case.

Question: Do the dev.js, keys.js and prod.js need to be changed?

Question: What about the scripts section in package.json, do those files need to be changed?

Question: How does the Railway CLI work? Does that need to be changed?

I. When dploying website in development make sure to...

Step One-->

Step Two-->

Step Three-->

II. When deploying website in production make sure to...

Step One-->

Step Two-->

Step Three-->

FAULTY URL BUG FIX-->

