// SurveyField contains logic to render a single label and text input
// By adding a label it shows the user what kind of input should be entered into the respective field e.g. first name, last name, address, etc.

import React from "react";
//we can use ES6 destructuring with input and label and then a second layer of destructuring with meta: {error, touched}.

const SurveyField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px' }}/>
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};

export default SurveyField;
