import Image from 'next/image';
import React from 'react';
import imageSrc from '@/public/assets/ztfrGold.png'
const GroupText = () => {
    return (
        <div className="hidden lg:flex font-normal [word-spacing:2px] tracking-[0.2em] flex-col flex-wrap w-full ">
            <div className="flex  pb-1">
                <p className="text-[8px]  2xl:text-base tracking-[0.13em] ">SEND FILES</p>
                <p className="text-[8px]  2xl:text-base tracking-[0.13em] ">SEND FOLDERS</p>
                <p className="text-[8px]  2xl:text-base tracking-[0.13em] ">SHARE IDEAS</p>
                <p className="text-[8px]  2xl:text-base tracking-[0.13em] ">SHARE TRANSFERS IN MULTIPLE FORMATS</p>
            </div>
            <div className="flex gap-2 py-1">
                <p className="text-[8px]  2xl:text-base tracking-[0.13em] ">UNLIMITED STORAGE</p>
                <p className="text-[8px]  2xl:text-base tracking-[0.13em] ">SEND UNLIMITED ON TRANSFERS</p>
                <p className="text-[8px]  2xl:text-base tracking-[0.13em] ">RECEIVE UNLIMITED ON TRANSFERS</p>
            </div >
            <div className="flex gap-2 py-1">
                <p className="text-[8px]  2xl:text-base tracking-[0.13em] ">STORAGE FOR UP TO 2 YEARS</p>
                <p className="text-[8px]  2xl:text-base tracking-[0.13em] ">PORTAL</p>
                <p className="text-[8px]  2xl:text-base tracking-[0.13em] ">CUSTOM EXPIRATION DATES</p>
                <p className="text-[8px]  2xl:text-base tracking-[0.13em] ">ASSIGN PIN PROTECTED</p>
            </div>
            <div className="flex py-1 word-spacing:20px] ">
                <p className="text-[8px]  2xl:text-base tracking-[0.13em] ">PUBLIC SHARING</p>
                <p className="text-[8px]  2xl:text-base tracking-[0.13em] ">DYNAMIC LINKS</p>
                <div className='relative flex lg:w-[100px] xl:w-[120px] 2xl:w-[147px] ml-14 mr-4'>
                    <Image width={147} height={50} src={imageSrc} alt="Image" className=" absolute flex h-auto lg:w-[100px] xl:w-[120px] 2xl:w-[147px]" />
                </div>
                <p className="text-[8px]  2xl:text-base tracking-[0.13em] ">PASSWORD PROTECTED</p>
                <p className="text-[8px]  2xl:text-base tracking-[0.13em] ">TRACK DOWNLOADS</p>
            </div>
            <p className="text-[8px] xl:text-[9px] pt-1 2xl:text-base [word-spacing:2px] tracking-[0.13em] ">ADVANCED AES 254-BIT ENCRYPTION</p>
        </div>
    );
};

export default GroupText;
