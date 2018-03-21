import React from 'react';

export const Math = (props) => {
  console.log('props', props);
  let value;
  //calculate the value using Props
  switch(props.operator) {
    case "+":
      value =
      props.num1 +
      Number
      (props.num2);
      break;

    case "-":
      value =
      props.num1 -
      Number
      (props.num2);
      break;

    case "*":
      value =
      props.num1 *
      Number
      (props.num2);
      break;

    case "/":
      default:
      value =
      props.num1 /
      Number
      (props.num2);

  }

  return <span className="value">{value}</span>;
}
