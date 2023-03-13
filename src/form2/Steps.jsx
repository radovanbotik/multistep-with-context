import React from "react";
import { useContextHook } from "./context/Context";
import Step from "./Step";

const Steps = () => {
  const { title } = useContextHook();
  const steps = Object.keys(title).map(t => ({ [t]: title[t] }));
  return (
    <ul className="steps mb-10 w-96">
      {steps.map(title => {
        return <Step key={Object.keys(title)} title={Object.values(title)} index={Object.keys(title)} />;
      })}
    </ul>
  );
};

export default Steps;
