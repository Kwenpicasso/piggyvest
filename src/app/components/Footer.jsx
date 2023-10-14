import Image from 'next/image'
import React from 'react'
import { BiLogoFacebook, BiLogoTiktok } from 'react-icons/bi';
import { AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    
  <footer className=''>

    
      {/* features section */}
      <section className="w-full h-full mx-auto max-w-[1550px] px-[7%]  mt-[100px]">
        <div className="w-full flex justify-center items-center flex-col gap-6">
          <h1 className="text-darkblue font-bold text-4xl lg:text-2xl">As featured in</h1>
          <div className="w-full flex justify-around items-center lg:flex-wrap lg:w-[100%] lg:gap-3">
            <Image width={150} height={150} src='/brand1.png'  alt='brand1'/>
            <Image width={150} height={150} src='/brand2.png' alt='brand2'/>
            <Image width={150} height={150} src='/brand3.png' alt='brand3'/>
            <Image width={150} height={150} src='/px.svg' alt='brand4'/>
            <Image width={150} height={150} src='/cio.svg' alt='brand5'/>
            <Image width={150} height={150} src='/fast.svg' alt='brand6'/>
          </div>
        </div>

      </section>
      <div className="w-full h-full mx-auto max-w-[1550px] px-[7%] mt-[100px] flex flex-col">
        <div className="w-full lg:h-[80vh] h-[40vh] flex justify-between items-start text-sm lg:flex-col lg:gap-8 mb-[40px]">
          {/* logo */}
          <div className="flex flex-col gap-3 items-center w-[20%] lg:w-full lg:items-start">
          <Image width={150} height={150} src='/footpig.svg' alt='footpig'/>
          <Image width={100} height={100} src='/hf.webp' alt='hf'/>
          </div>

         <div className="flex justify-around w-[50%] lg:w-full">
         <div className="flex flex-col capitalize w-[15%] gap-2 lg:w-[50%]">
            <div className="">
              <h1 className="text-darkblue font-bold">products</h1>
            </div>
            <div className="font-light flex flex-col gap-2 text-xs text-black">
              <p>piggybank</p>
              <p>invest</p>
              <p>safelock</p>
              <p>target savings</p>
              <p>flex naira</p>
              <p>flex dollar</p>
              
            </div>

        
          </div>
          <div className="flex flex-col capitalize w-[15%] gap-2 lg:w-[50%]">
            <div>
              <h1 className="text-darkblue font-bold">company</h1>
            </div>
            <div className="font-light flex flex-col gap-2 text-xs text-black">
              <p>about</p>
              <p>FAQs</p>
              <p>Blog</p>
            </div>

        
          </div>
          <div className="flex flex-col capitalize w-[15%] gap-2 lg:w-[50%]">
            <div>
              <h1 className="text-darkblue font-bold">Legal</h1>
            </div>
            <div className="font-light flex flex-col gap-2 text-xs text-black">
              <p>terms</p>
              <p>privacy</p>
              <p>security</p>
             
              
            </div>

        
          </div>

         </div>

          <div className="flex flex-col w-[30%] justify-end items-end gap-3 lg:w-full lg:items-start">
            {/* icons */}
            <div className="flex gap-2 text-darkblue">
              <BiLogoFacebook size={20}/>
              <AiOutlineInstagram size={20}/>
              <AiOutlineTwitter size={20}/>
              <BiLogoTiktok size={20}/>
              <AiFillYoutube size={20}/>
            </div>
            <div className="font-light flex flex-col items-end w-full justify-end gap-3 lg:items-end lg:justify-end text-black">
              <p className="capitalize w-[70%] lg:w-full">Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos, Nigeria.</p>
              <p className="lg:w-full">contact@piggyvest.com</p>
              <p className="lg:w-full">+234 700 933 933 933</p>
             
              
            </div>

        
          </div>
         
         

        </div>

        {/* botttom footer section */}
        <div className="w-full text-xs text-[rgba(61,79,96,.6509803922)] space-y-3 border border-t-[hsla(0,0%,74.1%,.5215686275)] border-x-transparent border-b-transparent pt-[30px] pb-[100px]">
         <p className="w-[60%] mb-[30px] lg:w-full text-black">Piggyvest (formerly piggybank.ng) is the leading online savings & investing platform in Nigeria. For over 7 years, our customers have saved and invested billions of Naira that they would normally be tempted to spend.</p>
         <div className="flex flex-col gap-2 text-black">
          <p>PV Capital Limited is a fund manager duly licensed by the Securities and Exchange</p>
          <p>Commission (SEC) of Nigeria</p>
         </div>
         <p className="text-bblue">2016 - 2023 PiggyTech Global Limited - RC 1405222</p>
        </div>

      </div>
  </footer>
  )
}

export default Footer
