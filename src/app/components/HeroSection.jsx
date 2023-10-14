import Image from 'next/image'
import React from 'react'
import RevealTwo from './RevealTwo'
import Reveal from './Reveal'

const HeroSection = () => {
  return (
    <section className="max-w-fit mx-auto h-full px-[7%] ">
    <div className="flex justify-between mx-auto lg:flex-col lg:gap-12 pt-[5%]">
      {/* left */}
      
      <div className="w-[50%] lg:w-full pt-[10%] lg:pt-[20%] ">
       <div className=" flex flex-col  justify-center lg:items-center space-y-5 lg:text-center lg:space-y-8 w-[80%] lg:w-full">
        <Reveal>
       <h1 className="text-5xl font-bold min-w-md lg:text-[44px] sm:w-full text-darkblue">The Better Way to Save & Invest</h1>
       <p className="w-[100%] lg:w-[80%] mx-auto text-lg font-light lg:text-base items-center mt-2 text-darkblue">Piggyvest helps over 4 million customers achieve their financial goals by helping them save and invest with ease.</p>
       </Reveal>
       
        <div className="flex space-x-3 w-full lg:justify-center text-sm">
          <button type="button" className="flex space-x-2 htn items-center">
            <div>
              <Image width={13} height={13} src='/apple.svg' alt='apple'/>
            </div>
            <h1 className="">
              Get an Iphone
            </h1>
          </button>
          <button type="button" className="flex space-x-2 htn items-center">
            <div>
              <Image width={13} height={13} src='/playstore.svg' alt='playstore'/>
            </div>
            <h1>
              Get an Andriod
            </h1>
          </button>
          
        </div>

       </div>
      </div>
     
      {/* right */}
      <div className="w-[500px] min-h-[520px] h-full lg:w-full">
      <RevealTwo>
       <div className="w-full h-full relative flex justify-center cover ">
         
       <Image width={500} height={500} src='/girl.webp' className="relative left-0 top-0" alt='girl'/>
          <div className="absolute w-full h-full top-0 left-0">
          <Image width={150} height={150} src='/f1.webp' alt='first' className="absolute bottom-[100px] left-[-20px] md:left-[-10px] sm:left-[-20px] lg:left-[10%]" />
          <Image width={150} height={150} src='/f2.webp'  alt='f2' className=" absolute left-[-20px] md:left-[-10px] sm:left-[-20px] top-[100px] lg:left-[10%]"/>
          <Image width={150} height={150} src='/f3.webp'  alt='f3' className="absolute bottom-[-20px] left-[170px] sm:left-[120px] lg:left-[40%]" />
          <Image width={150} height={150} src='/f4.webp'  alt='f4' className="right-[-20px] sm:right-[-20px] top-[80px] absolute lg:right-[10%] md:right-[1%]"/>
          <Image width={150} height={150} src='/f5.webp' alt='f5' className="right-[-20px] sm:right-[-20px] bottom-[100px] absolute lg:right-[10%] md:right-[1%] "/>
          </div>
         
       </div>
       </RevealTwo>

      </div>


    </div>

  </section>
  )
}

export default HeroSection
