import React from "react";

const NumberButton = props => {
  return (
    <button onClick={() => props.setValue(props.button)} className="number_button general_button">
      {props.button}
    </button>
  );
};

export default NumberButton;
