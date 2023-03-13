import React from "react";
import { useContextHook } from "./context/Context";

const Step = ({ title, index }) => {
  const { currentPage } = useContextHook();

  return <li className={`step ${currentPage >= index ? "step-primary" : null}`}>{title}</li>;
};

export default Step;
