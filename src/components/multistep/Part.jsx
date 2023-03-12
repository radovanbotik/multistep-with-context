import React from "react";

const Part = ({ children, name }) => {
  return (
    <div className="flex flex-col justify-center text-center">
      <h4 className="mb-4 text-xl font-bold capitalize">{name}</h4>
      <>{children}</>
    </div>
  );
};

export default Part;
