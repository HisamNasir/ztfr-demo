import Image from 'next/image';
import React from 'react';
import imageSrc from '@/public/assets/ztfrGold.png'
const GroupText = () => {
    return (
        <div className="hidden sm:flex flex-wrap w-full lg:w-[940px]  ">
                <div className="flex ">
                <button className="text-[10px] xl:text-[14px] py-1 tracking-widest text-xs xl:text-sm ">SEND FILES</button>
                <button className="text-[10px] xl:text-[14px] py-1 tracking-widest text-xs xl:text-sm ">SEND FOLDERS</button>
                <button className="text-[10px] xl:text-[14px] py-1 tracking-widest text-xs xl:text-sm ">SHARE IDEAS</button>
                <button className="text-[10px] xl:text-[14px] py-1 tracking-widest text-xs xl:text-sm ">SHARE TRANSFERS IN MULTIPLE FORMATS</button>
                </div>
                <div className="flex gap-2">
                <button className="text-[10px] xl:text-[14px] py-1 tracking-widest text-xs xl:text-sm ">UNLIMITED STORAGE</button>
                <button className="text-[10px] xl:text-[14px] py-1 tracking-widest text-xs xl:text-sm ">SEND UNLIMITED ON TRANSFERS</button>
                <button className="text-[10px] xl:text-[14px] py-1 tracking-widest text-xs xl:text-sm ">RECEIVE UNLIMITED ON TRANSFERS</button>
                </div >
                <div className="flex gap-2">
                <button className="text-[10px] xl:text-[14px] py-1 tracking-widest text-xs xl:text-sm ">STORAGE FOR UP TO 2 YEARS</button>
                <button className="text-[10px] xl:text-[14px] py-1 tracking-widest text-xs xl:text-sm ">PORTAL</button>
                <button className="text-[10px] xl:text-[14px] py-1 tracking-widest text-xs xl:text-sm ">CUSTOM EXPIRATION DATES</button>
                <button className="text-[10px] xl:text-[14px] py-1 tracking-widest text-xs xl:text-sm ">ASSIGN PIN PROTECTED</button>
                </div>
                <div className="flex ">
                <button className="text-[10px] xl:text-[14px] py-1 tracking-widest text-xs xl:text-sm ">PUBLIC SHARING</button>
                <button className="text-[10px] xl:text-[14px] py-1 tracking-widest text-xs xl:text-sm ">DYNAMIC LINKS</button>
                <Image width={147} height={50} src={imageSrc} alt="Image" className="w-[127px] h-[30px] lg:w-[137px] lg:h-[40px] xl:w-[147px] xl:h-[50px]" />
                <button className="text-[10px] xl:text-[14px] py-1 tracking-widest text-xs xl:text-sm ">PASSWORD PROTECTED</button>
                <button className="text-[10px] xl:text-[14px] py-1 tracking-widest text-xs xl:text-sm ">TRACK DOWNLOADS</button>
            </div>
            <button className="text-[10px] xl:text-[14px] py-1 tracking-widest text-xs xl:text-sm ">ADVANCED AES 254-BIT ENCRYPTION</button>
        </div>
    );
};

export default GroupText;
