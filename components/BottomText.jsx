import React from 'react';
import { useSelector } from 'react-redux';
import { FaLock } from 'react-icons/fa';
import { colorCombinations } from '../lib/constants';

export default function BottomText() {
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
    <div className='hidden font-normal sm:block relative text-[6px] lg:text-[7px] 2xl:text-[10px]' style={containerStyle}>
      <div className="absolute max-md:w-full px-[20px] py-[10px] 2xl:px-[50px] 2xl:py-[24px] bottom-0 left-0 ">
        <div className=" max-sm:flex max-sm:flex-col w-full max-sm:text-center justify-center">
          <p style={textStyle}>© zitransfer 2023</p>
          <div className=' md:flex gap-2  max-sm:flex-col max-sm:text-center w-full justify-center'>
            <p style={textStyle}>all right reserved</p>
            <p style={textStyle}>zitransfer is part of the zimo group</p>
          </div>
        </div>
      </div>

      <div className="absolute px-[20px] py-[10px] 2xl:px-[50px] 2xl:py-[24px] bottom-8 md:bottom-0 right-0 ">
        <div className="md:flex gap-2 items-end">
          <p className="flex  gap-2 items-center text-center sm:text-left" style={textStyle}>
            <span style={{ color: textColor }}>
              <FaLock />
            </span>
            zitransfer use advance encryption standard (AES) 256-bit to
            protect the confidentiality of the data you upload.
          </p>
        </div>
      </div>
    </div>
  );
}
