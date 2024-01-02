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
      setError(null); // Clear any previous errors
    } catch (error:any) {
      setError(error.message);
      setTimeout(() => {
        setError(null);
      }, 4000);
    } finally {
      setLoading(false); // Reset loading state regardless of success or failure
    }
  };
  return (
    <form className=' space-y-4 w-full '>

<div className='sm:max-w-[450px] space-y-4 '>

      <input
        className='flex items-center outline outline-gray-300 outline-2 rounded-xl w-full h-[34pc] md:h-[40px] max-w-[450px] 2xl:h-[56px] tracking-wider bg-white justify-between px-8 text-xs md:text-sm' 
        placeholder="EMAIL"
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className='flex items-center outline outline-gray-300 outline-2 rounded-xl w-full h-[34pc] md:h-[40px] max-w-[450px] 2xl:h-[56px] tracking-wider bg-white justify-between px-8 text-xs md:text-sm' 
        type="text"
        placeholder="First NAME"
      />
      <input
        className='flex items-center outline outline-gray-300 outline-2 rounded-xl w-full h-[34pc] md:h-[40px] max-w-[450px] 2xl:h-[56px] tracking-wider bg-white justify-between px-8 text-xs md:text-sm' 
        type="text"
        placeholder="LAST NAME"
      />
      <input
        className='flex items-center outline outline-gray-300 outline-2 rounded-xl w-full h-[34pc] md:h-[40px] max-w-[450px] 2xl:h-[56px] tracking-wider bg-white justify-between px-8 text-xs md:text-sm' 
        type="text"
        placeholder="ORGANISATION (OPTIONAL)"
      />
      <input
        className='flex items-center outline outline-gray-300 outline-2 rounded-xl w-full h-[34pc] md:h-[40px] max-w-[450px] 2xl:h-[56px] tracking-wider bg-white justify-between px-8 text-xs md:text-sm' 
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && (
        <div className="text-red-500 bg-red-100 p-2 text-sm rounded-md">
          {error}
        </div>
      )}
      <div className=' text-[8px] md:text-[10px] pt-2 leading-5 text-left max-w-[450px]'>By creating an USER ID, you agree to our <br />
        Terms of Service and Privacy & Cookie Statement.</div>
</div>

      <div className='flex justify-end max-w-[500px] -translate-y-8 '>
        <button type='submit' onClick={handleSignUp} disabled={loading}>
          {loading ? (
            <CircularProgress color="inherit" size={24} />
          ) : (
            <Image alt='' className='w-[50px] h-[35px] md:w-[100px] md:h-[70px] lg:max-w-[136px] lg:max-h-[100px]' width={136} height={100} src={Tick} />
          )}
        </button>
      </div>
    </form>
  );
};

export default SignUpComp;
