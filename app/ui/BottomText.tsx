import React from 'react'
import { FaLock } from 'react-icons/fa'

export default function BottomText() {
  return (
    <div className=' text-[6px] sm:text-[7px] xl:text-[8px] 2xl:text-[10px]'>
    <div className="absolute bottom-0 left-0 py-2 px-4 lg:p-6">
      <div className=" flex gap-2 items-end">
        <div className=' max-sm:flex'>
          <p>zitransfer 2023</p>

          <p>all right reserved</p>
        </div>
        <p>zitransfer is part of the zimo group</p>
      </div>
    </div>

    <div  className="absolute bottom-5 sm:bottom-8 lg:bottom-0 right-0 py-2 px-4 lg:p-6">
      <div className="md:flex gap-2 items-end">
        <p className="flex  gap-2 items-center max-md:text-left ">
          <span>
            <FaLock />
          </span>
          zitransfer use advance encryption standart (AES) 256-bit to
          protect the confidentiality of the data you upload
        </p>
      </div>
    </div>
  </div>
  )
}
