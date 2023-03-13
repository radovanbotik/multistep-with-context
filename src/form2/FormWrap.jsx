import React from "react";
import Form from "./Form";
import Context from "./context/Context";
const FormWrap = () => {
  return (
    <Context>
      <Form />
    </Context>
  );
};

export default FormWrap;
