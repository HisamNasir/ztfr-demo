'use client'
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import AVAV from "@/public/assets/avav.svg";
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import X from "@/public/assets/X.svg";
import Ztransfer from "@/public/assets/transferwhite.svg";
import UK from "@/public/assets/uk.png";
import FootImg1 from "@/public/assets/sidebar/foot1.png";
import FootImg2 from "@/public/assets/sidebar/foot2.png";
import btn from "@/public/assets/sidebar/buttons/btn (1).svg";
import btn2 from "@/public/assets/sidebar/buttons/btn (2).svg";
import btn3 from "@/public/assets/sidebar/buttons/btn (3).svg";
import btn4 from "@/public/assets/sidebar/buttons/btn (4).svg";
import btn5 from "@/public/assets/sidebar/buttons/btn (5).svg";
import btn6 from "@/public/assets/sidebar/buttons/btn (6).svg";
import btn7 from "@/public/assets/sidebar/buttons/btn (7).svg";
import MainImg from "@/public/assets/sidebar/main.png";
import Phone from "@/public/assets/sidebar/iphone.png";
import Ztr from "@/public/assets/sidebar/ztr.png";
import Group1 from "@/public/assets/sidebar/Group 1.png";
import Group2 from "@/public/assets/sidebar/Group 2.png";
import ProfileBtn from './ProfileBtn';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const images = ["/assets/sidebar/1.png", "/assets/sidebar/2.png", "/assets/sidebar/3.png", "/assets/sidebar/4.png", "/assets/sidebar/5.png", "/assets/sidebar/6.png", "/assets/sidebar/7.png"];

