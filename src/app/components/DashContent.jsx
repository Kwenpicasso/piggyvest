'use client'
import React, { useEffect, useState } from 'react'
import { AiOutlinePlayCircle, AiOutlinePlus } from 'react-icons/ai'
import { BiSolidUserCircle } from 'react-icons/bi'
import {  FaSyncAlt } from 'react-icons/fa'
import DashSlider from './DashSlider'
import TodoList from './TodoList'
import Image from 'next/image'
import Gifts from './Gifts'
import Link from 'next/link'



const DashContent = () => {

  const [greeting, setGreeting] = useState('');
 
  
  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 5 && hour < 12) {
      setGreeting('Good morning, wash your hands🍛💜!');
    } else if (hour >= 12 && hour < 17) {
      setGreeting('Good afternoon,wash your hands🍛💜!');
    } else {
      setGreeting('Good evening ,wash your hands🍛💜!');
    }
  }, []);
  
  return (
    <div className='w-full h-screen lg:w-full bg-white'>
      <div className='w-full px-[2%] py-[5%] h-full lg:w-full '>
        <div className='w-full  flex justify-between items-center  '>
          {/* name display */}
          <div className='flex flex-col'>
            <h1 className='font-bold text-3xl lg:text-xl sm:text-md text-black'>Hi,</h1>
            <p className='text-md sm:text-xs text-black '>{greeting}</p>

          </div>

          {/* user icon */}
          <div className=''>
            <BiSolidUserCircle size={40} className='text-blue'/>
          </div>

        </div>
        
        <div className='w-full flex justify-between items-center mt-4 lg:w-full'>
          {/* sync icon */}
          <div className=''>
           <FaSyncAlt className='text-black'/>

          </div>

          {/* quick save */}
          <div className='uppercase w-[150px] sm:w-[120px] text-white flex gap-1 justify-center items-center text-sm lg:text-xs font-semibold py-[12px] bg-[#0d60d8] border rounded-tl-[10px] rounded-br-[10px] rounded-r-[10px] hover:bg-bblue'>
            <AiOutlinePlus size={12} className='text-white'/>
            <h1>quick save</h1>
          </div>

        </div>

        {/* slider */}
        <DashSlider/>

        <div className='w-full flex gap-4 mt-[3%] lg:flex-col-reverse mx-auto'>
          {/* todo list */}
          <div className='w-[60%] text-sm lg:w-full '>
            <h1 className='uppercase lg:text-center'>to-do list</h1>
       <TodoList/>

          </div>
           
           {/* subscribed newsletter */}
           <div className='w-[40%] text-sm  lg:w-full bg-white'>
            <div className='w-full flex gap-2 flex-col justify-center lg:items-center'>
              <h1>Watch Our Dare To Dream Video</h1>
            <Link href='https://www.youtube.com/watch?si=u6E-q52JFIHHQojY&v=tL_yzHMRtGQ&feature=youtu.be'>
            <div className=' h-[200px] w-[80%] relative lg:w-full justify-center items-center flex'>
                <Image src='/news.jpeg' width={400} height={200} className=' rounded-md ' alt='news'/>
                <div className=''>
              <AiOutlinePlayCircle size={50} className='text-white news cursor-pointer'/>
              </div>
              </div>
            </Link>
              
            </div>

          </div>

        </div>

        {/* gift sections */}
        <Gifts/>

      </div> 
    </div>
  )
}

export default DashContent
