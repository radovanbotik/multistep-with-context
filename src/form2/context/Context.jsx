import React, { createContext, useContext, useState, useEffect } from "react";

const FormContext = createContext({});
const initialState = {
  bill_first_name: "",
  bill_last_name: "",
  bill_country: "",
  bill_address: "",
  bill_city: "",
  bill_zip_code: "",
  same_as_billing: true,
  ship_first_name: "",
  ship_last_name: "",
  ship_country: "",
  ship_address: "",
  ship_city: "",
  ship_zip_code: "",
  discount: "",
};
const Context = ({ children }) => {
  const [collectedData, setCollectedData] = useState(initialState);
  const [currentPage, setCurrentPage] = useState(0);
  const title = {
    0: "Billing Info",
    1: "Shipping Info",
    2: "Discount",
  };

  const { same_as_billing, discount, ...requiredFields } = collectedData;
  //check if every input is truthy(boolean) and if we reached an end of submission
  const canSubmit = [...Object.values(requiredFields)].every(Boolean) && currentPage === Object.keys(title).length - 1;

  useEffect(() => {
    if (collectedData.same_as_billing) {
      setCollectedData(prev => ({
        ...prev,
        ship_first_name: prev.bill_first_name,
        ship_last_name: prev.bill_last_name,
        ship_country: prev.bill_country,
        ship_address: prev.bill_address,
        ship_city: prev.bill_city,
        ship_zip_code: prev.bill_zip_code,
      }));
    } else {
      setCollectedData(prev => ({
        ...prev,
        ship_first_name: "",
        ship_last_name: "",
        ship_country: "",
        ship_address: "",
        ship_city: "",
        ship_zip_code: "",
      }));
    }
  }, [
    collectedData.bill_first_name,
    collectedData.bill_last_name,
    collectedData.bill_country,
    collectedData.bill_address,
    collectedData.bill_city,
    collectedData.bill_zip_code,
    collectedData.same_as_billing,
  ]);

  return (
    <FormContext.Provider value={{ collectedData, setCollectedData, title, currentPage, setCurrentPage }}>
      {children}
    </FormContext.Provider>
  );
};

export const useContextHook = () => {
  return useContext(FormContext);
};

export default Context;
