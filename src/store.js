import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./features/dashboard/dashboardSlice";
import taskManagementReducer from "./features/taskManagement/taskManagementSlice";

const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    taskManagement: taskManagementReducer,
  },
});

export default store;
