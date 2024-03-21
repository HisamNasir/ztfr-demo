import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setDominantColor } from "../src/store/features/backgroundSlice";

const ColorPlayer = ({ onColorsEnd }) => {
  const colors = [
    [255, 0, 0], // Red
    [0, 255, 0], // Green
    [0, 0, 255], // Blue
    [255, 255, 0], // Yellow
    [255, 0, 255], // Magenta
    [0, 255, 255], // Cyan
  ];

  const [colorIndex, setColorIndex] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleColorChange = () => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);

      if (colorIndex === colors.length - 1) {
        onColorsEnd();
      }

      const dominantColor = findClosestColor(colors[colorIndex + 1]);
      dispatch(setDominantColor(dominantColor));
    };

    const intervalId = setInterval(handleColorChange, 5000); // Change color every 5 seconds
    return () => clearInterval(intervalId);
  }, [dispatch, colorIndex, onColorsEnd, colors]);

  const findClosestColor = (targetColor) => {
    let minDistance = Infinity;
    let closestColor = targetColor;

    colors.forEach((color) => {
      const distance = calculateColorDistance(color, targetColor);
      if (distance < minDistance) {
        minDistance = distance;
        closestColor = color;
      }
    });

    return closestColor;
  };

  const calculateColorDistance = (color1, color2) => {
    const r1 = color1[0],
      g1 = color1[1],
      b1 = color1[2];
    const r2 = color2[0],
      g2 = color2[1],
      b2 = color2[2];
    return Math.sqrt((r2 - r1) ** 2 + (g2 - g1) ** 2 + (b2 - b1) ** 2);
  };

  return (
    <div
      className="w-screen h-screen"
      style={{ backgroundColor: `rgb(${colors[colorIndex].join(", ")})` }}
    ></div>
  );
};

export default ColorPlayer;
