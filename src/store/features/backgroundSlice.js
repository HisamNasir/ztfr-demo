import { createSlice } from "@reduxjs/toolkit";
export const backgroundSlice = createSlice({
  name: "background",
  initialState: {
    currentImageIndex: 0,
  },
  reducers: {
    incrementImageIndex: (state) => {
      state.currentImageIndex = (state.currentImageIndex + 1) % 60;
    },
  },
});

export const { incrementImageIndex } = backgroundSlice.actions;

export default backgroundSlice.reducer;
