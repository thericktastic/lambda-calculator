import React from "react";

const SpecialButton = props => {
  return (
    <button className="special_button general_button">
      {props.button}
    </button>
  );
};

export default SpecialButton;
