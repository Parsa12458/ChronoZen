import React from "react";
import CircleButton from "./CircleButton";
import Dropdown from "./Dropdown";

function AppHeader() {
  return (
    <div className="col-start-2 col-end-3 flex items-center gap-10 px-12 py-8 font-semibold">
      <div>
        Good Afternoon, <span className="font-bold">Parsa!</span>
      </div>
      <div className="ml-auto">Monday, November 25, 2024</div>
      <div className="flex items-center justify-center gap-2">
        <CircleButton>
          <img src="/icons/moon-icon.svg" alt="moon icon" className="h-6 w-6" />
        </CircleButton>

        <Dropdown
          button={
            <CircleButton>
              <img src="/icons/user.svg" alt="user icon" className="h-6 w-6" />
            </CircleButton>
          }
          content={
            <React.Fragment>
              <li
                className="rounded transition duration-200 hover:bg-paleGreen"
                tabIndex={0}
              >
                <span>
                  <img
                    src="/icons/user-edit.svg"
                    alt="user edit icon"
                    className="w-5"
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
                    src="/icons/logout.svg"
                    alt="user edit icon"
                    className="w-5"
                  />
                  <span className="text-red">Logout</span>
                </span>
              </li>
            </React.Fragment>
          }
        />
      </div>
    </div>
  );
}

export default AppHeader;
