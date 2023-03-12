import React, { useContext } from "react";
import { MultiStepContext } from "./Wrap";

const Step = ({ index, name }) => {
  const { currentIndex } = useContext(MultiStepContext);
  return <li className={`step ${currentIndex >= index ? "step-primary" : null}`}>{name}</li>;
};

export default Step;
