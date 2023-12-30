import Image from 'next/image';
import React from 'react';

export default function GroupText() {
  return (
    <div className='grid grid-cols-5 tracking-widest text-[8px] md:text-xs lg:text-sm'>
     <h1 className=" tracking-widest">send files</h1>
     <h1 className=" tracking-widest">send folders</h1>
     <h1 className=" tracking-widest">share ideas</h1>
     <h1 className=" tracking-widest">share transfers in multiple formats</h1><br/>
     <h1 className=" tracking-widest">unlimited storage</h1>
     <h1 className=" tracking-widest">send unlimited on transfers</h1>
     <h1 className=" tracking-widest">recieve unlimited on transfers</h1><br/>
     <h1 className=" tracking-widest">storage for upto 2 years</h1>
     <h1 className=" tracking-widest">portal</h1>
     <h1 className=" tracking-widest">custom expiration dates</h1>
     <h1 className=" tracking-widest">assign pin protected</h1><br/>
     <h1 className=" tracking-widest">public sharing</h1>
     <h1 className=" tracking-widest">dynamic links</h1>
      <Image width={200} height={200} className=' w-32 h-auto' src="/assets/groupText/img (7).png" alt="Image 7" />
     <h1 className=" tracking-widest">password protected</h1>
     <h1 className=" tracking-widest">track downloads</h1>
     <h1 className=" tracking-widest">advance aes 254-bit encryption</h1>    
    </div>
  );
}
