import React from "react";
import Button from "../../ui/Button";
import DashboardSectionItem from "./DashboardSectionItem";
import { useSelector } from "react-redux";
import {
  isToday,
  isTodayChecked as isTodayCheckedFn,
} from "../../utils/helper";
import { useCheckEvent } from "../eventManagement/useCheckEvent";

function DashboardSection({ title, data }) {
  // Tasks
  const { tasks } = useSelector((store) => store.dashboard);
  const todayTasks = tasks?.filter(
    (task) => (isToday(task.date) || task.date === null) && !task.checked,
  );

  // Habits
  const { habits } = useSelector((store) => store.dashboard);
  const todayHabits = habits?.filter(
    (habit) => !isTodayCheckedFn(habit.checkedDates),
  );

  // Events
  const { events } = useSelector((store) => store.dashboard);
  const { checkEvent, isLoading: isCheckingEvent } = useCheckEvent();
  const todayEvents = events?.filter(
    (event) => (isToday(event.date) || event.date === null) && !event.checked,
  );

  let renderData;
  if (data === "task") renderData = todayTasks;

  if (data === "habit") renderData = todayHabits;

  if (data === "event") renderData = todayEvents;

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
          className="grid grid-cols-[auto_1fr_0.6fr_2fr] gap-2 pl-2.5 text-sm"
          role="table"
        >
          <span className="col-span-1"></span>
          <span className="font-bold">Event Name</span>
          <span className="font-bold">Time</span>
          <span className="font-bold">Location</span>
          {renderData?.length === 0 && (
            <span className="col-span-full mt-8 text-center text-xl font-bold capitalize">
              No {data}s!
            </span>
          )}
          {renderData?.map((item, i) => (
            <React.Fragment key={i}>
              <span className="col-span-1 font-bold">{i + 1}</span>
              <span>{item.title}</span>
              <span>{item.time}</span>
              <span className="flex justify-between">
                {item.location}
                <Button
                  variation="small"
                  additionalStyles="self-center"
                  onClick={() =>
                    checkEvent({ ...item, checked: !item.checked })
                  }
                  isLoading={isCheckingEvent}
                >
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
