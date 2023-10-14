import React from 'react'

import { dashcards } from '../Data'

const DashSlider = () => {
  return (
    <div className="carousel gap-5 w-full lg:w-full">
   {dashcards.map((card) => (
     <div key={card.id} className={`carousel-item ${card.color} ${card.textcolor} w-[250px] h-[140px] border mt-4 md:h-[120px] rounded-tl-[10px] rounded-br-[10px] rounded-r-[10px] text-white`}>
     <div className='flex justify-center gap-4 w-full items-center'>
     {card.icon}
     <div className='flex flex-col gap-2 capitalize'>
       <h1 className='font-light text-sm'>{card.name}</h1>
       <h1 className='font-bold text-2xl sm:text-lg'>{card.price}</h1>
     </div>
     </div>
   </div> 
   ))}
   
    
  </div>
  )
}

export default DashSlider
