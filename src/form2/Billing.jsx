import React from "react";
import InputField from "./InputField";

const Billing = () => {
  return (
    <div className="mb-4 flex flex-col justify-center space-y-4 text-center">
      <InputField resource={"bill_first_name"} resourceType={"text"} />
      <InputField resource={"bill_last_name"} resourceType={"text"} />
      <InputField resource={"bill_country"} resourceType={"text"} />
      <InputField resource={"bill_address"} resourceType={"text"} />
      <InputField resource={"bill_city"} resourceType={"text"} />
      <InputField resource={"bill_zip_code"} resourceType={"text"} />
    </div>
  );
};

export default Billing;
