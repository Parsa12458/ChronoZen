import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setTasks(state, action) {
      state.tasks = action.payload;
    },
  },
});

export default dashboardSlice.reducer;

export const { setTasks } = dashboardSlice.actions;
