import React from 'react';

const SurveryField = props => {
  console.log(props);
  return (
    <div>
      <label>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default SurveryField;
