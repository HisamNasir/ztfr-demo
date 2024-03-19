import { createSlice } from "@reduxjs/toolkit";
import ColorThief from "colorthief/dist/color-thief.umd";

export const backgroundSlice = createSlice({
  name: "background",
  initialState: {
    currentImageIndex: 0,
    dominantColor: null,
  },
  reducers: {
    incrementImageIndex: (state) => {
      state.currentImageIndex = (state.currentImageIndex + 1) % 60;
    },
    setDominantColor: (state, action) => {
      state.dominantColor = action.payload;
    },
  },
});

export const { incrementImageIndex, setDominantColor } =
  backgroundSlice.actions;

export const extractDominantColor = (imgSrc) => (dispatch) => {
  if (!imgSrc) {
    return;
  }

  const img = new Image();
  img.crossOrigin = "Anonymous";
  img.src = imgSrc;

  img.onload = () => {
    const colorThief = new ColorThief();
    const dominantColor = colorThief.getColor(img);
    dispatch(setDominantColor(dominantColor));
  };
};

export default backgroundSlice.reducer;
