//FYI --> SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from "react";
import { reduxForm } from "redux-form";
import SurveyForm from "../surveys/SurveyForm";
import SurveyFormReview from "../surveys/SurveyFormReview";

class SurveyNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <SurveyFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }
    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

//adding 'form: "surveyForm"' as an option to the export of reduxForm allows our user to clear all the saved input fields when they click the cancel button.
export default reduxForm({
  form: "surveyForm",
})(SurveyNew);
