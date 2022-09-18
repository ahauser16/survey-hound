//FYI --> SurveyForm shows a form for a user to add input
import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
  //if you wanted to write a custom error for each field you could use the syntax below.  Then in the for loop (bottom of page) [you can set the novalueerror value...]
  //   { label: "Survey Title", name: "title", noValueError: 'Provide a Survey Title' },
  { label: "Survey Title", name: "title" },
  { label: "Subject Line", name: "subject" },
  { label: "Email Body", name: "body" },
  { label: "Recipient List", name: "emails" },
];

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
      return (
        //react requires each array of components be given a unique key identifier.  Since each custom field will have a unique 'name' property then we can use each one as its associated unique key-->see below--> key={name}
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }
  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit((values) => console.log(values))}
        >
          {this.renderFields()}

          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>

          <button type="submit" className="teal btn-flat right white-text">
            Submit
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

//'values' represents all of the key/value pairs that are attached to the object returned when a user enters input into any given field on our form.  so in order to communicate to redux-form that these 'values' are valid or not-we have to return an object from the 'validate' function which we will call 'errors'.  the error handling works such that if the 'errors' object has any properties or key-value pairs then redux-form reads those values and assume that the form's values are somehow invalid and stop the submission process.  if the 'values' object has any invalid values then we will add that value to the 'error' object.

function validate(values) {
  const errors = {};

  errors.emails=validateEmails(values.emails || "");

  //[...you can set the novalueerror value as an argument.]
  // _.each(FIELDS, ({ name, noValueError }) => {
  // if (!values[name]) {
  //     errors[name] = noValueError;
  // }

  _.each(FIELDS, ({ name }) => {
    //we use bracket notation to refer to the value attached to the object being iterated over on the fly.
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });
//the errors object ONLY cares about properties with a value assigned to it; it doesn't care about values assigned to undefined.  If the email passes the validation it will return undefined.

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
})(SurveyForm);
