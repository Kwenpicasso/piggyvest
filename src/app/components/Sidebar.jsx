
import React from 'react'
import { AiTwotoneHome } from 'react-icons/ai'
import { BsFillRocketTakeoffFill } from 'react-icons/bs'
import { FiPower } from 'react-icons/fi'
import { MdAccountCircle, MdSavings } from 'react-icons/md'





export default function Sidebar () {
  
  return (
    <div className='text-white lg:w-full  w-full'>

       <div className=' w-full h-[100px] text-3xl justify-around items-center fixed bottom-[-1px] max-w-[1550px] mx-auto z-50 bg-bblue flex  cursor-pointer'>
        
          <div className='flex flex-col justify-center items-center'>
          <AiTwotoneHome size={25}/>
          <h1 className='text-sm capitalize'>home</h1>
          </div>
          <div className='flex flex-col justify-center items-center'>
          <MdSavings size={25}/>
          <h1 className='text-sm capitalize'>Savings</h1>
          </div>
          <div className='flex flex-col justify-center items-center'>
          <BsFillRocketTakeoffFill size={25}/>
          <h1 className='text-sm capitalize'>invest</h1>
          </div>
          <div className='flex flex-col justify-center items-center'>
          <MdAccountCircle size={25}/>
          <h1 className='text-sm capitalize'>account</h1>
          </div>
          <button  className='text-sm capitalize'>
          <div className='flex flex-col justify-center items-center'>
          <FiPower size={25}/>
          <h1>logout</h1>
          </div>
          </button>
      
      </div>
      
    </div>
  )
}

