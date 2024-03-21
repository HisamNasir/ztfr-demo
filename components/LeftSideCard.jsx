import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Input } from "@nextui-org/react";
import { FaEllipsisV, FaLock } from "react-icons/fa";
import { colorCombinations } from "../lib/constants";
import ThemeBG from "./theme/ThemeBG";
import ThemeText from "./theme/ThemeText";

const LeftSideCard = () => {
  const cardRef = useRef(null);
  const [isCardOpen, setCardOpen] = useState(false);
  const dominantColor = useSelector((state) => state.background.dominantColor);

  const handleCloseButtonClick = () => {
    setCardOpen(false);
  };

  const handleCardClick = () => {
    if (!isCardOpen) {
      setCardOpen(true);
    }
  };

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

  return (
    <div
      ref={cardRef}
      className={`absolute transition-all duration-800 cursor-pointer rounded-2xl  ${
        isCardOpen ? "left-4" : "-left-40"
      }`}
      onClick={handleCardClick}
    >
      {isCardOpen && (
        <button
          id="closing button"
          className="top-2 left-2 absolute"
          onClick={handleCloseButtonClick}
        >
          <ThemeText>
            <p>LOGO</p>
          </ThemeText>
        </button>
      )}
      <ThemeBG style={{ padding: "20px", borderRadius: "10px" }}>
        <ThemeText>
          <div className="flex transition-colors duration-500 relative h-[390px]  2xl:h-[489px] w-[210px] md:w-[280px] 2xl:w-[310px] ">
            <div id="first-card">
              <div className="absolute right-4 top-4 text-xs 2xl:text-sm">
                <FaLock />
              </div>
              {!isCardOpen && (
                <div className=" absolute left-9 md:left-[65px] bottom-1/2 select-none flex items-end">
                  <p className=" text-[8px] md:text-xs text-center w-[300px] font-normal -rotate-90 tracking-widest">
                    upload files or folders by dropping them anywhere in the
                    world
                  </p>
                </div>
              )}
              {isCardOpen && (
                <div className="absolute tracking-widest w-full h-full p-4">
                  <div className=" translate-x-12 2xl:translate-x-24 text-xs font-normal">
                    <p>upload files</p>
                  </div>
                  <div className=" translate-x-12 2xl:translate-x-24 text-xl 2xl:text-4xl font-normal">
                    <p>Or</p>
                  </div>
                  <div className=" text-xs text-right ">
                    <p>select a folder</p>
                  </div>
                  <div className="2xl:text-4xl text-right text-xl mt-3 2xl:mt-6 font-normal">
                    <p>Up to</p>
                  </div>
                  <div className=" text-xs text-right font-normal ">
                    <p>free</p>
                  </div>
                  <div className="flex flex-col items-end justify-end -translate-y-6 w-full h-1/2 space-y-10  font-normal">
                    <Input
                      type="text"
                      variant="underlined"
                      className="dark w-full font-normal uppercase"
                      placeholder="TITLE"
                    />
                    <Input
                      type="text"
                      variant="underlined"
                      className="dark w-full  font-normal uppercase"
                      placeholder="NOTE"
                    />
                  </div>
                  <div className="absolute bottom-4 right-2 font-normal">
                    <FaEllipsisV />
                  </div>
                </div>
              )}
            </div>
            <div id="second-card"></div>
          </div>
        </ThemeText>
      </ThemeBG>
      <div className="absolute rotate-90 translate-x-16 -right-8 font-normal lg:-right-[84px] top-28 lg:top-[144px]">
        <ThemeText>
          <p className=" text-[6px] lg:text-[10px] w-full">
            advanced encryption standard (aes) 256-bit
          </p>
        </ThemeText>
      </div>
      {isCardOpen && (
        <div className="absolute 2xl:translate-x-16  translate-x-9 md:-right-7 -right-6 top-[90px] 2xl:top-28">
          <ThemeText>
            <p className=" text-2xl 2xl:text-4xl w-full font-normal">1 tb</p>
          </ThemeText>
        </div>
      )}
    </div>
  );
};

export default LeftSideCard;
