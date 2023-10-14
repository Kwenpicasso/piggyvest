import React from 'react'

const YoutubeSection = () => {
  return (
    <section className="w-full h-full max-w-[1550px] mx-auto ">
       <div className="w-[60%] max-w-[1165px] h-full mx-auto mt-[80px] lg:w-[80%]">
       <div className="flex justify-center items-center flex-col gap-5">
          <h1 className="text-5xl font-bold text-darkblue sm:text-3xl lg:text-center lg:w-full">Meet Our Saver of the Month</h1>
          <p className="text-xl w-full text-center font-light sm:text-base sm:w-full lg:text-center">Every month, we shine a spotlight on one saver, asking them about their savings culture and how piggyvest has helped them.</p>
        </div>
        <div class="w-full h-full mt-[80px] relative mx-auto flex justify-center  items-center">
        <iframe
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/8XzCzC9pFGM?autoplay=1&mute=1" 
            frameborder="0"
            allowfullscreen
            className="object-cover w-full rounded-[24px] movie sm:w-[600px]"
        ></iframe>
    </div>

       </div>

      </section>
  )
}

export default YoutubeSection
