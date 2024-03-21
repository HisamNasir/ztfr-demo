import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setDominantColor } from "../src/store/features/backgroundSlice";

const ColorPlayer = ({ onColorsEnd }) => {
  const colors = [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
  ];
  const [colorIndex, setColorIndex] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    // Set default dominant color to black
    dispatch(setDominantColor("000"));

    const handleColorChange = () => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);

      if (colorIndex === colors.length - 1) {
        onColorsEnd();
      }

      if (colorIndex < colors.length) {
        const colorWithoutHash = colors[colorIndex].substring(1); // Remove #
        dispatch(setDominantColor(colorWithoutHash));
      }

      if (colorIndex === colors.length - 1) {
        setColorIndex(0);
      }
    };

    const intervalId = setInterval(handleColorChange, 5000); // Change color every 5 seconds
    return () => clearInterval(intervalId);
  }, [dispatch, colorIndex, onColorsEnd, colors]);

  return (
    <div
      className="w-screen h-screen"
      style={{ backgroundColor: colors[colorIndex] }}
    ></div>
  );
};

export default ColorPlayer;
