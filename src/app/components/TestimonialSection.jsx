import Image from 'next/image'
import React from 'react'

const TestimonialSection = () => {
  return (
    <section className="w-full h-full max-w-[1550px] mx-auto px-[7%] mt-[100px]">
    <div className="flex w-full h-full justify-between items-center lg:flex-col-reverse gap-10">
    <div className="w-[40%] h-full flex justify-center mx-auto lg:w-[80%]">
       <Image width={500} height={500} src='/girl.png'  alt='girltwo'/>
     </div>

     <div className="w-[60%] space-y-4 lg:w-full">
       <h1 className="text-3xl text-darkblue font-bold w-[60%] lg:w-full lg:text-center lg:text-2xl">Join 4+ million people who save and invest with us</h1>
       <div className="flex space-x-3 w-full lg:justify-center text-sm">
           <button type="button" className="flex space-x-2 ktn items-center">
             <div>
               <Image width={13} height={13} src='/lackapple.svg' className="text-black"  alt='lackapple'/>
             </div>
             <h1 className="">
               Get an Iphone
             </h1>
           </button>
           <button type="button" className="flex space-x-2 ktn items-center">
             <div>
               <Image width={13} height={13} src='/playstore.svg'  alt='playstoresvg'/>
             </div>
             <h1>
               Get an Andriod
             </h1>
           </button>
           
         </div>

     </div>
    </div>

   </section>
  )
}

export default TestimonialSection
