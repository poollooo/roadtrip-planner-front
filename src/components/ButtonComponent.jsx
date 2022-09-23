import React from "react";

const ButtonComponent = ({ width, text, scheduleValidation }) => {
  const handleClick = () => {
    scheduleValidation();
  };
  return (
    <button
      className={`bg-green-pine ${width} rounded-lg p-2 text-white border-2 border-green-pine hover:bg-white hover:text-green-pine`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
