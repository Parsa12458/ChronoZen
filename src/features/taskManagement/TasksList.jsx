import React from "react";
import Dropdown from "../../ui/Dropdown";
import TaskDetail from "./TaskDetail";
import Modal from "../../ui/Modal";
import Badge from "../../ui/Badge";

const renderTask = [
  {
    taskId: 1,
    taskTitle: "Project Presentation",
    taskDescription:
      "Provide a clear and concise introduction to the project. try to explain the project’s goals, objectives, and significance. Summarize the research conducted and the planning process",
    taskDate: "2024-11-30",
    taskTime: "19:00",
    taskCategory: "Work",
    taskPriority: "High",
    taskRecurringFrequency: "none",
    taskReminder: true,
  },
  {
    taskId: 2,
    taskTitle: "Grocery Shopping",
    taskDescription: "",
    taskDate: "2024-11-25",
    taskTime: "18:00",
    taskCategory: "Personal",
    taskPriority: "Medium",
    taskRecurringFrequency: "weekly",
    taskReminder: false,
  },
  {
    taskId: 3,
    taskTitle: "Fitness Session",
    taskDescription: "",
    taskDate: "2024-11-26",
    taskTime: "08:00",
    taskCategory: "Personal",
    taskPriority: "High",
    taskRecurringFrequency: "daily",
    taskReminder: false,
  },
  {
    taskId: 4,
    taskTitle: "Client Meeting",
    taskDescription: "",
    taskDate: "2024-11-27",
    taskTime: "12:00",
    taskCategory: "Work",
    taskPriority: "High",
    taskRecurringFrequency: "none",
    taskReminder: true,
  },
  {
    taskId: 5,
    taskTitle: "Read a Book",
    taskDescription: "",
    taskDate: "2024-11-28",
    taskTime: "22:00",
    taskCategory: "Personal",
    taskPriority: "Low",
    taskRecurringFrequency: "daily",
    taskReminder: false,
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
            key={task.taskId}
            className="flex w-full items-center gap-4 rounded bg-lightGreen px-4 py-3 text-sm font-semibold"
          >
            <input type="checkbox" className="custom-checkbox" />
            <span className="flex-1">{task.taskTitle}</span>
            <span className="flex-1">{task.taskDate}</span>
            <span className="flex-1">{task.taskTime}</span>
            <div className="flex-1">
              <Badge
                variation="solid"
                backgroundColor={`${task.taskCategory === "Work" ? "#2D5562" : ""}${task.taskCategory === "Personal" ? "#AD5973" : ""}`}
              >
                {task.taskCategory}
              </Badge>
            </div>
            <div className="flex-1">
              <Badge variation="outlined" borderColor="#6f8779">
                {task.taskPriority}
              </Badge>
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
                    <Modal>
                      <Modal.Open opens="addTask">
                        <button>
                          <img
                            src="/icons/detail.svg"
                            alt="user edit icon"
                            className="w-4"
                          />
                          <span>Task Detail</span>
                        </button>
                      </Modal.Open>
                      <Modal.Window name="addTask">
                        <TaskDetail
                          data={{
                            taskTitle: task.taskTitle,
                            taskCategory: task.taskCategory,
                            taskPriority: task.taskPriority,
                            taskDescription: task.taskDescription,
                            taskDate: task.taskDate,
                            taskTime: task.taskTime,
                            taskRecurringFrequency: task.taskRecurringFrequency,
                            taskReminder: task.taskReminder,
                          }}
                        />
                      </Modal.Window>
                    </Modal>
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
