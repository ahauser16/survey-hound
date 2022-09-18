//FYI --> SurveyForm shows a form for a user to add input

import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";

class SurveyForm extends Component {
  renderFields() {
    return (
      <div>
        {/* 'name' below refers the prop that is returned when user input is submitted into the 'SurveyField' field.  remember that 'Field' requires a minimum of the three props: type, name and component.  Any custom props we want to pass on to the SurveyField component can be added as a prop to the Field component e.g. label="Survey Title" */}

        {/* It would be more efficient and elegant to create an array of fields instead of just copying and pasting these over and over. */}
        <Field
          labelRed="Survey Title"
          type="text"
          name="title"
          component={SurveyField}
        />
        <Field
          labelRed="Subject Line"
          type="text"
          name="subject"
          component={SurveyField}
        />
        <Field
          labelRed="Email Body"
          type="text"
          name="body"
          component={SurveyField}
        />
        <Field
          labelRed="Recipient List"
          type="text"
          name="emails"
          component={SurveyField}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit((values) => console.log(values))}
        >
          {this.renderFields()}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "surveyForm",
})(SurveyForm);
