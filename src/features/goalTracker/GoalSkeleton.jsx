import React from "react";

function GoalSkeleton() {
  return (
    <React.Fragment>
      <div className="skeleton mb-1.5 h-96 w-80 rounded bg-lightGreen"></div>
      <div className="skeleton mb-1.5 h-96 w-80 rounded bg-lightGreen"></div>
      <div className="skeleton mb-1.5 h-96 w-80 rounded bg-lightGreen"></div>
    </React.Fragment>
  );
}

export default GoalSkeleton;
