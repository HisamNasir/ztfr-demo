import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementImageIndex,
  extractDominantColor,
  setDominantColor,
} from "../src/store/features/backgroundSlice";

const useColorChange = () => {
  const dispatch = useDispatch();
  const currentImageIndex = useSelector(
    (state) => state.background.currentImageIndex
  );
  const videoFinished = useSelector((state) => state.background.videoFinished);
  const [colorIndex, setColorIndex] = useState(0);
  const colors = [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
    "#000000",
  ];

  useEffect(() => {
    const handleColorChange = () => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);

      // Color change logic goes here

      if (colorIndex === colors.length - 1) {
        // Handle color change logic here
      }

      if (colorIndex < colors.length) {
        dispatch(setDominantColor(colors[colorIndex]));
      }

      if (colorIndex === colors.length - 1) {
        setColorIndex(0);
      }
    };

    if (videoFinished) {
      const intervalId = setInterval(handleColorChange, 5000); // Change color every 5 seconds
      return () => clearInterval(intervalId);
    }
  }, [dispatch, colorIndex, videoFinished, colors]);
};

export default useColorChange;
