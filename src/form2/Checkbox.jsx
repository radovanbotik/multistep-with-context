import React from "react";
import { useContextHook } from "./context/Context";

const Checkbox = ({ action, resource }) => {
  const { collectedData, setCollectedData } = useContextHook();

  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text">{action}</span>
        <input
          type="checkbox"
          name={resource}
          checked={collectedData[resource]}
          className="checkbox"
          onChange={e => setCollectedData(prev => ({ ...prev, [e.target.name]: e.target.checked }))}
        />
      </label>
    </div>
  );
};

export default Checkbox;
