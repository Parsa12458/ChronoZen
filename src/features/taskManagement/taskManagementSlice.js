import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryColor: "#6f8779",
  selectedCategoryFilter: "All",
  selectedPriorityFilter: "",
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
  },
});

export default taskManagementSlice.reducer;

export const {
  setCategoryColor,
  setSelectedCategoryFilter,
  setSelectedPriorityFilter,
} = taskManagementSlice.actions;
