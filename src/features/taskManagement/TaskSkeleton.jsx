import React from "react";

function TaskSkeleton() {
  return (
    <React.Fragment>
      <div className="skeleton mb-1.5 h-12 w-full rounded bg-lightGreen"></div>
      <div className="skeleton mb-1.5 h-12 w-full rounded bg-lightGreen"></div>
      <div className="skeleton mb-1.5 h-12 w-full rounded bg-lightGreen"></div>
    </React.Fragment>
  );
}

export default TaskSkeleton;
