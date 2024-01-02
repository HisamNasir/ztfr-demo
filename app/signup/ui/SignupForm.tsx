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
    <div className='text-center p-2 max-md:px-10 flex flex-col w-full  min-h-[646px]'>
      <div className='flex justify-between px-8 pb-2 text-sm w-full sm:max-w-[450px] '>
        <button
          className={`uppercase tracking-wider ${!isSignUp ? 'text-[#BE9F56]' : ''}`}
          onClick={() => setIsSignUp(false)}
        >LOG IN
          
        </button>
        <button
          className={`uppercase tracking-wider ${isSignUp ? 'text-[#BE9F56]' : ''}`}
          onClick={() => setIsSignUp(true)}
        >CREATE USER ID
          
        </button>
      </div>
      <div className=' sm:max-w-[450px]  '>
      <Button size='sm' className=' outline outline-gray-300 outline-2 rounded-xl w-full  sm:max-w-[450px] h-[56px] tracking-wider bg-white justify-between px-8' onClick={handleGoogleSignIn}><Image className=' lg:w-[37px] lg:h-[37px]' height={30} width={30} alt='' src={GoogleLogo}/> <span>CONTINUE WITH GOOGLE</span></Button>

      </div>
    <div className=' flex justify-center my-2 text-3xl sm:max-w-[450px]   text-[#BE9F56]'>or</div>
      {isSignUp ? <SignUp /> : <SignIn />}

    </div>
  );
};

export default SignupForm;
