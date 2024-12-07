import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function Sidebar() {
  return (
    <div className="row-start-1 row-end-3 bg-lightGreen">
      <div className="flex items-center justify-center py-8">
        <Logo />
      </div>
      <div className="space-y-3 font-semibold">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `justify-left ml-auto flex w-56 items-center gap-3 rounded-bl rounded-tl py-2.5 pl-5 transition-all duration-300 hover:bg-paleGreen ${isActive ? "bg-paleGreen" : ""}`
          }
        >
          <img
            src="/icons/dashboard.svg"
            alt="dashboard icon"
            className="w-5"
          />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/tasks"
          className={({ isActive }) =>
            `justify-left ml-auto flex w-56 items-center gap-3 rounded-bl rounded-tl py-2.5 pl-5 transition-all duration-300 hover:bg-paleGreen ${isActive ? "bg-paleGreen" : ""}`
          }
        >
          <img src="/icons/tasks.svg" alt="tasks icon" className="w-5" />
          <span>Task Management</span>
        </NavLink>

        <NavLink
          to="/habits"
          className={({ isActive }) =>
            `justify-left ml-auto flex w-56 items-center gap-3 rounded-bl rounded-tl py-2.5 pl-5 transition-all duration-300 hover:bg-paleGreen ${isActive ? "bg-paleGreen" : ""}`
          }
        >
          <img src="/icons/habits.svg" alt="habits icon" className="w-5" />
          <span>Habit Tracker</span>
        </NavLink>

        <NavLink
          to="/events"
          className={({ isActive }) =>
            `justify-left ml-auto flex w-56 items-center gap-3 rounded-bl rounded-tl py-2.5 pl-5 transition-all duration-300 hover:bg-paleGreen ${isActive ? "bg-paleGreen" : ""}`
          }
        >
          <img src="/icons/events.svg" alt="events icon" className="w-5" />
          <span>Event Management</span>
        </NavLink>

        <NavLink
          to="/goals"
          className={({ isActive }) =>
            `justify-left ml-auto flex w-56 items-center gap-3 rounded-bl rounded-tl py-2.5 pl-5 transition-all duration-300 hover:bg-paleGreen ${isActive ? "bg-paleGreen" : ""}`
          }
        >
          <img src="/icons/goals.svg" alt="goals icon" className="w-5" />
          <span>Goal Tracker</span>
        </NavLink>

        <NavLink
          to="/notes"
          className={({ isActive }) =>
            `justify-left ml-auto flex w-56 items-center gap-3 rounded-bl rounded-tl py-2.5 pl-5 transition-all duration-300 hover:bg-paleGreen ${isActive ? "bg-paleGreen" : ""}`
          }
        >
          <img src="/icons/notes.svg" alt="notes icon" className="w-[18px]" />
          <span>Daily Free-Note</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
