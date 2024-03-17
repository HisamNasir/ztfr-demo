import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import AVAV from "../public/assets/avav.svg";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import X from "../public/assets/X.svg";
import Ztransfer from "../public/assets/transferwhite.svg";
import UK from "../public/assets/uk.png";
import FootImg1 from "../public/assets/sidebar/foot1.png";
import FootImg2 from "../public/assets/sidebar/foot2.png";
import btn from "../public/assets/sidebar/buttons/btn (1).svg";
import btn2 from "../public/assets/sidebar/buttons/btn (2).svg";
import btn3 from "../public/assets/sidebar/buttons/btn (3).svg";
import btn4 from "../public/assets/sidebar/buttons/btn (4).svg";
import btn5 from "../public/assets/sidebar/buttons/btn (5).svg";
import btn6 from "../public/assets/sidebar/buttons/btn (6).svg";
import btn7 from "../public/assets/sidebar/buttons/btn (7).svg";
import MainImg from "../public/assets/sidebar/main.png";
import Left from "../public/assets/sidebar/buttons/left.svg";
import Right from "../public/assets/sidebar/buttons/right.svg";
import Phone from "../public/assets/iphone.png";
import Ztr from "../public/assets/sidebar/ztr.png";
import Group1 from "../public/assets/sidebar/Group 1.png";
import Group2 from "../public/assets/sidebar/Group 2.png";
import ProfileBtn from "./ProfileBtn";

const images = [
  "/assets/sidebar/1.png",
  "/assets/sidebar/2.png",
  "/assets/sidebar/3.png",
  "/assets/sidebar/4.png",
  "/assets/sidebar/5.png",
  "/assets/sidebar/6.png",
  "/assets/sidebar/7.png",
];

