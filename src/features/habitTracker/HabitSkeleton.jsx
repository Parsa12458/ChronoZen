import React from "react";

function HabitSkeleton() {
  return (
    <React.Fragment>
      <div className="skeleton mb-1.5 h-80 w-[650px] rounded bg-lightGreen"></div>
      <div className="skeleton mb-1.5 h-80 w-[650px] rounded bg-lightGreen"></div>
    </React.Fragment>
  );
}

export default HabitSkeleton;
