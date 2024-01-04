import { useState } from 'react';
import { signInWithEmailAndPassword, Auth } from 'firebase/auth';
import { auth } from '@/app/lib/firebase';
import { TextField, CircularProgress } from "@mui/material";
import Image from 'next/image';
import Tick from '@/public/assets/SignBtn.png';
import { useRouter } from 'next/navigation';
import { input } from '@nextui-org/react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/');
    } catch (error:any) {
      setError(error.message);
      setTimeout(() => {
        setError(null);
      }, 4000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className='space-y-[10px] font-normal 2xl:space-y-[21px] w-full sm: lg:w-[350px] 2xl:w-[450px] max-h-[458px]'>
      <input
        placeholder="EMAIL"
        type='email'
        className='flex items-center h-[44px] placeholder-black font-normal 2xl:h-[63px] outline outline-gray-300 outline-1  rounded-lg w-full p-3  lg:w-[350px] 2xl:w-[450px] tracking-wider bg-white justify-between px-[22px] text-[10px] lg:text-xs 2xl:text-lg' 
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="PASSWORD"
        type='password'
        className='flex items-center h-[44px] placeholder-black 2xl:h-[63px] font-normal outline outline-gray-300 outline-1  rounded-lg w-full p-3  lg:w-[350px] 2xl:w-[450px] tracking-wider bg-white justify-between px-[22px] text-[10px] lg:text-xs 2xl:text-lg' 
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* Display error message if there is one */}
      {error && (
        <div className="text-red-500 bg-red-100 p-2   lg:w-[350px] 2xl:w-[450px]  text-sm rounded-md">
          {error}
        </div>
      )}
      <div className='w-full md:flex justify-between relative'>
      <div className='w-full text-center'>
      <button className='text-[#BE9F56] uppercase font-normal   lg:w-[350px] 2xl:w-[450px] tracking-wider text-[8px] lg:text-[10px] 2xl:text-[14px] text-center'>Forgotten your password?</button>
      </div>
      <div className='flex lg:absolute right-0 justify-center max-sm:mt-4 md:justify-end lg:translate-x-10 2xl:translate-x-20 2xl:-translate-y-6'>
        <button type='submit' onClick={handleSignIn} disabled={loading}>
          {loading ? (
            <CircularProgress color="inherit" size={24} />
          ) : (
            <Image alt='' className='w-[60px] lg:w-[80px] 2xl:w-[136px] h-auto 2xl:h-[100px]' width={136} height={100} src={Tick} />
          )}
        </button>
      </div>

      </div>
    </form>
  );
};

export default SignIn;
