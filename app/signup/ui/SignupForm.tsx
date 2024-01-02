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
    <div className='text-center p-2 max-md:px-10 flex flex-col w-full  '>
      <div className='flex justify-between px-8 pb-2 text-sm w-full sm:max-w-[450px] '>
        <button
          className={`uppercase tracking-wider text-xs 2xl:text-sm ${!isSignUp ? 'text-[#BE9F56]' : ''}`}
          onClick={() => setIsSignUp(false)}
        >LOG IN
          
        </button>
        <button
          className={`uppercase tracking-wider text-xs 2xl:text-sm ${isSignUp ? 'text-[#BE9F56]' : ''}`}
          onClick={() => setIsSignUp(true)}
        >CREATE USER ID
          
        </button>
      </div>
      <div className='sm:max-w-[450px]'>
      <button className='flex items-center outline outline-gray-300 outline-2  rounded-lg w-full p-2 max-w-[450px]  tracking-wider bg-white justify-between px-8 text-xs md:text-sm' 
      onClick={handleGoogleSignIn}><Image className=' w-4 md:w-[20px] lg:w-[25px] 2xl:w-[37px] h-auto' height={30} width={30} alt='' src={GoogleLogo}/> <span className=' text-xs 2xl:text-sm'>CONTINUE WITH GOOGLE</span></button>
      </div>
    <div className='flex justify-center my-1 xl:my-2 text-2xl 2xl:text-3xl sm:max-w-[450px] text-[#BE9F56]'>or</div>
      {isSignUp ? <SignUp /> : <SignIn />}
    </div>
  );
};

export default SignupForm;
