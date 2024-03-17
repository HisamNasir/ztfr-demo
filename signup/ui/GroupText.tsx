import Image from 'next/image';
import React from 'react';
import imageSrc from '@/public/assets/ztfrGold.png'
const GroupText = () => {
    return (
        <div className="hidden lg:flex font-normal [word-spacing:9px] 2xl:[word-spacing:9px] tracking-[0.14em] flex-col h-full flex-wrap w-full ">
            <div className="flex  pb-2">
                <p className="text-[9px] 2xl:text-sm tracking-[0.14em] ">SEND FILES&nbsp;</p>
                <p className="text-[9px] 2xl:text-sm tracking-[0.14em] ">SEND FOLDERS&nbsp;</p>
                <p className="text-[9px] 2xl:text-sm tracking-[0.14em] ">SHARE IDEAS&nbsp;</p>
                <p className="text-[9px] 2xl:text-sm tracking-[0.14em] ">SHARE TRANSFERS IN MULTIPLE FORMATS&nbsp;</p>
            </div>
            <div className="flex  py-1 2xl:py-2">
                <p className="text-[9px] 2xl:text-sm tracking-[0.14em] ">UNLIMITED STORAGE&nbsp;</p>
                <p className="text-[9px] 2xl:text-sm tracking-[0.14em] ">SEND UNLIMITED ON TRANSFERS&nbsp;</p>
                <p className="text-[9px] 2xl:text-sm tracking-[0.14em] ">RECEIVE UNLIMITED ON TRANSFERS&nbsp;</p>
            </div >
            <div className="flex py-1 2xl:py-2">
                <p className="text-[9px] 2xl:text-sm tracking-[0.14em] ">STORAGE FOR UP TO 2 YEARS&nbsp;</p>
                <p className="text-[9px] 2xl:text-sm tracking-[0.14em] ">PORTAL&nbsp;</p>
                <p className="text-[9px] 2xl:text-sm tracking-[0.14em] ">CUSTOM EXPIRATION DATES&nbsp;</p>
                <p className="text-[9px] 2xl:text-sm tracking-[0.14em] ">ASSIGN PIN PROTECTED&nbsp;</p>
            </div>
            <div className="flex py-1 2xl:py-2">
                <p className="text-[9px] 2xl:text-sm tracking-[0.14em] ">PUBLIC SHARING&nbsp;</p>
                <p className="text-[9px] 2xl:text-sm tracking-[0.14em] ">DYNAMIC LINKS&nbsp;</p>
                <div className='relative flex lg:w-[100px] xl:w-[120px] 2xl:w-[147px] ml-8 2xl:ml-12 mr-0 2xl:mr-[22px] '>
                    <Image width={147} height={50} src={imageSrc} alt="Image" className=" absolute flex h-auto lg:w-[100px] 2xl:w-[147px]" />
                </div>
                <p className="text-[9px] 2xl:text-sm tracking-[0.14em] ">PASSWORD PROTECTED</p>
                <p className="text-[9px] 2xl:text-sm tracking-[0.14em] ">TRACK DOWNLOADS</p>
            </div>
            <p className="text-[9px] 2xl:text-sm tracking-[0.14em] flex gap-2 py-1 2xl:py-2">ADVANCED AES 254-BIT ENCRYPTION</p>
        </div>
    );
};

export default GroupText;
