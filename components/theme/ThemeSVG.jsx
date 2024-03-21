import React from "react";
import { useSelector } from "react-redux";
import { colorCombinations } from "../../lib/constants";

const ThemeSVG = ({ children }) => {
  const dominantColor = useSelector((state) => state.background.dominantColor);

  // Function to find the color combination closest to the dominant color
  const findClosestColorCombination = () => {
    if (!dominantColor) return null;

    let closestCombination = null;
    let minDistance = Infinity;

    colorCombinations.forEach((combination) => {
      const bgColor = combination.bgColor;
      const r1 = parseInt(bgColor.slice(1, 3), 16);
      const g1 = parseInt(bgColor.slice(3, 5), 16);
      const b1 = parseInt(bgColor.slice(5, 7), 16);

      const r2 = dominantColor[0];
      const g2 = dominantColor[1];
      const b2 = dominantColor[2];

      // Calculate Euclidean distance between colors
      const distance = Math.sqrt(
        Math.pow(r2 - r1, 2) + Math.pow(g2 - g1, 2) + Math.pow(b2 - b1, 2)
      );

      if (distance < minDistance) {
        minDistance = distance;
        closestCombination = combination;
      }
    });

    return closestCombination;
  };

  const closestColorCombination = findClosestColorCombination();

  if (!closestColorCombination) return null;

  const { textColor } = closestColorCombination;

  let imgStyle = {};

  if (textColor === "#fff") {
    imgStyle.filter = "brightness(0) invert(1)"; // Invert the colors if textColor is white
  } else if (textColor === "#000") {
    imgStyle.filter = "none"; // Remove filter if textColor is black
  }

  // Function to convert SVG content to data URI
  const convertSvgToDataUri = (svgContent) => {
    const svgBlob = new Blob([svgContent], { type: "image/svg+xml" });
    const svgUrl = URL.createObjectURL(svgBlob);
    return svgUrl;
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === "svg") {
          const svgContent = new XMLSerializer().serializeToString(child);
          const svgUrl = convertSvgToDataUri(svgContent);
          return <img src={svgUrl} alt={child.alt} style={imgStyle} />;
        } else if (React.isValidElement(child) && child.type === "img") {
          return React.cloneElement(child, { style: imgStyle });
        } else {
          return child;
        }
      })}
    </div>
  );
};

export default ThemeSVG;
