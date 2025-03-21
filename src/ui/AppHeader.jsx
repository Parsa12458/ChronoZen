import React from "react";
import CircleButton from "./CircleButton";
import Dropdown from "./Dropdown";
import Modal from "./Modal";
import EditAccountForm from "../features/authentication/EditAccountForm";
import { useLogout } from "../features/authentication/useLogout";
import { formatDate, getTimeOfDay } from "../utils/helper";
import { queryClient } from "../App";

function AppHeader() {
  const { logout, isLoading } = useLogout();
  const user = queryClient.getQueryData(["user"]);

  return (
    <div className="col-start-2 col-end-3 flex items-center gap-10 px-12 py-8 font-semibold">
      <div>
        Good {getTimeOfDay()},{" "}
        <span className="font-bold">
          {user?.user_metadata?.fullName?.split(" ")?.at(0)}!
        </span>
      </div>
      <div className="ml-auto">{formatDate(new Date(), true)}</div>
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
              <Modal>
                <Modal.Open opens="editAccount">
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
                </Modal.Open>
                <Modal.Window name="editAccount">
                  <EditAccountForm />
                </Modal.Window>
              </Modal>
              <li
                className="rounded transition duration-200 hover:bg-paleGreen"
                tabIndex={0}
              >
                <button
                  onClick={logout}
                  className="disabled:cursor-not-allowed disabled:opacity-80"
                  disabled={isLoading}
                >
                  <img
                    src="/icons/logout.svg"
                    alt="user edit icon"
                    className="w-5"
                  />
                  <span className="text-red">Logout</span>
                </button>
              </li>
            </React.Fragment>
          }
          mainAxisOffset={0}
          crossAxisOffset={-8}
        />
      </div>
    </div>
  );
}

export default AppHeader;