const RightSideCard = () => {
  const [showSvg, setShowSvg] = useState(true);
  const [showSidebar, setShowSidebar] = useState(true);
  const sidebarAnimation = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
  const openSidebar = async () => {
    setShowSidebar(true);
    await sidebarAnimation.start({ x: 0 });
  };

  const closeSidebar = async () => {
    await sidebarAnimation.start({ x: '100%' });
    setShowSidebar(true);
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
      <button onClick={openSidebar}>
        <div className="" >
          <div id="card" className="uppercase bg-black transition-colors duration-500s absolute right-0 items-center rounded-t-xl top-1/2 text-white h-8 w-36 md:h-10 md:w-41 lg:h-12 lg:w-52 translate-x-[56px] md:translate-x-[52px] lg:translate-x-[80px] flex justify-center -rotate-90">
            {showSvg ? (
              <div className="relative rotate-90">
                <Image className='w-[10px] md:w-[15px] lg:w-[20px]' src={AVAV} alt='' width={90} height={22} />
              </div>
            ) : (
              <p className="text-sm md:text-lg lg:text-2xl font-light">menu</p>
            )}
          </div>
        </div>
      </button>

      {showSidebar && (
        <motion.div
          className="fixed z-20 gap-6 top-0 right-0 bg-black h-screen  text-white aspect-square max-w-full  md:max-w-[960px]"
          initial={{ x: '100%' }}
          animate={sidebarAnimation}
          exit={{ x: '100%' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <div className=' h-full relative '>
            {/* top section */}
            <nav className='h-[53px] px-6 flex  left-5 top-5 justify-between items-center gap-4 '>
              <div className='flex items-center gap-4 md:gap-8'>
                <div className="cursor-pointer w-5 h-5" onClick={closeSidebar}>
                  <Image className=' w-5 h-5' src={X} width={20} height={20} alt='Close Sidebar' />
                </div>
                <p className=' text-xs md:text-sm'>Menu</p>
              </div>
            </nav>
            {/* mid section  */}
            <div className='h-[calc(100%-106px)] '>
              <div className=' grid grid-cols-4 max-w-full max-h-full grid-rows-4 gap-2 px-4'>
                <div className=' hidden sm:block row-span-3 w-full h-full'>
                  <div ref={containerRef} className=' relative hidden row-span-3 sm:flex flex-col  h-full w-full max-w-[200px] py-6 gap-8 scrollbar-hide snap-y overflow-hidden overflow-y-scroll '>

                    {images.map((imageName, index) => (

                      // eslint-disable-next-line react/jsx-key
                      <Image key={index} className='relative h-auto w-full  max-w-[200px] max-h-[200px]' width={200} height={200} src={imageName} alt={`Image ${index + 1}`} />
                    ))}
                  </div>
                </div>
                <div className=' relative row-span-3 pt-8 col-span-4 sm:col-span-3 h-full'>
                  <div className=' absolute top-0 flex justify-end items-center w-full pb-2 px-4 '>
                    <div className='hidden sm:flex items-start w-full'>
                      <Image className=' px-2 mx-auto h-auto w-full sm:w-[220px] xl:w-[250px]' src={Ztransfer} alt='Z Transfer' width={253} height={35} />
                    </div>
                    <div className="items-center  grid grid-cols-2">
                      <div className=' h-auto w-4 md:w-4 lg:w-5 ' >
                        <ProfileBtn />
                      </div>
                      <Image
                        alt="UK Flag"
                        width={100}
                        height={100}
                        className=" w-6 md:w-9 lg:w-8 lg:h-8 xl:w-[50px] xl:h-[40px]"
                        src={UK}
                      />
                    </div>
                  </div>
                  <div className=' hidden md:flex absolute z-10 bottom-4  flex-col gap-2'>
                    <button onClick={handleScrollUp} className=" w-full bg-transparent text-gray-400  text-xl"><FaAngleUp /></button>
                    <button onClick={handleScrollDown} className="w-full bg-transparent text-gray-400 text-xl"><FaAngleDown /></button>
                  </div>
                  <div className=' absolute z-10 bottom-0 right-4 gap-2 flex'>
                    <button onClick={handleScrollleft} className=" w-full bg-transparent -rotate-90 text-gray-400 text-xl"><FaAngleUp /></button>
                    <button onClick={handleScrollright} className="w-full bg-transparent -rotate-90 text-gray-400 text-xl"><FaAngleDown /></button>
                  </div>
                  <div className=' grid grid-cols-3 grid-rows-3 gap-2 w-full p-6 h-full'>
                    <div className='hidden sm:flex col-span-2 row-span-2 w-full h-full '>
                      <Image className=' h-full w-auto max-w-[400px] max-h-[400px]' src={MainImg} alt=' ' width={400} height={400} />

                    </div>
                    <div className='flex flex-col justify-between items-end py-4 col-span-3 row-span-3 sm:row-span-2 sm:col-span-1 w-full h-full'>
                      <button className="text-[8px] md:text-[10px] lg:text-xs  xl:text-[16px] tracking-widest pb-1 md:pb-1 uppercase">features</button>
                      <button className="text-[8px] md:text-[10px] lg:text-xs  xl:text-[16px] tracking-widest pb-1 md:pb-1 uppercase">products</button>
                      <button className=""><Image className='maxh-[11px]' src={Ztr} alt='' width={122} height={11} /></button>
                      <button className="text-[8px] md:text-[10px] lg:text-xs  xl:text-[16px] tracking-widest pb-1 md:pb-1 uppercase">pricing</button>
                      <button className="text-[8px] md:text-[10px] lg:text-xs  xl:text-[16px] tracking-widest pb-1 md:pb-1 uppercase">advertising</button>
                      <button className="text-[8px] md:text-[10px] lg:text-xs  xl:text-[16px] tracking-widest pb-1 md:pb-1 uppercase">company</button>
                      <button className="text-[8px] md:text-[10px] lg:text-xs  xl:text-[16px] tracking-widest pb-1 md:pb-1 uppercase">careers</button>
                      <button className="text-[8px] md:text-[10px] lg:text-xs  xl:text-[16px] tracking-widest pb-1 md:pb-1 uppercase">my account</button>
                      <button className="text-[8px] md:text-[10px] lg:text-xs  xl:text-[16px] tracking-widest pb-1 md:pb-1 uppercase">newsroom/press</button>
                    </div>
                    <div className=' relative hidden sm:block col-span-3 w-full h-full'>
                      <div className='flex relative h-full w-auto '>
                        <Image className=' h-full w-auto  max-h-[200px] max-w-[334px] ' src={Phone} alt='' width={334} height={200} />

                        <div className='flex  gap-4 h-full w-auto items-center justify-center ml-4'>
                          <Image className='h-full w-auto  max-h-[150px] max-w-[118px]' src={Group1} width={118} height={150} alt='' />
                          <Image className='h-full w-auto  max-h-[150px] max-w-[118px]' src={Group2} width={118} height={150} alt='' />
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <div className=' col-span-4 w-full h-full'>
                  <div ref={containerRef2} className="flex gap-8 relative scrollbar-hide h-full snap-x overflow-hidden overflow-x-scroll ">

                    {images.map((imageName, index) => (

                      // eslint-disable-next-line react/jsx-key
                      <Image key={index} className='h-full w-auto max-h-[200px] max-w-[200px]' width={200} height={200} src={imageName} alt={`Image ${index + 1}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* bot section  */}

            <footer className='h-[13px] absolute px-6 bottom-5  row-span-1 w-full flex items-center '>
              <div className=' grid grid-cols-3  w-full'>
                <div className='flex items-center w-full'>
                  <Image className=' max-w-[191px] w-full h-auto p-1' src={FootImg1} width={191} height={18} alt='' />
                </div>
                <div className=' flex justify-center items-center w-full'>
                  <Image className=' max-w-[191px] w-full h-auto p-1' src={FootImg2} width={191} height={11} alt='' />
                </div>
                <div className='flex gap-2 justify-end items-center p-1'>
                  <Image className=' opacity-50 hover:opacity-100 transition-opacity duration-300 aspect-square w-full h-full max-w-[25px] max-h-[25px]' src={btn} width={25} height={25} alt='' />
                  <Image className=' opacity-50 hover:opacity-100 transition-opacity duration-300 aspect-square w-full h-full max-w-[25px] max-h-[25px]' src={btn2} width={25} height={25} alt='' />
                  <Image className=' opacity-50 hover:opacity-100 transition-opacity duration-300 aspect-square w-full h-full max-w-[25px] max-h-[25px]' src={btn3} width={25} height={25} alt='' />
                  <Image className=' opacity-50 hover:opacity-100 transition-opacity duration-300 aspect-square w-full h-full max-w-[25px] max-h-[25px]' src={btn4} width={25} height={25} alt='' />
                  <Image className=' opacity-50 hover:opacity-100 transition-opacity duration-300 aspect-square w-full h-full max-w-[25px] max-h-[25px]' src={btn5} width={25} height={25} alt='' />
                  <Image className=' opacity-50 hover:opacity-100 transition-opacity duration-300 aspect-square w-full h-full max-w-[25px] max-h-[25px]' src={btn6} width={25} height={25} alt='' />
                  <Image className=' opacity-50 hover:opacity-100 transition-opacity duration-300 aspect-square w-full h-full max-w-[25px] max-h-[25px]' src={btn7} width={25} height={25} alt='' />
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
