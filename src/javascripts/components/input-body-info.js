import React from 'react';

function height(unit) {
  let heightInput = (
    <div>
      <input type='text' id='height' /> centimeters
    </div>
  );

  if (unit === 'US') {
    heightInput = (
      <div>
        <input type='text' id='height' /> feet
        <input type='text' /> inches
      </div>
    );
  }

  return (
    <div>
      <label htmlFor='height'>Height: </label>
      {heightInput}
    </div>
  );
}

function weight(unit) {
  return (
    <div>
      <label htmlFor='weight'>Weight: </label>
      <input type='text' id='weight' /> {unit === 'US' ? 'pounds' : 'kilograms'}
    </div>
  );
}

const InputBodyInfo = (props) => {
  const age = (
    <label>
      Age: <input type='text' />
    </label>
  );

  const gender = (
    <div>
      <span>Gender: </span>
      <label>Male<input type='radio' name='gender' /></label>
      <label> Female<input type='radio' name='gender' /></label>
    </div>
  );

  return (
    <form>
      {age}
      {gender}
      {height(props.units)}
      {weight(props.units)}
    </form>
  );
};

export default InputBodyInfo;