const RightSideCard = () => {
  const [showSvg, setShowSvg] = useState(true);
  const [showSidebar, setShowSidebar] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarAnimation = useAnimation();
  const containerRef = useRef(null);
  const containerRef2 = useRef(null);

  const openSidebar = () => {
    sidebarAnimation.start({ x: 0 });
    setIsSidebarOpen(true); // Set the state to true when opening sidebar
  };

  const closeSidebar = () => {
    sidebarAnimation.start({ x: "100%" });
    setIsSidebarOpen(false); // Set the state to false when closing sidebar
  };

  const handleScrollUp = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop -= 200;
    }
  };

  const handleScrollDown = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop += 200;
    }
  };
  const handleScrollleft = () => {
    if (containerRef2.current) {
      containerRef2.current.scrollLeft -= 200;
    }
  };

  const handleScrollright = () => {
    if (containerRef2.current) {
      containerRef2.current.scrollLeft += 200;
    }
  };

  useEffect(() => {
    const toggleContent = setInterval(() => {
      setShowSvg((prevShowSvg) => !prevShowSvg);
    }, 1000);

    return () => {
      clearInterval(toggleContent);
    };
  }, []);

  return (
    <div className="relative ">
      {isSidebarOpen ? null : ( // Only render the button if the sidebar is not open
        <button onClick={openSidebar}>
          <div className="">
            <div
              id="card"
              className="uppercase bg-black transition-colors duration-500s absolute right-0 items-center rounded-t-xl top-1/2 text-white h-8 w-36 xl:h-10 xl:w-41 2xl:h-12 2xl:w-52 translate-x-[56px] xl:translate-x-[52px] 2xl:translate-x-[80px] flex justify-center -rotate-90"
            >
              {showSvg ? (
                <div className="relative rotate-90">
                  <Image
                    className="w-[10px] xl:w-[15px] 2xl:w-[20px]"
                    src={AVAV}
                    alt=""
                    width={90}
                    height={22}
                  />
                </div>
              ) : (
                <p className="text-sm xl:text-lg 2xl:text-2xl font-light">
                  menu
                </p>
              )}
            </div>
          </div>
        </button>
      )}
      {showSidebar && (
        <motion.div
          className="fixed z-20 gap-6 top-0 right-0 bg-black bg-opacity-90 h-screen  w-full  text-white aspect-square md:w-[600px] 2xl:w-[960px] max-w-full"
          initial={{ x: "100%" }}
          animate={sidebarAnimation}
          exit={{ x: "100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className=" h-full relative ">
            {/* top section */}
            <nav className=" relative  flex h-[40px] justify-between items-center gap-4 ">
              <div className=" absolute top-0 left-0 z-30 flex items-center gap-4 md:gap-8 p-4 px-[20px] py-[10px] 2xl:px-[50px] 2xl:py-[24px]">
                <div className="cursor-pointer" onClick={closeSidebar}>
                  <Image
                    className="w-3 sm:w-4 2xl:w-5 h-auto"
                    src={X}
                    width={20}
                    height={20}
                    alt="Close Sidebar"
                  />
                </div>
                <p className=" text-xs md:text-sm">Menu</p>
              </div>
            </nav>
            {/* mid section  */}
                <div className="absolute grid-cols-3 top-0 flex items-center w-full  p-4 px-[20px] py-[10px] 2xl:px-[50px] 2xl:py-[24px]">
                  <div className="w-full"></div>
                  <div className="hidden sm:flex items-center justify-center w-full">
                    <Image
                      className=" px-2 mx-auto h-auto w-[200px] md:w-[210px] xl:w-[250px]"
                      src={Ztransfer}
                      alt="Z Transfer"
                      width={253}
                      height={35}
                    />
                  </div>
                  <div className="items-center z-10 w-full flex justify-end gap-4">
                    <div className=" h-full w-auto ">
                      <ProfileBtn />
                    </div>
                    <Image
                      alt=""
                      width={100}
                      height={100}
                      className="w-[20px] lg:w-[30px] 2xl:w-[40px]"
                      src={UK}
                    />
                  </div>
                </div>
            <div className="h-[calc(100%-80px)]">
              <div className=" relative grid grid-cols-4 wll h-full grid-rows-4 gap-2 p-4">
                <div className=" hidden sm:block row-span-3 h-full  w-[90px] sm:w-[110px] md:w-[120px] lg:w-[130px] 2xl:w-[200px]">
                  <div
                    ref={containerRef}
                    className=" relative hidden row-span-3 sm:flex flex-col  h-full w-full max-w-[200px] py-3 2xl:py-6 gap-4 lg:gap-7 2xl:gap-8 scrollbar-hide snap-y overflow-hidden overflow-y-scroll "
                  >
                    {images.map((imageName, index) => (
                      <Image
                        key={index}
                        className="relative h-auto w-full  max-w-[200px] max-h-[200px]"
                        width={200}
                        height={200}
                        src={imageName}
                        alt={`Image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="relative row-span-3 pt2 col-span-4 sm:col-span-3 h-full w-full ">
                  <div className=" absolute hidden sm:flex flex-col -left-3 2xl:left-0 b-500 bottom-3 justify-end  h-full w-[11px] z-30  ">
                    <div className="flex flex-col justify-between  w-full max-w-[18px] h-[41px] z-10">
                      <button
                        onClick={handleScrollUp}
                        className=" w-full h-auto"
                      >
                        <Image
                          alt=""
                          className=" h-auto w-full rotate-90 max-h-[11px] "
                          src={Left}
                          width={5}
                          height={11}
                        />
                      </button>
                      <button
                        onClick={handleScrollDown}
                        className="w-full h-auto"
                      >
                        <Image
                          alt=""
                          className=" h-auto w-full rotate-90 max-h-[11px]"
                          src={Right}
                          width={5}
                          height={11}
                        />
                      </button>
                    </div>
                  </div>
                  <div className=" absolute flex justify-end  w-full h-[11px] z-10 bottom-1 2xl:bottom-4 right-0 ">
                    <div className="flex justify-between items-center max-h-[11px] w-[41px]  mx-4 xl:mx-[20px] 2xl:mx-[50px]">
                      <button
                        onClick={handleScrollleft}
                        className="  w-auto h-full"
                      >
                        <Image
                          alt=""
                          className=" w-auto h-full max-h-[11px] "
                          src={Left}
                          width={5}
                          height={11}
                        />
                      </button>
                      <button
                        onClick={handleScrollright}
                        className=" w-auto h-full"
                      >
                        <Image
                          alt=""
                          className=" w-auto h-full max-h-[11px] "
                          src={Right}
                          width={5}
                          height={11}
                        />
                      </button>
                    </div>
                  </div>
                  <div className=" grid grid-cols-3 grid-rows-3 gap-2 w-full p-4 px-[5px] py-[6px] 2xl:px-[32px] 2xl:py-[20px] h-full">
                    <div className="hidden sm:flex items-center  col-span-2 row-span-2 w-full h-full ">
                      <div className=" h-full aspect-square   flex justify-center items-center rounded-xl  max-w-[400px] max-h-[400px]">
                      <Image
                        className=" w-full  aspect-square object-cover  max-w-full max-h-full rounded-xl"
                        src={MainImg}
                        alt=" "
                        width={400}
                        height={400}
                      />

                      </div>
                    </div>
                    <div className="flex flex-col pt-2 justify-between max-h-[600px] sm:items-end col-span-3 row-span-3 sm:row-span-2 sm:col-span-1 sm:w-full h-full">
                      <button className="text-[8px] md:text-[10px] lg:text-xs max-sm:text-left 2xl:text-[16px] tracking-widest mb-1 uppercase">
                        features
                      </button>
                      <button className="text-[8px] md:text-[10px] lg:text-xs max-sm:text-left 2xl:text-[16px] tracking-widest mb-1 uppercase">
                        products
                      </button>
                      <button className="">
                        <Image
                          className=" h-auto w-[70px] lg:w-[90px] 2xl:w-[128px]"
                          src={Ztr}
                          alt=""
                          width={122}
                          height={11}
                        />
                      </button>
                      <button className="text-[8px] md:text-[10px] lg:text-xs max-sm:text-left 2xl:text-[16px] tracking-widest mb-1 uppercase">
                        pricing
                      </button>
                      <button className="text-[8px] md:text-[10px] lg:text-xs max-sm:text-left 2xl:text-[16px] tracking-widest mb-1 uppercase">
                        advertising
                      </button>
                      <button className="text-[8px] md:text-[10px] lg:text-xs max-sm:text-left 2xl:text-[16px] tracking-widest mb-1 uppercase">
                        company
                      </button>
                      <button className="text-[8px] md:text-[10px] lg:text-xs max-sm:text-left 2xl:text-[16px] tracking-widest mb-1 uppercase">
                        careers
                      </button>
                      <button className="text-[8px] md:text-[10px] lg:text-xs max-sm:text-left 2xl:text-[16px] tracking-widest mb-1 uppercase">
                        my account
                      </button>
                      <button className="text-[8px] md:text-[10px] lg:text-xs max-sm:text-left 2xl:text-[16px] tracking-widest mb-1 uppercase">
                        newsroom/press
                      </button>
                    </div>
                    <div className=" hidden sm:flex items-center col-span-3 w-full gap-4 h-full max-h-[200px] justify-between">
                      
                        <Image
                          className=" h-full w-auto  max-h-[200px] max-w-[334px] object-cover  rounded-xl"
                          src={Phone}
                          alt=""
                          width={334}
                          height={200}
                        />

                      <div className=" flex items-center w-full justify-end h-full py-4 gap-5">
                        <div className=" flex w-full h-full md:max-w-[70px] 2xl:max-w-[118px] justify-end  ">
                          <Image
                            className="h-full w-auto  object-cover rounded-xl"
                            src={Group1}
                            width={118}
                            height={150}
                            alt=""
                          />
                        </div>
                        <div className=" w-full h-full md:max-w-[70px] 2xl:max-w-[118px] justify-end">
                          <Image
                            className="h-full w-auto object-cover rounded-xl"
                            src={Group2}
                            width={118}
                            height={150}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-4  flex items-end">
                  <div className=" col-span-4 w-full h-[90px] sm:h-[105px] md:h-[110px] lg:h-[120px] xl:h-[130px] 2xl:h-[200px]">
                    <div
                      ref={containerRef2}
                      className="flex gap-4 2xl:gap-8 relative scrollbar-hide h-full snap-x overflow-hidden overflow-x-scroll "
                    >
                      {images.map((imageName, index) => (
                        // eslint-disable-next-line react/jsx-key
                        <Image
                          key={index}
                          className="h-full w-auto max-h-[200px] max-w-[200px]"
                          width={200}
                          height={200}
                          src={imageName}
                          alt={`Image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* bot section  */}

            <footer className=" sm:h-[13px] 2xl:h-[22px] absolute px-10 bottom-3  row-span-1 w-full flex items-center ">
              <div className=" relative grid grid-cols-3 gap-10  w-full sm:h-[13px] 2xl:h-[22px]">
                <div className="flex items-center w-full">
                  <Image
                    className=" max-w-[120px] lg:w-[140px]  2xl:w-[191px] w-full h-auto mr-1"
                    src={FootImg1}
                    width={191}
                    height={18}
                    alt=""
                  />
                </div>
                <div className=" flex justify-center items-center w-full">
                  <Image
                    className="max-w-[120px] lg:w-[140px]  2xl:w-[191px] w-full h-auto mx-1"
                    src={FootImg2}
                    width={191}
                    height={11}
                    alt=""
                  />
                </div>
                <div className="flex h-full w-full gap-2 justify-end items-center ml-1 sm:h-[13px] 2xl:h-[22px]">
                  <Image
                    className=" opacity-50 hover:opacity-100 transition-opacity duration-300 aspect-square h-full w-full  max-w-[18px]"
                    src={btn}
                    width={25}
                    height={25}
                    alt=""
                  />
                  <Image
                    className=" opacity-50 hover:opacity-100 transition-opacity duration-300 aspect-square h-full w-full  max-w-[18px]"
                    src={btn2}
                    width={25}
                    height={25}
                    alt=""
                  />
                  <Image
                    className=" opacity-50 hover:opacity-100 transition-opacity duration-300 aspect-square h-full w-full  max-w-[18px]"
                    src={btn3}
                    width={25}
                    height={25}
                    alt=""
                  />
                  <Image
                    className=" opacity-50 hover:opacity-100 transition-opacity duration-300 aspect-square h-full w-full  max-w-[18px]"
                    src={btn4}
                    width={25}
                    height={25}
                    alt=""
                  />
                  <Image
                    className=" opacity-50 hover:opacity-100 transition-opacity duration-300 aspect-square h-full w-full  max-w-[18px]"
                    src={btn5}
                    width={25}
                    height={25}
                    alt=""
                  />
                  <Image
                    className=" opacity-50 hover:opacity-100 transition-opacity duration-300 aspect-square h-full w-full  max-w-[18px]"
                    src={btn6}
                    width={25}
                    height={25}
                    alt=""
                  />
                  <Image
                    className=" opacity-50 hover:opacity-100 transition-opacity duration-300 aspect-square h-full w-full  max-w-[18px]"
                    src={btn7}
                    width={25}
                    height={25}
                    alt=""
                  />
                </div>
              </div>
            </footer>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default RightSideCard;
