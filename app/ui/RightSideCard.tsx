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
import FootImg4 from "@/public/assets/sidebar/foot.png";
import MainImg from "@/public/assets/sidebar/main.png";
import Phone from "@/public/assets/sidebar/iphone.png";
import Ztr from "@/public/assets/sidebar/ztr.png";
import Group1 from "@/public/assets/sidebar/Group 1.png";
import Group2 from "@/public/assets/sidebar/Group 2.png";
import ProfileBtn from './ProfileBtn';
import { button } from '@nextui-org/react';
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
          className="fixed z-20 gap-6 top-0 right-0 bg-black h-screen  text-white max-md:w-screen lg:w-[100vh] px-4 max-w-[960px]"
          initial={{ x: '100%' }}
          animate={sidebarAnimation}
          exit={{ x: '100%' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <div className=' h-full relative '>
            {/* top section */}
            <nav className='h-[53px] px-6 flex  left-5 top-5 justify-between items-center gap-4 '>
              <div className='flex items-center gap-4 md:gap-8'>
                <button className="cursor-pointer w-5 h-5" onClick={closeSidebar}>
                  <Image className=' w-5 h-5' src={X} width={20} height={20} alt='Close Sidebar' />
                </button>
                <p className=' text-xs md:text-sm'>Menu</p>
              </div>

            </nav>
            {/* mid section  */}
            <div className='  h-[88vh] '>

              <div className=' grid grid-cols-3  md:grid-cols-4 h-full grid-rows-4 gap-6 '>
                <div ref={containerRef} className=' hidden row-span-3 w-full md:flex flex-col  h-full py-6 gap-6 scrollbar-hide snap-y overflow-hidden overflow-y-scroll '>

                  <AnimatePresence>
                    {images.map((imageName, index) => (
                      <motion.div
                        key={index}
                        initial={{ x: '100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: '-100%', opacity: 0 }}
                        transition={{ duration: 1, delay: index * 0.5 }}
                        className=' w-full h-full sm:w-[120px] sm:h-[120px] 2xl:w-[200px] 2xl:h-[200px]'
                      >
                        <Image className='w-full h-full' width={200} height={200} src={imageName} alt={`Image ${index + 1}`} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
                <div className=' relative h-full w-full row-span-3 col-span-3'>
                  <div className=' w-full right-2 top-2 flex justify-end -translate-y-4 items-center pb-2 px-4 '>
                    <div className='hidden sm:flex items-start w-full '>
                      <Image className=' px-2 mx-auto w-auto md:w-[180px] lg:w-[220px] xl:w-[250px]' src={Ztransfer} alt='Z Transfer' width={253} height={35} />
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
                  <div className=' relative h-[90%] content-between  -translate-y-4  w-full gap-6 grid grid-cols-3 grid-rows-3'>
                    <div className=' hidden hover:scale-95 transition-transform duration-300  col-span-2 row-span-2 sm:flex items-center justify-center '>
                      <div className='w-full h-full  flex items-center justify-center'>
                        <Image className='h-full w-auto max-h-[400px] max-w-[400px] p-2' src={MainImg} alt='' width={400} height={400} />
                      </div>
                    </div>
                    <div className=' row-span-2 w-full h-full max-sm:col-span-3 '>
                      <div className='sm:pl-1  flex flex-col h-full row-span-3 sm:row-span-2 max-h-[420px] justify-between  sm:text-end items-start sm:items-end '>
                        <button className="text-whitetext-[8px] md:text-[10px] lg:text-xs  xl:text-[16px] tracking-widest pb-1 md:pb-1 uppercase">features</button>
                        <button className="text-whitetext-[8px] md:text-[10px] lg:text-xs  xl:text-[16px] tracking-widest pb-1 md:pb-1 uppercase">products</button>
                        <button className="text-whitetext-[8px] md:text-[10px] lg:text-xs  xl:text-[16px] tracking-widest pb-1 md:pb-1 uppercase"><Image className='h-[11px]' src={Ztr} alt='' width={122} height={11} /></button>
                        <button className="text-whitetext-[8px] md:text-[10px] lg:text-xs  xl:text-[16px] tracking-widest pb-1 md:pb-1 uppercase">pricing</button>
                        <button className="text-whitetext-[8px] md:text-[10px] lg:text-xs  xl:text-[16px] tracking-widest pb-1 md:pb-1 uppercase">advertising</button>
                        <button className="text-whitetext-[8px] md:text-[10px] lg:text-xs  xl:text-[16px] tracking-widest pb-1 md:pb-1 uppercase">company</button>
                        <button className="text-whitetext-[8px] md:text-[10px] lg:text-xs  xl:text-[16px] tracking-widest pb-1 md:pb-1 uppercase">careers</button>
                        <button className="text-whitetext-[8px] md:text-[10px] lg:text-xs  xl:text-[16px] tracking-widest pb-1 md:pb-1 uppercase">my account</button>
                        <button className="text-whitetext-[8px] md:text-[10px] lg:text-xs  xl:text-[16px] tracking-widest pb-1 md:pb-1 uppercase">newsroom/press</button>
                      </div>
                    </div>
                    <div className=' col-span-2 w-full h-full hidden md:flex items-center  '>
                      <div className='col-span-3 flex h-full w-full items-end justify-center'>
                        <div className=' flex-col hidden sm:flex gap-4'>
                          <button onClick={handleScrollUp} className="  bg-transparent text-gray-400 text-lg"><FaAngleUp /></button>
                          <button onClick={handleScrollDown} className=" bg-transparent text-gray-400 text-lg"><FaAngleDown /></button>
                        </div>

                        <div className=' hidden sm:flex col-span-2 gap-3 w-full h-full'>
                          <button className=' w-full h-full'>
                            <Image className=' w-full h-auto max-h-[200px] max-w-[334px] max-2xl:pr-[60px] ' src={Phone} alt='' width={334} height={200} />
                          </button>

                        </div>
                      </div>
                    </div>
                    <div className=' w-full h-full flex items-center' style={{ width: 'calc(100% + 60px)' }}>
                      <div className=' relative w-full  hidden md:flex items-end -translate-x-[60px]' >
                        <div className=' relative flex flex-col  items-end '>
                          <div className='w-full h-full relative flex gap-4'>
                            <button>
                              <Image className='w-full h-full max-h-[150px] max-w-[118px]' src={Group1} width={118} height={150} alt='' />
                            </button>
                            <button>
                              <Image className='w-full h-full  max-h-[150px] max-w-[118px]' src={Group2} width={118} height={150} alt='' />
                            </button>

                          </div>
                          <div className=' flex justify-center gap-4'>
                            <button onClick={handleScrollleft} className=" w-full bg-transparent -rotate-90 text-gray-400  text-lg"><FaAngleUp /></button>
                            <button onClick={handleScrollright} className="w-full bg-transparent -rotate-90 text-gray-400  text-lg"><FaAngleDown /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>


                <div className=' relative col-span-4 w-full h-full flex items-center'>
                  <div ref={containerRef2} className=" relative grid grid-flow-col gap-6 scrollbar-hide items-center snap-x overflow-hidden h-full overflow-x-scroll ">

                    <AnimatePresence>
                      {images.map((imageName, index) => (
                        <motion.div
                          key={index}
                          initial={{ y: '100%', opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: '-100%', opacity: 0 }}
                          transition={{ duration: 1, delay: index * 0.5 }}
                          className='w-full h-full max-w-[200px] max-h-[200px]'
                        >
                          <Image className=' w-auto h-[90%] max-w-[200px] max-h-[200px]' width={200} height={200} src={imageName} alt={`Image ${index + 1}`} />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>


              </div>

            </div>
            {/* bot section  */}

            <footer className='h-[53px] absolute bottom-0 px-6 row-span-1 w-full flex items-center '>
              <div className=' flex  w-full items-center '>
                <div className='flex items-center'>
                  <Image className='w-[180px] lg:w-[191px]' src={FootImg1} width={191} height={18} alt='' />
                </div>
                <div className=' flex justify-center items-center w-full'>
                  <Image className=' w-24 sm:w-[150px] md:w-[180px] lg:w-[191px] h-auto' src={FootImg2} width={191} height={11} alt='' />
                </div>
                <div className='flex gap-2 justify-end items-center'>
                  <Image className=' opacity-50 hover:opacity-100 transition-opacity duration-300w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] lg:w-[18px] lg:h-[18px] xl:w-[25px] xl:h-[25px]' src={btn} width={25} height={25} alt='' />
                  <Image className=' opacity-50 hover:opacity-100 transition-opacity duration-300w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] lg:w-[18px] lg:h-[18px] xl:w-[25px] xl:h-[25px]' src={btn2} width={25} height={25} alt='' />
                  <Image className=' opacity-50 hover:opacity-100 transition-opacity duration-300w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] lg:w-[18px] lg:h-[18px] xl:w-[25px] xl:h-[25px]' src={btn3} width={25} height={25} alt='' />
                  <Image className=' opacity-50 hover:opacity-100 transition-opacity duration-300w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] lg:w-[18px] lg:h-[18px] xl:w-[25px] xl:h-[25px]' src={btn4} width={25} height={25} alt='' />
                  <Image className=' opacity-50 hover:opacity-100 transition-opacity duration-300w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] lg:w-[18px] lg:h-[18px] xl:w-[25px] xl:h-[25px]' src={btn5} width={25} height={25} alt='' />
                  <Image className=' opacity-50 hover:opacity-100 transition-opacity duration-300w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] lg:w-[18px] lg:h-[18px] xl:w-[25px] xl:h-[25px]' src={btn6} width={25} height={25} alt='' />
                  <Image className=' opacity-50 hover:opacity-100 transition-opacity duration-300w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] lg:w-[18px] lg:h-[18px] xl:w-[25px] xl:h-[25px]' src={btn7} width={25} height={25} alt='' />
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
