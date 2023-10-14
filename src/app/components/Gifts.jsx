import React from 'react'
import { gifts } from '../Data'
import { AiFillGift } from 'react-icons/ai'
import Image from 'next/image'

const Gifts = () => {
  return (
    <div className='w-full flex gap-4  mt-[3%] lg:flex-col mx-auto'>
    {/* gifts list */}
    <div className='w-[60%] text-sm lg:w-full'>
    <div className='flex flex-col mt-2 gap-2 '>
    {/* list itself */}
   {gifts.map((list) => (
     <div key={list.id} className='w-full flex justify-start font-semibold text-dash items-center gap-4 border border-gray-400 p-4  rounded-tl-[10px] rounded-br-[10px] rounded-r-[10px]'>
     {/* icon */}
     <AiFillGift size={20} className='text-bblue'/>
     <div className='flex flex-col gap-1'>
     <h1 className='text-bblue'>{list.title}</h1>
     <h1>{list.desc}</h1>

     </div>

   </div>
   ))}

  </div>

  

    </div>
     
     {/* meetinvestor */}
     <div className='w-[40%] text-sm  lg:w-full'>
      <div className='w-[100%] flex flex-col justify-center items-center '>
      <h1>#MeetAPiggyVestSaver: Muyiwa</h1>
      <Image src='/man.jpeg' width={400} height={200} className='rounded-lg' alt='man'/>

      </div>

    </div>

  </div>
  )
}

export default Gifts
