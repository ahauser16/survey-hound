//change to `const sgMail = require('@sendgrid/mail');
const sendgrid = require("sendgrid");


const helper = sendgrid.mail;


//this doesn't change
const keys = require("../config/keys");

class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content) {
    super();

    this.sgApi = sendgrid(keys.sendGridKey);
    this.from_email = new helper.Email("arthur.hauser@gmail.com");
    this.subject = subject;
    this.body = new helper.Content("text/html", content);
    this.recipients = this.formatAddresses(recipients);

    this.addContent(this.body);
    this.addClickTracking();
    this.addRecipients();
  }

  formatAddresses(recipients) {
    //below is an example of ES6 destructuring.  within the `recipients` array each `recipient` object has a property called `email`.  since we only care about the `email` property we use ES6 destructuring by surrounding `email` with `({  })`
    return recipients.map(({ email }) => {
      return new helper.Email(email);
    });
  }

  addClickTracking(){
      const trackingSettings = new helper.TrackingSettings();
      const clickTracking = new helper.ClickTracking(true, true);

      trackingSettings.setClickTracking(clickTracking);
      this.addTrackingSettings(trackingSettings);
  }


  addRecipients(){
      const personalize = new helper.Personalization();
      this.recipients.forEach(recipient => {
          personalize.addTo(recipient);
      });
      this.addPersonalization(personalize);
  }

  async send() {
    const request = this.sgApi.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: this.toJSON()
    });

    const response = await this.sgApi.API(request);
    return response;
  }

}

module.exports = Mailer;
