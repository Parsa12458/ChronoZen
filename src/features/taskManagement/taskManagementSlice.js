import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryColor: "#6f8779",
  selectedCategoryFilter: "All",
  selectedPriorityFilter: "",
  selectedStatusFilter: "",
};

const taskManagementSlice = createSlice({
  name: "taskManagement",
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

export default taskManagementSlice.reducer;

export const {
  setCategoryColor,
  setSelectedCategoryFilter,
  setSelectedPriorityFilter,
  setSelectedStatusFilter,
} = taskManagementSlice.actions;
