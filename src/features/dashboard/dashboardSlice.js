import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  habits: [],
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
  },
});

export default dashboardSlice.reducer;

export const { setTasks, setHabits } = dashboardSlice.actions;
