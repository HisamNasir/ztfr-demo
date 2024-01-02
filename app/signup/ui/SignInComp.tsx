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
    <form className='space-y-4 w-full'>
      <input
        placeholder="EMAIL"
        type='email'
        className='flex items-center outline outline-gray-300 outline-2 rounded-xl w-full p-2 max-w-[450px] tracking-wider bg-white justify-between px-8 text-xs md:text-sm' 
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="PASSWORD"
        type='password'
        className='flex items-center outline outline-gray-300 outline-2 rounded-xl w-full p-2 max-w-[450px] tracking-wider bg-white justify-between px-8 text-xs md:text-sm' 
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className=' max-w-[450px]'>
      <button className='text-[#BE9F56] uppercase  max-w-[450px] tracking-wider text-xs text-center'>Forgotten your password?</button>

      </div>



      {/* Display error message if there is one */}
      {error && (
        <div className="text-red-500 bg-red-100 p-2  max-w-[450px]  text-sm rounded-md">
          {error}
        </div>
      )}



      <div className='flex justify-end  max-w-[500px] -translate-y-8'>
        <button type='submit' onClick={handleSignIn} disabled={loading}>
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

export default SignIn;
