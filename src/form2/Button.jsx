import React from "react";

const Button = ({ type, action, onClick, disabled, order }) => {
  return (
    <button
      className={`btn btn-primary flex-1 ${order}`}
      type={`${type ? type : "button"}`}
      onClick={onClick}
      disabled={disabled}
    >
      {action}
    </button>
  );
};

export default Button;
