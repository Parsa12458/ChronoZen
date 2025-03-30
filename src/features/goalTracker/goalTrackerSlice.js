import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryColor: "#6f8779",
  selectedCategoryFilter: "All",
  selectedPriorityFilter: "",
  selectedStatusFilter: "",
};

const goalTrackerSlice = createSlice({
  name: "goalTracker",
  initialState,
  reducers: {
    setCategoryColor(state, action) {
      state.categoryColor = action.payload;
    },
    setSelectedCategoryFilter(state, action) {
      state.selectedCategoryFilter = action.payload;
    },
    setSelectedPriorityFilter(state, action) {
      state.selectedPriorityFilter = action.payload;
    },
    setSelectedStatusFilter(state, action) {
      state.selectedStatusFilter = action.payload;
    },
  },
});

export default goalTrackerSlice.reducer;

export const {
  setCategoryColor,
  setSelectedCategoryFilter,
  setSelectedPriorityFilter,
  setSelectedStatusFilter,
} = goalTrackerSlice.actions;
