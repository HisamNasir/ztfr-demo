"use client";
import { Input } from '@nextui-org/react';
import React from 'react'
import { useState, useEffect, useRef } from "react";
import {
  FaEllipsisV,
  FaLock,
} from "react-icons/fa";
const LeftSideCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleCloseButtonClick = () => {
    setCardOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setCardOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const [isCardOpen, setCardOpen] = useState<boolean>(false);

  const handleCardClick = () => {
    if (isCardOpen) {
    } else {
      setCardOpen(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setCardOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);


  return (
    <div
    ref={cardRef}
    className={`absolute transition-all duration-800 cursor-pointer ${
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
        LOGO
      </button>
    )}
    <div className="flex transition-colors duration-500 relative h-[390px]  2xl:h-[489px] w-[210px] md:w-[280px] 2xl:w-[310px] rounded-2xl  bg-black text-white">
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
                variant='underlined'
                className="dark w-full font-normal"
                label="Title"
              />

              <Input
                type="text"
                variant='underlined'
                className="dark w-full  font-normal"
                label="Note"
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
    <div className="absolute rotate-90 translate-x-16 -right-8 font-normal lg:-right-[84px] top-28 lg:top-[144px]">
      <p className=" text-[6px] lg:text-[10px] w-full">
        advanced encryption standard (aes) 256-bit
      </p>
    </div>
    {isCardOpen && (
      <div className="absolute 2xl:translate-x-16  translate-x-9 md:-right-7 -right-6 top-[90px] 2xl:top-28">
        <p className=" text-2xl 2xl:text-4xl w-full font-normal">1 tb</p>
      </div>
    )}
  </div>
  )
}

export default LeftSideCard