import React from "react";
import Dropdown from "../../ui/Dropdown";
import TaskDetail from "./TaskDetail";
import TaskForm from "./TaskForm";
import Modal from "../../ui/Modal";
import Badge from "../../ui/Badge";
import { formatDate, formatTime } from "../../utils/helper";
import InputCheckbox from "../../ui/InputCheckbox";
import { useCheckTask } from "./useCheckTask";
import { useDeleteTask } from "./useDeleteTask";

function TaskItem({ task }) {
  const { checkTask, isLoading: isChecking } = useCheckTask();
  const { deleteTask, isLoading: isDeleting } = useDeleteTask();

  return (
    <div
      key={task.id}
      className={`flex w-full items-center gap-4 rounded bg-lightGreen px-4 py-3 text-sm font-semibold ${task.checked ? "opacity-60" : ""}`}
    >
      {!isChecking ? (
        <InputCheckbox
          id={task.id}
          defaultChecked={task.checked}
          onChange={() => {
            checkTask({ ...task, checked: !task.checked });
          }}
        />
      ) : (
        <span className="loading loading-spinner loading-sm bg-primary"></span>
      )}
      <span className={`flex-1 ${task.checked ? "line-through" : ""}`}>
        {task.title}
      </span>
      <span className="flex-1">
        {task.date ? formatDate(task.date) : "Unset"}
      </span>
      <span className="flex-1">
        {task.time ? formatTime(task.time) : "Unset"}
      </span>
      <div className="flex-1">
        <Badge variation="solid" backgroundColor={task.category.bgColor}>
          {task.category.name}
        </Badge>
      </div>
      <div className="flex-1">
        <Badge variation="outlined" borderColor="#6f8779">
          {task.priority}
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
                <Modal.Open opens={`task:${task.id}`}>
                  <button>
                    <img
                      src="/icons/detail.svg"
                      alt="user edit icon"
                      className="w-4"
                    />
                    <span>Task Detail</span>
                  </button>
                </Modal.Open>
                <Modal.Window name={`task:${task.id}`}>
                  <TaskDetail
                    data={{
                      id: task.id,
                      title: task.title,
                      category: task.category,
                      priority: task.priority,
                      description: task.description,
                      date: task.date,
                      time: task.time,
                      recurringFrequency: task.recurringFrequency,
                      reminder: task.reminder,
                    }}
                  />
                </Modal.Window>
              </Modal>
            </li>
            <li
              className="rounded transition duration-200 hover:bg-paleGreen"
              tabIndex={0}
            >
              <Modal>
                <Modal.Open opens={`Edit:${task.id}`}>
                  <button>
                    <img
                      src="/icons/edit.svg"
                      alt="user edit icon"
                      className="w-4"
                    />
                    <span>Edit</span>
                  </button>
                </Modal.Open>
                <Modal.Window name={`Edit:${task.id}`}>
                  <TaskForm title={`Edit ${task.title}`} task={task} />
                </Modal.Window>
              </Modal>
            </li>
            <li
              className={`rounded transition duration-200 hover:bg-paleGreen ${isDeleting ? "pointer-events-none cursor-not-allowed hover:bg-mintGreen" : ""}`}
              tabIndex={0}
            >
              <button onClick={() => deleteTask(task.id)} disabled={isDeleting}>
                <img
                  src="/icons/remove.svg"
                  alt="user edit icon"
                  className="w-5"
                />
                <span className="text-red">Remove</span>
              </button>
            </li>
          </React.Fragment>
        }
      />
    </div>
  );
}

export default TaskItem;
