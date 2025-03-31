import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  habits: [],
  events: [],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setTasks(state, action) {
      state.tasks = action.payload;
    },
    setHabits(state, action) {
      state.habits = action.payload;
    },
    setEvents(state, action) {
      state.events = action.payload;
    },
  },
});

export default dashboardSlice.reducer;

export const { setTasks, setHabits, setEvents } = dashboardSlice.actions;
