import React from "react";
import Button from "../../ui/Button";

function DashboardSection({ title, data }) {
  let renderData;
  if (data === "task")
    renderData = [
      "Work on ChronoZen project",
      "Do School homeworks",
      "Go to gym",
    ];

  if (data === "habit")
    renderData = [
      "Do the morning routine",
      "Get 8 hours of sleep",
      "Drink 8 glasses of water",
      "Do journaling",
    ];

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
          {renderData.map((item, i) => (
            <div
              className="flex items-start justify-start gap-2"
              role="row"
              key={i}
            >
              <span className="mt-[-1px] font-bold">{i + 1}</span>
              <span className="leading-4">{item}</span>
              <Button variation="small" additionalStyles="self-center">
                Done
              </Button>
            </div>
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
