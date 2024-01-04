import React from 'react'
import { FaLock } from 'react-icons/fa'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";


export default function BottomText() {
  return (
    <div className=' hidden font-normal sm:block relative text-[6px] lg:text-[7px] 2xl:text-[10px]'>
    <div className="absolute max-md:w-full px-[25px] py-[12px] 2xl:px-[50px] 2xl:py-[24px] bottom-0 left-0 ">
      <div className=" max-sm:flex max-sm:flex-col w-full max-sm:text-center justify-center">
          <p>© zitransfer 2023</p>
        <div className=' md:flex gap-2  max-sm:flex-col max-sm:text-center w-full justify-center'>
          <p>all right reserved</p>
        <p>zitransfer is part of the zimo group</p>
        </div>
      </div>
    </div>

    <div  className="absolute px-[25px] py-[12px] 2xl:px-[50px] 2xl:py-[24px] bottom-8 md:bottom-0 right-0 ">
      <div className="md:flex gap-2 items-end">
        <p className="flex  gap-2 items-center text-center sm:text-left ">
          <span>
            <FaLock />
          </span>
          zitransfer use advance encryption standard (AES) 256-bit to
          protect the confidentiality of the data you upload.
        </p>
      </div>
    </div>
  </div>
  )
}
