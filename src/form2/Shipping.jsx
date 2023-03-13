import React from "react";
import InputField from "./InputField";
import Checkbox from "./Checkbox";
import { useContextHook } from "./context/Context";

const Shipping = () => {
  const {
    collectedData: { same_as_billing },
  } = useContextHook();

  const disabled = same_as_billing ? true : false;

  return (
    <form className="mb-4 flex flex-col justify-center space-y-4 text-center">
      <Checkbox action={"same as billing address"} resource={"same_as_billing"} />
      <InputField resource={"ship_first_name"} resourceType={"text"} disabled={disabled} />
      <InputField resource={"ship_last_name"} resourceType={"text"} disabled={disabled} />
      <InputField resource={"ship_country"} resourceType={"text"} disabled={disabled} />
      <InputField resource={"ship_address"} resourceType={"text"} disabled={disabled} />
      <InputField resource={"ship_city"} resourceType={"text"} disabled={disabled} />
      <InputField resource={"ship_zip_code"} resourceType={"text"} disabled={disabled} />
    </form>
  );
};

export default Shipping;
