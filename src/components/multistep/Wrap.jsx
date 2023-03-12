import React, { useState, useEffect, createContext } from "react";
import PartContainer from "./PartContainer";
import Steps from "./Steps";
import Step from "./Step";
import Part from "./Part";
import Form from "./Form";
import InputField from "./InputField";
import Button from "./Button";

const MultiStep = [
  { id: 1, name: "register", fields: ["username", "email", "password", "password confirmation"] },
  {
    id: 2,
    name: "confirmation",
    fields: ["first name", "last name", "street", "city", "postal code", "telephone number"],
  },
  { id: 3, name: "payment", fields: ["card number", "delivery option"] },
];

export const MultiStepContext = createContext({});

const Wrap = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [collectedData, setCollectedData] = useState({});

  const onFinish = () => {
    console.log("Reached an end of form");
  };

  const proceedToNextStep = () => {
    if (currentIndex < 2) setCurrentIndex(prev => prev + 1);
    if (currentIndex === 2) onFinish();
  };

  return (
    <MultiStepContext.Provider
      value={{ currentIndex, setCurrentIndex, setCollectedData, collectedData, proceedToNextStep }}
    >
      <div>
        <Steps>
          <Step name={"register"} index={0} />
          <Step name={"confirmation"} index={1} />
          <Step name={"payment"} index={2} />
        </Steps>
        <PartContainer currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}>
          <Part name={"register"}>
            <Form>
              <InputField resource={"username"} resourceType={"text"} />
              <InputField resource={"email"} resourceType={"email"} />
              <InputField resource={"password"} resourceType={"password"} />
              <InputField resource={"password confirmation"} resourceType={"password"} />
              <Button action={"next step"} type={"submit"} />
            </Form>
          </Part>
          <Part>
            <Form>
              <InputField resource={"first name"} resourceType={"text"} />
              <InputField resource={"last name"} resourceType={"text"} />
              <InputField resource={"street"} resourceType={"text"} />
              <InputField resource={"city"} resourceType={"text"} />
              <InputField resource={"postal code"} resourceType={"number"} />
              <InputField resource={"telephone number"} resourceType={"tel"} />
              <Button action={"next step"} type={"submit"} />
            </Form>
          </Part>
          <Part>
            <Form>
              <InputField resource={"card number"} resourceType={"number"} />
              <Button action={"complete order"} type={"submit"} />
            </Form>
          </Part>
        </PartContainer>
      </div>
    </MultiStepContext.Provider>
  );
};

export default Wrap;
