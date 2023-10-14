import Image from 'next/image';
import React from 'react'
import { PiArrowUDownRightFill } from 'react-icons/pi';
import { savings } from '../Data';


const SavingCard = () => {
  return (
    <section className="w-full h-full pb-[8%] pt-[3%] px-[7%] max-w-[1550px] mx-auto ">
    <div className="w-full h-full mx-auto flex flex-wrap gap-6 justify-center items-center ">
      <div className=" w-[560px] h-[450px] text-center space-y-5 flex flex-col items-center justify-center ">
        <h1 className="text-5xl font-bold text-darkblue leading-[60px] w-[80%] lg:text-3xl">5 ways to build your savings</h1>
        <p className="w-[60%] text-2xl font-light lg:text-base lg:w-[80%] text-black">Earn 5%-15% when you save with any of these PiggyVest plans.</p>
      </div>


      {savings.map((item) => (
        <div key={item.id} className="w-[560px] h-[450px] bg-white rounded-[20px] capitalize p-[5%] relative overflow-hidden hh">
        <div className="flex flex-col justify-between h-full">
          <div className="space-y-7 lg:text-center lg:pt-5">
         <h1 className={`text-4xl font-bold lg:text-3xl h ${item.edit}` }>{item.title}</h1>
           <p className="text-base w-[70%] font-light  lg:w-[80%] lg:mx-auto  lg:text-sm text-black">{item.desc}</p>
         </div>
          <div className={`flex items-center space-x-3 h ${item.edit}`}>

          <PiArrowUDownRightFill size={25}/>

             <p className="font-semibold lg:text-sm ">{item.saving}</p>
     </div>
</div>
<div className="imgcover">
<Image src={item.img} width={200} height={200} className="absolute bottom-0 right-[-300px] hhh sm:w-[50%] "  alt='items'/>

</div>

</div> 
      ))}

      
    </div>

  </section>
  )
}

export default SavingCard
