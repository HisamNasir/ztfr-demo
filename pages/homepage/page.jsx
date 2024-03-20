import {React, useState, useEffect, useRef } from "react";
import RightSideCard from "../../components/RightSideCard";
import LeftSideCard from "../../components/LeftSideCard";
import ProfileBtn from "../../components/ProfileBtn";
import BottomText from "../../components/BottomText";
import ImageWallpaper from "../../components/ImageWallpaper";
import { useSelector } from 'react-redux';
import { colorCombinations } from '../../lib/constants';
const HomePage = () => {
  const cardRef = useRef(null);
  const [isCardOpen, setCardOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setCardOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
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
      const distance = Math.sqrt(Math.pow(r2 - r1, 2) + Math.pow(g2 - g1, 2) + Math.pow(b2 - b1, 2));

      if (distance < minDistance) {
        minDistance = distance;
        closestCombination = combination;
      }
    });

    return closestCombination;
  };

  const closestColorCombination = findClosestColorCombination();

  if (!closestColorCombination) return null;

  const { bgColor, textColor } = closestColorCombination;

  const textStyle = {
    color: textColor,
  };

  const containerStyle = {
    backgroundColor: bgColor,
  };

  return (
    <>
      <ImageWallpaper/>
    <div className=" uppercase tracking-wider  transition-colors duration-500">
      <div className="min-h-screen flex flex-col">
        <div className="absolute top-0 left-0 p-4 px-[20px] py-[10px] 2xl:px-[50px] 2xl:py-[24px]">
          <img
            alt=""
            className="w-[70px] md:w-[90px] lg:w-[100px]"
            src="assets/ztfr.png"
          />
        </div>
       

        <div className="absolute top-0 right-0 p-4 px-[20px] py-[10px] 2xl:px-[50px] 2xl:py-[24px]">
          <div className="flex gap-2  items-center">
            <div className=" flex items-center gap-4">
              <ProfileBtn />
              <img
                alt=""
                className="w-[20px] lg:w-[30px] 2xl:w-[40px]"
                src='assets/uk.png'
              />
            </div>
          </div>
        </div>

        <div className="flex-grow flex items-center justify-center">
          <LeftSideCard />

          <div style={textStyle}
            id="center"
            className="flex font-normal flex-col items-center gap-6 lg:gap-12 2xl:gap-18 w-[70vw] md:w-[50vw] lg:w-full"
          >
            <div className=" flex flex-col text-end justify-end gap-4 lg:gap-6 2xl:gap-8 h-">
              <h1 className=" font-normal text-xl lg:text-[29px] 2xl:text-[42px] tracking-[0.2em] text-right px-2">{"Let's do"}</h1>
              <h1 className="font-normal text-7xl lg:text-[115px] 2xl:text-[128px] tracking-widest text-end ">this</h1>
            </div>

            <p className="font-normal tracking-widest text-[8px] lg:text-xs 2xl:text-sm text-center">
              UPLOAD FILES OR FOLDERS BY DROPPING THEM ANYWHERE IN THIS WINDOW
            </p>
          </div>
        </div>
        <div className="absolute right-0 flex h-full items-center">
          <RightSideCard />
        </div>
        <BottomText />
      </div>
    </div>
    </>
  );
};

export default HomePage;
