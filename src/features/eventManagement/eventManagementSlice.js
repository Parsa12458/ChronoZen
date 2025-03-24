import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryColor: "#6f8779",
  selectedCategoryFilter: "All",
  selectedStatusFilter: "",
};

const eventManagementSlice = createSlice({
  name: "eventManagement",
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

export default eventManagementSlice.reducer;

export const {
  setCategoryColor,
  setSelectedCategoryFilter,
  setSelectedStatusFilter,
} = eventManagementSlice.actions;
