import React, { useState, useContext } from "react";
import { MultiStepContext } from "./Wrap";

const Form = ({ children }) => {
  const { proceedToNextStep } = useContext(MultiStepContext);
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={e => {
        e.preventDefault();
        proceedToNextStep();
      }}
    >
      {children}
    </form>
  );
};

export default Form;
