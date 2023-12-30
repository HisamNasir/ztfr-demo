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
                <Dropdown className='scale-80 md:scale-85 lg:scale-100'>
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
          <button onClick={GoToLogin}>
            <Image className=' h-auto w-4 md:w-4 lg:w-5 '   alt='' width={40} height={40} src={ProfileImg}/>
          </button>
        )}
      </div>
    );
  };
  
export default ProfileBtn;
