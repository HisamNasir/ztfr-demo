"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Ztfr from "@/public/assets/ztfr.png";
import UK from "@/public/assets/uk.png";
import RightSideCard from "../ui/RightSideCard";
import LeftSideCard from "../ui/LeftSideCard";
import ProfileBtn from "../ui/ProfileBtn";
import BottomText from "../ui/BottomText";

const Home: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);



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
    <div className=" uppercase tracking-wider  transition-colors duration-500">
      <div className="min-h-screen flex flex-col">
        <div className="absolute top-0 left-0 p-4 px-[25px] py-[12px] 2xl:px-[50px] 2xl:py-[24px]">
          <Image
            alt=""
            width={100}
            height={100}
            className="w-[70px] md:w-[90px] lg:w-[100px]"
            src={Ztfr}
          />
        </div>

        <div className="absolute top-0 right-0 p-4 px-[25px] py-[12px] 2xl:px-[50px] 2xl:py-[24px]">
          <div className="flex gap-2  items-center">
            <div className=" flex items-center gap-4">
              <ProfileBtn />
              <Image
                alt=""
                width={100}
                height={100}
                className="w-[20px] lg:w-[30px] 2xl:w-[40px]"
                src={UK}
              />
            </div>
          </div>
        </div>

        <div className="flex-grow flex items-center justify-center">
          <LeftSideCard />

          <div
            id="center"
            className="flex font-normal flex-col items-center gap-6 lg:gap-12 2xl:gap-18 w-[70vw] md:w-[50vw] lg:w-full"
          >
            <div className=" flex flex-col text-end justify-end gap-4 lg:gap-6 2xl:gap-8 h-">
              <h1 className=" font-normal text-xl lg:text-[29px] 2xl:text-[42px] tracking-[0.2em] text-right">{"Let's do"}</h1>
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
  );
};

export default Home;
