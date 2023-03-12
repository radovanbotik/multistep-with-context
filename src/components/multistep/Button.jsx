import React from "react";

const Button = ({ action, type }) => {
  return (
    <button className="btn-primary btn" type={`${type ? type : "button"}`}>
      {action}
    </button>
  );
};

export default Button;
