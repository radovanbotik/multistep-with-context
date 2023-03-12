import React from "react";

const PartContainer = ({ children, currentIndex }) => {
  if (children) {
    let childrenToArray;
    if (children.length === 1) {
      childrenToArray = [children];
    }

    childrenToArray = Array.from(children);
    const currentPart = childrenToArray[currentIndex];

    return <>{currentPart}</>;
  }

  if (!children) {
    return <div>An error has occured!</div>;
  }
};

export default PartContainer;
