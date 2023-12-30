import Image from 'next/image';
import React from 'react';
import imageSrc from '@/public/assets/ztfrGold.png'
const GroupText = () => {
    return (
        <div className="hidden sm:flex flex-wrap w-full lg:w-[940px]  ">
                <div className="flex ">
                <button className="text-[10px] xl:text-[14px] py-1 tracking-widest text-">SEND FILES</button>
                <button className="text-[10px] xl:text-[14px] py-1 tracking-widest text-">SEND FOLDERS</button>
                <button className="text-[10px] xl:text-[14px] py-1 tracking-widest text-">SHARE IDEAS</button>
                <button className="text-[10px] xl:text-[14px] py-1 tracking-widest text-">SHARE TRANSFERS IN MULTIPLE FORMATS</button>
                </div>
                <div className="flex gap-2">
                <button className="text-[10px] xl:text-[14px] py-1 tracking-widest text-">UNLIMITED STORAGE</button>
                <button className="text-[10px] xl:text-[14px] py-1 tracking-widest text-">SEND UNLIMITED ON TRANSFERS</button>
                <button className="text-[10px] xl:text-[14px] py-1 tracking-widest text-">RECEIVE UNLIMITED ON TRANSFERS</button>
                </div >
                <div className="flex gap-2">
                <button className="text-[10px] xl:text-[14px] py-1 tracking-widest text-">STORAGE FOR UP TO 2 YEARS</button>
                <button className="text-[10px] xl:text-[14px] py-1 tracking-widest text-">PORTAL</button>
                <button className="text-[10px] xl:text-[14px] py-1 tracking-widest text-">CUSTOM EXPIRATION DATES</button>
                <button className="text-[10px] xl:text-[14px] py-1 tracking-widest text-">ASSIGN PIN PROTECTED</button>
                </div>
                <div className="flex ">
                <button className="text-[10px] xl:text-[14px] py-1 tracking-widest text-">PUBLIC SHARING</button>
                <button className="text-[10px] xl:text-[14px] py-1 tracking-widest text-">DYNAMIC LINKS</button>
                <Image width={147} height={50} src={imageSrc} alt="Image" className="w-[127px] h-[30px] sm:w-[137px] sm:h-[40px] md:w-[147px] md:h-[50px]" />
                <button className="text-[10px] xl:text-[14px] py-1 tracking-widest text-">PASSWORD PROTECTED</button>
                <button className="text-[10px] xl:text-[14px] py-1 tracking-widest text-">TRACK DOWNLOADS</button>
            </div>
            <button className="text-[10px] xl:text-[14px] py-1 tracking-widest text-">ADVANCED AES 254-BIT ENCRYPTION</button>
        </div>
    );
};

export default GroupText;
