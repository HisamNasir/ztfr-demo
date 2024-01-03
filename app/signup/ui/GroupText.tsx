import Image from 'next/image';
import React from 'react';
import imageSrc from '@/public/assets/ztfrGold.png'
const GroupText = () => {
    return (
        <div className="hidden lg:flex  [word-spacing:1vw] tracking-[0.2em] flex-col flex-wrap w-full ">
            <div className="flex  pb-1">
                <p className="text-[8px]  2xl:text-base tracking-[0.1em] ">SEND FILES</p>
                <p className="text-[8px]  2xl:text-base tracking-[0.1em] ">SEND FOLDERS</p>
                <p className="text-[8px]  2xl:text-base tracking-[0.1em] ">SHARE IDEAS</p>
                <p className="text-[8px]  2xl:text-base tracking-[0.1em] ">SHARE TRANSFERS IN MULTIPLE FORMATS</p>
            </div>
            <div className="flex gap-2 py-1">
                <p className="text-[8px]  2xl:text-base tracking-[0.1em] ">UNLIMITED STORAGE</p>
                <p className="text-[8px]  2xl:text-base tracking-[0.1em] ">SEND UNLIMITED ON TRANSFERS</p>
                <p className="text-[8px]  2xl:text-base tracking-[0.1em] ">RECEIVE UNLIMITED ON TRANSFERS</p>
            </div >
            <div className="flex gap-2 py-1">
                <p className="text-[8px]  2xl:text-base tracking-[0.1em] ">STORAGE FOR UP TO 2 YEARS</p>
                <p className="text-[8px]  2xl:text-base tracking-[0.1em] ">PORTAL</p>
                <p className="text-[8px]  2xl:text-base tracking-[0.1em] ">CUSTOM EXPIRATION DATES</p>
                <p className="text-[8px]  2xl:text-base tracking-[0.1em] ">ASSIGN PIN PROTECTED</p>
            </div>
            <div className="flex py-1 word-spacing:20px] ">
                <p className="text-[8px]  2xl:text-base tracking-[0.1em] ">PUBLIC SHARING</p>
                <p className="text-[8px]  2xl:text-base tracking-[0.1em] ">DYNAMIC LINKS</p>
                <div className='relative flex lg:w-[100px] xl:w-[120px] 2xl:w-[147px] ml-5'>
                    <Image width={147} height={50} src={imageSrc} alt="Image" className=" absolute flex h-auto lg:w-[100px] xl:w-[120px] 2xl:w-[147px]" />
                </div>
                <p className="text-[8px]  2xl:text-base tracking-[0.1em] ">PASSWORD PROTECTED</p>
                <p className="text-[8px]  2xl:text-base tracking-[0.1em] ">TRACK DOWNLOADS</p>
            </div>
            <p className="text-[8px] xl:text-[9px] pt-1 2xl:text-sm [word-spacing:2px] tracking-[0.1em] ">ADVANCED AES 254-BIT ENCRYPTION</p>
        </div>
    );
};

export default GroupText;
