import Image from 'next/image'
import React from 'react'
import { PiArrowUDownRightFill } from 'react-icons/pi'

const SecuritySection = () => {
  return (
    <section className="w-full h-[400px] flex px-[7%] max-w-[1550px] mx-auto">
    <div className="flex space-x-5 items-center lg:flex-col lg:space-y-3 gap-4">
      {/* icon */}
      <div>
        <Image width={120} height={120} src='/lock.svg'  alt='lock'/>

      </div>
      {/* content */}
      <div className="space-y-3 lg:text-center">
        <h1 className="font-semibold text-darkblue text-2xl">Your security is our priority</h1>
        <p className="font-light w-[60%] text-[15px] lg:w-full">PiggyVest uses the highest level of Internet 
          Security and it is secured by 256 bits SSL security 
          encryption to ensure that your information is 
          comepletely protected from fraud.
        </p>
    <div className="flex items-center space-x-3 lg:justify-center">
    <div>
      <PiArrowUDownRightFill size={25}/>
      </div>
      <p className="font-semibold text-darkblue">
      More on our security measures
      </p>
    </div>

      </div>
    </div>
  </section>
  )
}

export default SecuritySection
