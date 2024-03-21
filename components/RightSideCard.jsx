import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import ProfileBtn from "./ProfileBtn";
import { useSelector } from "react-redux";
import { colorCombinations } from "../lib/constants";
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
  const dominantColor = useSelector((state) => state.background.dominantColor);

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

  const { bgColor, textColor } = closestColorCombination;

  const buttonStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <div className="relative scrollbar-hide">
      {isSidebarOpen ? null : ( // Only render the button if the sidebar is not open
        <button onClick={openSidebar}>
          <div className="">
            <div
              id="card"
              className="uppercase transition-colors duration-500s absolute right-0 items-center rounded-t-xl top-1/2 text-white h-8 w-36 xl:h-10 xl:w-41 2xl:h-12 2xl:w-52 translate-x-[56px] xl:translate-x-[52px] 2xl:translate-x-[80px] flex justify-center -rotate-90"
              style={buttonStyle}
            >
              {showSvg ? (
                <div className="relative rotate-90">
                  <img
                    className="w-[10px] xl:w-[15px] 2xl:w-[20px]"
                    src="assets/avav.svg"
                    alt=""
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
          className="fixed z-20 gap-6 top-0 right-0 bg-opacity-90 h-screen  w-full  aspect-square md:w-[600px] 2xl:w-[960px] max-w-full"
          initial={{ x: "100%" }}
          animate={sidebarAnimation}
          exit={{ x: "100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ backgroundColor: bgColor, color: textColor }}
        >
          <div className=" h-full relative ">
            {/* top section */}
            <nav className=" relative  flex h-[40px] justify-between items-center gap-4 ">
              <div className=" absolute top-0 left-0 z-30 flex items-center gap-4 md:gap-8 p-4 px-[20px] py-[10px] 2xl:px-[50px] 2xl:py-[24px]">
                <div className="cursor-pointer" onClick={closeSidebar}>
                  <img
                    className="w-3 sm:w-4 2xl:w-5 h-auto"
                    src="assets/X.svg"
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
                <img
                  className=" px-2 mx-auto h-auto w-[200px] md:w-[210px] xl:w-[250px]"
                  src="assets/transferwhite.svg"
                  alt="Z Transfer"
                />
              </div>
              <div className="items-center z-10 w-full flex justify-end gap-4">
                <div className=" h-full w-auto ">
                  <ProfileBtn />
                </div>

                <img
                  alt=""
                  className="w-[20px] lg:w-[30px] 2xl:w-[40px]"
                  src="assets/uk.png"
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
                      <img
                        key={index}
                        className="relative h-auto w-full  max-w-[200px] max-h-[200px]"
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
                        <img
                          alt=""
                          className=" h-auto w-full rotate-90 max-h-[11px] "
                          src="assets/sidebar/buttons/left.svg"
                        />
                      </button>
                      <button
                        onClick={handleScrollDown}
                        className="w-full h-auto"
                      >
                        <img
                          alt=""
                          className=" h-auto w-full rotate-90 max-h-[11px]"
                          src="assets/sidebar/buttons/right.svg"
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
                        <img
                          alt=""
                          className=" w-auto h-full max-h-[11px] "
                          src="assets/sidebar/buttons/left.svg"
                        />
                      </button>
                      <button
                        onClick={handleScrollright}
                        className=" w-auto h-full"
                      >
                        <img
                          alt=""
                          className=" w-auto h-full max-h-[11px] "
                          src="assets/sidebar/buttons/right.svg"
                        />
                      </button>
                    </div>
                  </div>
                  <div className=" grid grid-cols-3 grid-rows-3 gap-2 w-full p-4 px-[5px] py-[6px] 2xl:px-[32px] 2xl:py-[20px] h-full">
                    <div className="hidden sm:flex items-center  col-span-2 row-span-2 w-full h-full ">
                      <div className=" h-full aspect-square   flex justify-center items-center rounded-xl  max-w-[400px] max-h-[400px]">
                        <img
                          className=" w-full  aspect-square object-cover  max-w-full max-h-full rounded-xl"
                          src="assets/sidebar/main.png"
                          alt=" "
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
                        <img
                          className=" h-auto w-[70px] lg:w-[90px] 2xl:w-[128px]"
                          src="assets/sidebar/ztr.png"
                          alt=""
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
                      <img
                        className=" h-full w-auto  max-h-[200px] max-w-[334px] object-cover  rounded-xl"
                        src="assets/iphone.png"
                        alt=""
                        width={334}
                        height={200}
                      />
                      <div className=" flex items-center w-full justify-end h-full py-4 gap-5">
                        <div className=" flex w-full h-full md:max-w-[70px] 2xl:max-w-[118px] justify-end  ">
                          <img
                            className="h-full w-auto  object-cover rounded-xl"
                            src="assets/sidebar/Group 1.png"
                            width={118}
                            height={150}
                            alt=""
                          />
                        </div>
                        <div className=" w-full h-full md:max-w-[70px] 2xl:max-w-[118px] justify-end">
                          <img
                            className="h-full w-auto object-cover rounded-xl"
                            src="assets/sidebar/Group 2.png"
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
                        <img
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
            <footer className=" sm:h-[13px] 2xl:h-[22px] row-span-1 w-full flex items-center ">
              <div className=" relative grid grid-flow-col gap-10  w-full sm:h-[13px] 2xl:h-[22px]">
                <div className="flex items-center justify-center">
                  <img
                    className=" h-[15px] w-auto object-cover"
                    src="assets/sidebar/buttons/btn (1).svg"
                    alt=""
                  />
                </div>
                <div className="flex items-center justify-center">
                  <img
                    className=" h-[15px] w-auto object-cover"
                    src="assets/sidebar/buttons/btn (2).svg"
                    alt=""
                  />
                </div>
                <div className="flex items-center justify-center">
                  <img
                    className=" h-[15px] w-auto object-cover"
                    src="assets/sidebar/buttons/btn (3).svg"
                    alt=""
                  />
                </div>
                <div className="flex items-center justify-center">
                  <img
                    className=" h-[15px] w-auto object-cover"
                    src="assets/sidebar/buttons/btn (4).svg"
                    alt=""
                  />
                </div>
                <div className="flex items-center justify-center">
                  <img
                    className=" h-[15px] w-auto object-cover"
                    src="assets/sidebar/buttons/btn (5).svg"
                    alt=""
                  />
                </div>
                <div className="flex items-center justify-center">
                  <img
                    className=" h-[15px] w-auto object-cover"
                    src="assets/sidebar/buttons/btn (6).svg"
                    alt=""
                  />
                </div>
                <div className="flex items-center justify-center">
                  <img
                    className=" h-[15px] w-auto object-cover"
                    src="assets/sidebar/buttons/btn (7).svg"
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
