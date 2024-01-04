'use client'
// pages/signup.js
import { useState } from 'react';
import SignUp from './SignUpComp';
import SignIn from './SignInComp';
import { Button } from '@nextui-org/react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '@/app/lib/firebase'
import GoogleLogo from '@/public/assets/Google.svg'
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const SignupForm = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const router = useRouter();
  const handleToggle = () => {
    setIsSignUp((prev) => !prev);
  };
  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push('/');
    } catch (error) {
      // console.error('Error signing in with Google:', error.message);
    }
  };
  return (
    <div className='text-center flex flex-col w-full max-w-[554px]'>
      <div className='flex justify-between px-8 mb-[8px] 2xl:mb-[21px] text-sm w-full max-w-[450px] '>
        <button
          className={`uppercase tracking-wider font-normal text-xs lg:text-sm 2xl:text-lg ${!isSignUp ? 'text-[#BE9F56]' : ''}`}
          onClick={() => setIsSignUp(false)}
        >LOG IN
          
        </button>
        <button
          className={`uppercase tracking-wider font-normal text-xs lg:text-sm 2xl:text-lg ${isSignUp ? 'text-[#BE9F56]' : ''}`}
          onClick={() => setIsSignUp(true)}
        >CREATE USER ID
          
        </button>
      </div>
      <div className='sm:max-w-[450px]'>
      <button className='flex items-center font-normal h-[46px] 2xl:h-[63px] outline outline-gray-300 outline-1  rounded-lg w-full max-w-[450px] p-2 tracking-wider bg-white justify-between px-[22px] text-xs lg:text-sm 2xl:text-lg' 
      onClick={handleGoogleSignIn}><Image className=' w-[20px] lg:w-[25px] 2xl:w-[37px] h-auto' height={30} width={30} alt='' src={GoogleLogo}/> <span className=' text-xs lg:text-sm 2xl:text-lg'>CONTINUE WITH GOOGLE</span></button>
      </div>
    <div className='flex justify-center my-[5px] font-normal 2xl:my-[15px] text-2xl 2xl:text-3xl max-w-[450px]  text-[#BE9F56]'>or</div>
      {isSignUp ? <SignUp /> : <SignIn />}
    </div>
  );
};

export default SignupForm;
