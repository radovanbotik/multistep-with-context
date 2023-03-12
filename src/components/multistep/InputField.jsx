import React, { useState, useEffect, useContext } from "react";
import { MultiStepContext } from "./Wrap";

const InputField = ({ resource, resourceType }) => {
  const [error, setError] = useState({ msg: "", error: false });

  const { collectedData, setCollectedData } = useContext(MultiStepContext);

  return (
    <div className="form-control">
      <label className="input-group input-group-vertical">
        {/* <span className="text-warning first-letter:capitalize">This Field needs to be at least 8 chars long.</span> */}
        <input
          type={resourceType}
          placeholder={`${resource.charAt(0).toUpperCase()}${resource.slice(1)}`}
          className="input-bordered input"
          name={resource}
          value={collectedData.resource}
          onChange={e => {
            setCollectedData(prev => ({ ...prev, [resource]: e.target.value }));
          }}
        />
      </label>
    </div>
  );
};

export default InputField;
