import Image from 'next/image'
import React from 'react'
import { PiArrowUDownRightFill } from 'react-icons/pi'

const DiverseSection = () => {
  return (
    <section className="diverse">
        <div className="flex justify-center items-center flex-col gap-5">
          <h1 className="text-5xl font-bold text-darkblue  sm:text-3xl lg:text-center">Diverse ways to Invest</h1>
          <p className="text-xl font-light sm:text-lg sm:w-[90%] lg:text-center">Grow your money and invest for your future confidently.</p>
        </div>

        <div  className="w-full max-w-[1250px] h-[550px] rounded-[30px] capitalize p-[5%] bg-[#7913e5] overflow-hidden  text-white">
        <div className="flex w-full h-full lg:flex-col justify-between ">
        <div className="flex flex-col justify-between h-full lg:justify-start lg:gap-5">
          <div className="space-y-3 lg:text-center lg:pt-5">
         <h1 className="text-4xl font-bold lg:text-3xl ">Earn Up to 25% returns</h1>
           <p className="text-lg w-[50%] font-light lg:w-[80%] lg:text-sm lg:text-center lg:mx-auto">Invest securely and confidently on the go. Grow your money confidently by investing in pre-vetted investment opportunities.</p>
         </div>
          <div className="flex items-center space-x-3 lg:mx-auto">

          <PiArrowUDownRightFill size={25}/>

             <p className="font-semibold lg:text-sm ">Learn about Investments</p>
             </div>
             </div>
           <div className="imgcover mx-auto w-[80%] lg:w-full lg:h-full h-full relative con">
            <Image src="/invest.avif" width={500} height={500} className="w-[500px] sm:w-[300px]  alt='invest' "/>

         </div>
        </div>

         </div> 

      </section>
  )
}

export default DiverseSection
