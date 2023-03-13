import React from "react";
import Billing from "./Billing";
import Shipping from "./Shipping";
import Discount from "./Discount";
import { useContextHook } from "./context/Context";

export const display = {
  0: <Billing />,
  1: <Shipping />,
  2: <Discount />,
};
const Pages = () => {
  const { currentPage } = useContextHook();

  return <>{display[currentPage]}</>;
};

export default Pages;
