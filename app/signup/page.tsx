'use client'
import React from 'react'
import BottomText from '../ui/BottomText'
import TransferImg from '@/public/assets/transfer.png'
import SingUpImage from '@/public/assets/signupimage.png'
import BackArrow from '@/public/assets/BackArrow.png'
import Image from 'next/image'
import { FaArrowLeft } from 'react-icons/fa'
import SignupForm from './ui/SignupForm'
import RightSideCard from '../ui/RightSideCard'
import { useRouter } from 'next/navigation'
import GroupText from './ui/GroupText'
const Signup = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  return (
    <div className='relative h-screen flex items-center transition-all duration-500'>
      <div className='absolute top-0  px-[25px] py-[12px] xl:px-[50px] xl:py-[24px]  -z-10 '>
        <GroupText/>
        
      </div>
      {/* centert --------------------------------------------- */}
      <div className='md:flex py-[12px] px-[50px] xl:py-[24px]  gap-8 justify-center items-center w-full'>

          <div className='max-md:hidden max-lg:space-y-2 h-full flex flex-col justify-center'>
            <Image alt=' ' className='hidden px-4 max-lg:block h-auto w-[100px] md:w-[200px] ' width={559} height={400} src={TransferImg} />
            <Image className=' w-full h-auto 2xl:h-[400px] 2xl:w-[559px] ' alt='' width={559} height={400} src={SingUpImage} />
          </div>
          <div className='hidden lg:flex justify-center '>
            <Image alt=' ' className=' w-full h-auto  2xl:w-[354px] mx-[14px]' width={559} height={400} src={TransferImg} />

          </div>

        <div className='flex w-full justify-center lg:w-[553px] h-[470px]  xl:h-[470px] 2xl:h-[670px] '>
          <SignupForm />
        </div>

      </div>
      <div>
        <RightSideCard/>
      </div>
      {/* bottom ---------------------------------...............  */}
      <div className='px-[25px] py-[12px] xl:px-[50px] xl:py-[24px]  absolute max-sm:top-6 sm:bottom-16 2xl:bottom-24'>
        <button onClick={goBack} className=' '><Image className='h-auto w-5 md:w-6 lg:w-[30px]' src={BackArrow} alt='' width={30} height={21} /></button>
      </div>
      <div className='absolute bottom-0 w-full text-[#BE9F56]'>
        <BottomText />
      </div>
    </div>
  )
}

export default Signup