import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { TextField, CircularProgress } from "@mui/material";
import { auth } from '@/app/lib/firebase'
import Image from 'next/image';
import Tick from '@/public/assets/SignBtn.png'
import { input } from '@nextui-org/react';


const SignUpComp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // New loading state

  const handleSignUp = async () => {
    try {
      setLoading(true); // Set loading to true when signing up
      await createUserWithEmailAndPassword(auth, email, password);
      setError(null);
    } catch (error: any) {
      setError(error.message);
      setTimeout(() => {
        setError(null);
      }, 4000);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form className='w-full h-full max-h-[458px] '>

      <div className='lg:w-[350px] 2xl:w-[450px] space-y-[7px] 2xl:space-y-[21px] '>

        <input
          className='flex items-center placeholder-black font-normal h-[38px] md:h-[44px] 2xl:h-[63px] outline outline-gray-300 outline-1  rounded-lg w-full  lg:w-[350px] 2xl:w-[450px] p-2 tracking-wider bg-white justify-between px-[22px] text-[10px] lg:text-xs 2xl:text-lg'
          placeholder="EMAIL"
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className='flex items-center placeholder-black  font-normal h-[38px] md:h-[44px] 2xl:h-[63px] outline outline-gray-300 outline-1  rounded-lg w-full p-2  lg:w-[350px] 2xl:w-[450px]  tracking-wider bg-white justify-between px-[22px] text-[10px] lg:text-xs 2xl:text-lg'
          type="text"
          placeholder="First NAME"
        />
        <input
          className='flex items-center placeholder-black font-normal h-[38px] md:h-[44px] 2xl:h-[63px] outline outline-gray-300 outline-1  rounded-lg w-full p-2  lg:w-[350px] 2xl:w-[450px]  tracking-wider bg-white justify-between px-[22px] text-[10px] lg:text-xs 2xl:text-lg'
          type="text"
          placeholder="LAST NAME"
        />
        <input
          className='flex items-center placeholder-black font-normal h-[38px] md:h-[44px] 2xl:h-[63px] outline outline-gray-300 outline-1  rounded-lg w-full p-2  lg:w-[350px] 2xl:w-[450px]  tracking-wider bg-white justify-between px-[22px] text-[10px] lg:text-xs 2xl:text-lg'
          type="text"
          placeholder="ORGANISATION (OPTIONAL)"
        />
        <input
          className='flex items-center placeholder-black font-normal h-[38px] md:h-[44px] 2xl:h-[63px] outline outline-gray-300 outline-1  rounded-lg w-full p-2  lg:w-[350px] 2xl:w-[450px]  tracking-wider bg-white justify-between px-[22px] text-[10px] lg:text-xs 2xl:text-lg'
          type="password"
          placeholder="PASSWORD"
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <div className="text-red-500 bg-red-100 font-normal p-2 text-sm rounded-md">
            {error}
          </div>
        )}
        <div className='w-full  md:flex justify-between relative'>
          <div>

          </div>
        <div className='  w-full font-normal text-[6px] xl:text-[8px] 2xl:text-[10px]  text-left lg:w-[350px] 2xl:w-[450px]'>By creating an USER ID, you agree to our <br />
          Terms of Service and Privacy & Cookie Statement.</div>
      <div className='flex lg:absolute right-0 justify-center md:justify-end lg:translate-x-10 2xl:translate-x-20 max-md:mt-4 2xl:-translate-y-6'>
        <button type='submit' onClick={handleSignUp} disabled={loading}>
          {loading ? (
            <CircularProgress color="inherit" size={24} />
          ) : (
            <Image alt='' className=' w-[60px] lg:w-[80px] 2xl:w-[136px] h-auto 2xl:h-[100px]' width={136} height={100} src={Tick} />
          )}
        </button>
      </div>

        </div>
      </div>
    </form>
  );
};

export default SignUpComp;
