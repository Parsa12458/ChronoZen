import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryColor: "#6f8779",
  selectedCategoryFilter: "All",
  selectedStatusFilter: "",
};

const habitTrackerSlice = createSlice({
  name: "habitTracker",
  initialState,
  reducers: {
    setCategoryColor(state, action) {
      state.categoryColor = action.payload;
    },
    setSelectedCategoryFilter(state, action) {
      state.selectedCategoryFilter = action.payload;
    },
    setSelectedStatusFilter(state, action) {
      state.selectedStatusFilter = action.payload;
    },
  },
});

export default habitTrackerSlice.reducer;

export const {
  setCategoryColor,
  setSelectedCategoryFilter,
  setSelectedStatusFilter,
} = habitTrackerSlice.actions;
