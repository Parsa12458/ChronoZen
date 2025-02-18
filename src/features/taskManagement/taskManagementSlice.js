import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryColor: "#6f8779",
  selectedCategoryFilter: "All",
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
  },
});

export default taskManagementSlice.reducer;

export const { setCategoryColor, setSelectedCategoryFilter } =
  taskManagementSlice.actions;
