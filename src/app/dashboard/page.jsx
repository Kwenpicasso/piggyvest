import React from 'react'
import Sidebar from '../components/Sidebar'
import DashContent from '../components/DashContent'


const page = () => {
  return (
    <div className='w-full h-screen bg-white flex-col items-center lg:flex-col-reverse  max-w-[1550px] mx-auto'>
      <Sidebar/>
      <DashContent/>
      
    </div>
  )
}

export default page
