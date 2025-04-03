import { createSlice } from "@reduxjs/toolkit";
import { formatLocalDate } from "../../utils/helper";

const initialState = {
  selectedDate: formatLocalDate(new Date()),
};

const taskManagementSlice = createSlice({
  name: "freeNote",
  initialState,
  reducers: {
    setSelectedDate(state, action) {
      state.selectedDate = action.payload;
    },
  },
});

export default taskManagementSlice.reducer;

export const { setSelectedDate } = taskManagementSlice.actions;
