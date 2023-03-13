import React from "react";
import InputField from "./InputField";

const Discount = () => {
  return (
    <div className="mb-4 flex flex-col justify-center space-y-4 text-center">
      <InputField resource={"discount"} resourceType={"text"} />
    </div>
  );
};

export default Discount;
