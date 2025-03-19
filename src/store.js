import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./features/dashboard/dashboardSlice";
import taskManagementReducer from "./features/taskManagement/taskManagementSlice";
import habitTrackerReducer from "./features/habitTracker/habitTrackerSlice";

const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    taskManagement: taskManagementReducer,
    habitTracker: habitTrackerReducer,
  },
});

export default store;
