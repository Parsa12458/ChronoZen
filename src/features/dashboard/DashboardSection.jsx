import React from "react";
import Button from "../../ui/Button";
import DashboardSectionItem from "./DashboardSectionItem";
import { useSelector } from "react-redux";
import { isToday } from "../../utils/helper";

function DashboardSection({ title, data }) {
  // Tasks
  const { tasks } = useSelector((store) => store.dashboard);
  const todayTasks = tasks?.filter(
    (task) => (isToday(task.date) || task.date === null) && !task.checked,
  );

  let renderData;
  if (data === "task") renderData = todayTasks;

  if (data === "habit") renderData = [];

  if (data === "event")
    renderData = [
      {
        eventName: "Conference at school",
        eventTime: "09:30",
        eventLocation: "School",
      },
      {
        eventName: "Go to dentist",
        eventTime: "14:30",
        eventLocation: "Gohardasht",
      },
    ];

  return (
    <div
      className={`rounded bg-lightGreen px-7 pb-8 pt-5 font-semibold ${data === "event" && "col-start-1 col-end-3"}`}
    >
      <h2 className="mb-3 text-lg">{title}</h2>
      {(data === "task" || data === "habit") && (
        <div className="flex flex-col gap-2 pl-2.5 text-sm" role="table">
          {renderData?.length === 0 && (
            <span className="mt-4 text-center text-xl font-bold capitalize">
              No {data}s!
            </span>
          )}
          {renderData?.map((item, i) => (
            <DashboardSectionItem item={item} data={data} i={i} key={item.id} />
          ))}
        </div>
      )}
      {data === "event" && (
        <div
          className="grid grid-cols-[auto_2fr_1fr_2fr] gap-2 pl-2.5 text-sm"
          role="table"
        >
          <span className="col-span-1"></span>
          <span className="font-bold">Event Name</span>
          <span className="font-bold">Time</span>
          <span className="font-bold">Location</span>
          {renderData.map((item, i) => (
            <React.Fragment key={i}>
              <span className="col-span-1 font-bold">{i + 1}</span>
              <span>{item.eventName}</span>
              <span>{item.eventTime}</span>
              <span className="flex justify-between">
                {item.eventLocation}
                <Button variation="small" additionalStyles="self-center">
                  Done
                </Button>
              </span>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}

export default DashboardSection;
