import { useState, useEffect } from 'react';
import { auth } from '../lib/firebase';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import Image from 'next/image';
import ProfileImg from '@/public/assets/profiledefault.svg'
import { useRouter } from 'next/navigation';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Avatar} from "@nextui-org/react";
const ProfileBtn = () => {
    const [user, setUser] = useState<any | null>(null);
    const router = useRouter();
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(getAuth(), (authUser) => {
        if (authUser) {
          setUser(authUser);
        } else {
          setUser(null);
        }
      });
      return () => unsubscribe();
    }, []);
  
    const handleLogout = async () => {
      try {
        await signOut(auth);
        router.push('/signup');
      } catch (error) {
      }
    };
    const GoToLogin = () => {
      router.push('/signup');
    };
    return (
      <div className='flex '>
        {user ? (
          <div className=' flex'>
            {/* <p className=' text-xs'>{user.displayName}!</p> */}
            {user.photoURL && 
                <Dropdown className='scale-80 xl:scale-85 2xl:scale-100'>
                <DropdownTrigger>
                  <Avatar size='sm' as="button" className="transition-transform" src={user.photoURL} alt="User Profile" />
                  
      </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
            <DropdownItem  key="profile" className="">
            <p className='text-center' >{user.displayName}</p>
          </DropdownItem>
            <DropdownItem onClick={handleLogout} className="text-danger text-xs text-center" color="danger" key="new">Logout</DropdownItem>
            
          </DropdownMenu>
        </Dropdown>
            }
          </div>
        ) : (
          <button className=' h-full w-auto' onClick={GoToLogin}>
            <Image className=' h-[15px] w-auto sm:h-[18px] xl:h-[20px] 2xl:h-[25px]'   alt='' width={40} height={40} src={ProfileImg}/>
          </button>
        )}
      </div>
    );
  };
  
export default ProfileBtn;
