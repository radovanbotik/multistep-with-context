import React from "react";
import { useContextHook } from "./context/Context";

const InputField = ({ resource, resourceType, disabled }) => {
  const { collectedData, setCollectedData } = useContextHook();
  let formatedName;
  if (resource.startsWith("bill")) {
    formatedName = resource.replace("bill_", "").replace("_", " ");
  } else if (resource.startsWith("ship")) {
    formatedName = resource.replace("ship_", "").replace("_", " ");
  } else {
    formatedName = resource;
  }

  return (
    <div className="form-control">
      <label className="input-group input-group-vertical">
        {/* <span className="text-warning first-letter:capitalize">This Field needs to be at least 8 chars long.</span> */}
        <input
          type={resourceType}
          placeholder={formatedName}
          className="input-bordered input placeholder:capitalize"
          name={resource}
          value={collectedData[resource]}
          onChange={e => setCollectedData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
          disabled={disabled ? disabled : false}
        />
      </label>
    </div>
  );
};

export default InputField;
