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
    <div className='h-screen relative flex items-center transition-all duration-500'>
      <div className='absolute top-0 p-4 lg:p-6'>
        <GroupText/>
        
      </div>
      {/* centert --------------------------------------------- */}
      <div className='md:flex gap-8  justify-center mt-8   items-center md:px-12 lg:px-20 w-full'>

          <div className='max-md:hidden space-y-2 h-full flex flex-col justify-center'>
            <Image alt=' ' className='hidden px-4 max-lg:block h-auto w-[100px] md:w-[200px] ' width={559} height={400} src={TransferImg} />
            <Image className=' w-full max-w-[559px] ' alt='' width={559} height={400} src={SingUpImage} />
          </div>
          <div className='hidden lg:flex justify-center '>
            <Image alt=' ' className=' w-full mx-4 max-w-[355px] h-auto ' width={559} height={400} src={TransferImg} />

          </div>

        <div className='flex w-full lg:w-[553px]  min-h-[646px]'>
          <SignupForm />
        </div>

      </div>
      <div>
        <RightSideCard/>
      </div>
      {/* bottom ---------------------------------...............  */}
      <div className=' absolute bottom-24'>
        <button onClick={goBack} className='p-4 lg:p-6 '><Image className='h-auto w-5 md:w-6 lg:w-[30px]' src={BackArrow} alt='' width={30} height={21} /></button>

      </div>
      <div className=' hidden sm:block absolute bottom-0 w-full text-[#BE9F56]'>
        <BottomText />
      </div>
    </div>
  )
}

export default Signup