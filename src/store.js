import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./features/dashboard/dashboardSlice";
import taskManagementReducer from "./features/taskManagement/taskManagementSlice";
import habitTrackerReducer from "./features/habitTracker/habitTrackerSlice";
import eventManagementReducer from "./features/eventManagement/eventManagementSlice";
import goalTrackerReducer from "./features/goalTracker/goalTrackerSlice";
import freeNoteReducer from "./features/freeNote/freeNoteSlice";

const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    taskManagement: taskManagementReducer,
    habitTracker: habitTrackerReducer,
    eventManagement: eventManagementReducer,
    goalTracker: goalTrackerReducer,
    freeNote: freeNoteReducer,
  },
});

export default store;
