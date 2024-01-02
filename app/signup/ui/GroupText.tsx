import Image from 'next/image';
import React from 'react';
import imageSrc from '@/public/assets/ztfrGold.png'
const GroupText = () => {
    return (
        <div className="hidden lg:flex flex-col flex-wrap w-full lg:w-[940px] ">
                <div className="flex  pb-1">
                <div className="text-[8px] xl:text-[10px] tracking-[0.2em] ">SEND FILES</div>
                <div className="text-[8px] xl:text-[10px] tracking-[0.2em] ">SEND FOLDERS</div>
                <div className="text-[8px] xl:text-[10px] tracking-[0.2em] ">SHARE IDEAS</div>
                <div className="text-[8px] xl:text-[10px] tracking-[0.2em] ">SHARE TRANSFERS IN MULTIPLE FORMATS</div>
                </div>
                <div className="flex gap-2 py-1">
                <div className="text-[8px] xl:text-[10px] tracking-[0.2em] ">UNLIMITED STORAGE</div>
                <div className="text-[8px] xl:text-[10px] tracking-[0.2em] ">SEND UNLIMITED ON TRANSFERS</div>
                <div className="text-[8px] xl:text-[10px] tracking-[0.2em] ">RECEIVE UNLIMITED ON TRANSFERS</div>
                </div >
                <div className="flex gap-2 py-1">
                <div className="text-[8px] xl:text-[10px] tracking-[0.2em] ">STORAGE FOR UP TO 2 YEARS</div>
                <div className="text-[8px] xl:text-[10px] tracking-[0.2em] ">PORTAL</div>
                <div className="text-[8px] xl:text-[10px] tracking-[0.2em] ">CUSTOM EXPIRATION DATES</div>
                <div className="text-[8px] xl:text-[10px] tracking-[0.2em] ">ASSIGN PIN PROTECTED</div>
                </div>
                <div className="flex py-1">
                <div className="text-[8px] xl:text-[10px] tracking-[0.2em] ">PUBLIC SHARING</div>
                <div className="text-[8px] xl:text-[10px] tracking-[0.2em] ">DYNAMIC LINKS</div>
                <div className='relative flex md:w-[100px] lg:w-[120px] xl:w-[147px]'>
                <Image  width={147} height={50} src={imageSrc} alt="Image" className=" absolute flex h-auto md:w-[100px] lg:w-[120px] xl:w-[147px]" />
                </div>
                    
                <div className="text-[8px] xl:text-[10px] tracking-[0.2em] ">PASSWORD PROTECTED</div>
                <div className="text-[8px] xl:text-[10px] tracking-[0.2em] ">TRACK DOWNLOADS</div>
            </div>
            <div className="text-[8px] xl:text-[8px] tracking-widest ">ADVANCED AES 254-BIT ENCRYPTION</div>
        </div>
    );
};

export default GroupText;
