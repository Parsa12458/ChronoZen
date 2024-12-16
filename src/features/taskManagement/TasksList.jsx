import React from "react";
import Dropdown from "../../ui/Dropdown";

const renderTask = [
  {
    id: 1,
    taskTitle: "Project Presentation",
    taskDate: "2024/11/30",
    taskTime: "19:00",
    taskCategory: "Work",
    taskPriority: "High",
  },
  {
    id: 2,
    taskTitle: "Grocery Shopping",
    taskDate: "2024/11/25",
    taskTime: "18:00",
    taskCategory: "Personal",
    taskPriority: "Medium",
  },
  {
    id: 3,
    taskTitle: "Fitness Session",
    taskDate: "2024/11/26",
    taskTime: "08:00",
    taskCategory: "Personal",
    taskPriority: "High",
  },
  {
    id: 4,
    taskTitle: "Client Meeting",
    taskDate: "2024/11/27",
    taskTime: "12:00",
    taskCategory: "Work",
    taskPriority: "High",
  },
  {
    id: 5,
    taskTitle: "Read a Book",
    taskDate: "2024/11/28",
    taskTime: "22:00",
    taskCategory: "Personal",
    taskPriority: "Low",
  },
];

function TasksList() {
  return (
    <div className="mt-8">
      <div className="mb-1.5 ml-[3.25rem] flex items-center justify-start">
        <span className="flex-1 text-sm font-bold">Task Title</span>
        <span className="flex-1 text-sm font-bold">Date</span>
        <span className="flex-1 text-sm font-bold">Time</span>
        <span className="flex-1 text-sm font-bold">Category</span>
        <span className="flex-1 text-sm font-bold">Priority</span>
        <span className="w-10">&nbsp;</span>
      </div>
      <div className="flex flex-col items-center justify-center gap-1.5">
        {renderTask.map((task) => (
          <div
            key={task.id}
            className="flex w-full items-center gap-4 rounded bg-lightGreen px-4 py-3 text-sm font-semibold"
          >
            <input type="checkbox" className="custom-checkbox" />
            <span className="flex-1">{task.taskTitle}</span>
            <span className="flex-1">{task.taskDate}</span>
            <span className="flex-1">{task.taskTime}</span>
            <div className="flex-1">
              <span
                className={`badge rounded border-0 text-xs font-normal text-white ${task.taskCategory === "Work" && "bg-[#2D5562]"} ${task.taskCategory === "Personal" && "bg-[#AD5973]"}`}
              >
                {task.taskCategory}
              </span>
            </div>
            <div className="flex-1">
              <span className="badge rounded border-2 border-primary bg-transparent text-xs font-normal">
                {task.taskPriority}
              </span>
            </div>
            <Dropdown
              button={
                <button>
                  <img src="/icons/three-dots.svg" alt="three dot icon" />
                </button>
              }
              content={
                <React.Fragment>
                  <li
                    className="rounded transition duration-200 hover:bg-paleGreen"
                    tabIndex={0}
                  >
                    <span>
                      <img
                        src="/icons/detail.svg"
                        alt="user edit icon"
                        className="w-4"
                      />
                      <span>Task Detail</span>
                    </span>
                  </li>
                  <li
                    className="rounded transition duration-200 hover:bg-paleGreen"
                    tabIndex={0}
                  >
                    <span>
                      <img
                        src="/icons/edit.svg"
                        alt="user edit icon"
                        className="w-4"
                      />
                      <span>Edit</span>
                    </span>
                  </li>
                  <li
                    className="rounded transition duration-200 hover:bg-paleGreen"
                    tabIndex={0}
                  >
                    <span>
                      <img
                        src="/icons/remove.svg"
                        alt="user edit icon"
                        className="w-5"
                      />
                      <span className="text-red">Remove</span>
                    </span>
                  </li>
                </React.Fragment>
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TasksList;
