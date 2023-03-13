import React from "react";
import Pages from "./Pages";
import { useContextHook } from "./context/Context";
import Button from "./Button";
import { display } from "./Pages";
import Steps from "./Steps";
const Form = () => {
  const { title, collectedData, currentPage, setCurrentPage } = useContextHook();

  const showPrev = Number(currentPage) > 0;
  const showNext = Number(currentPage) < Object.keys(display).length - 1;
  const showSubmit = Number(currentPage) === Object.keys(display).length - 1;

  const billKeys = Object.keys(collectedData).filter(key => key.startsWith("bill"));
  const billValues = billKeys.map(key => collectedData[key]).every(Boolean);

  const shipKeys = Object.keys(collectedData).filter(key => key.startsWith("ship"));
  const shipValues = shipKeys.map(key => collectedData[key]).every(Boolean);

  const { same_as_billing, discount, ...requiredFields } = collectedData;
  const canSubmit =
    [...Object.values(requiredFields)].every(Boolean) &&
    currentPage === Object.keys(title).length - 1 &&
    shipValues &&
    billValues;

  const canNext = (billValues && currentPage === 0) || (shipValues && currentPage === 1);

  const handleNext = () => {
    if (currentPage < Object.keys(display).length - 1) setCurrentPage(prev => prev + 1);
    else {
      return;
    }
  };
  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    } else {
      return;
    }
  };
  const handleSubmit = () => {
    console.log(collectedData);
  };

  return (
    <div>
      <Steps />
      <h4 className="mb-4 text-center text-xl font-bold capitalize">{title[currentPage]}</h4>
      <Pages />
      <div className="flex">
        {showPrev && <Button action={"prev"} onClick={handlePrev} order={1} disabled={false} />}
        {showNext && <Button action={"next"} onClick={handleNext} order={2} disabled={!canNext} />}
        {showSubmit && <Button action={"submit"} onClick={handleSubmit} disabled={!canSubmit} order={3} />}
      </div>
    </div>
  );
};

export default Form;
