'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useState } from 'react'

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false); 
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
      // Event listener to track scrolling
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
  return (
    <nav className={`w-full mx-auto h-[80px] flex justify-center items-center px-[7%] pt-2 z-[100] ${scrolling ? 'navbar-scroll' : ''} `}>
        
           <div className='w-full flex gap-4 '>
           <div className='w-[20%] lg:w-[40%] z-[1000]'>
                <Image width={200} height={200} src='/logo.svg' alt='logo'/>
            </div>

           

            <div className='flex justify-between w-[80%] items-center lg:hidden'>
              <div>
              <ul className='flex capitalize space-x-3 text-darkblue font-medium '>
                    <li>save</li>
                    <li>invest</li>
                    <li>stories</li>
                    <li>FAQs</li>
                    <li>resources</li>
                </ul>
              </div>

               <div className='flex space-x-2 font-medium justify-center items-center'>
               <div>
                <Link href='/login'>
                <button type="button" className='btn capitalize'>Sign in</button>
                </Link>
                  
                </div>
                <div>
                  <Link href='/register'>
                  <button type="button" className='btnn'>Create free account</button>
                  </Link>
                    
                </div>
               </div>
                
            </div>

           </div>
           <div className='hidden nav-overlay lg:visible ' style={{
        top: navOpen ? '0' : '-100%',
        transitionDelay: navOpen ? '0s' : '0s',
        
        
      }}>
              <div className=' w-full h-full flex justify-center space-y-9 items-center flex-col pt-[6%] '>
              <ul className='flex flex-col capitalize text-darkblue font-medium space-y-6 text-center '>
                    <li>save</li>
                    <li>invest</li>
                    <li>stories</li>
                    <li>FAQs</li>
                    <li>resources</li>

                   
                </ul>
                <div className='flex flex-col space-y-4 font-medium w-[80%] justify-center mx-auto'>
               <button className='w-full ctn' >
                    <Link href='/login'>Sign in</Link>
                </button>
               <button className='w-full ctnn' >
                    <Link href='/register'>Create free account</Link>
                </button>
               
               </div>
              </div>

              
                
            </div>

           
          <div className="menu-toggle lg:block hidden" onClick={() => setNavOpen(!navOpen)}>
          <div className={navOpen ? 'hambox hamboxOpen' : 'hambox'}>
            <span className={navOpen ? 'linetop spin' : 'linetop'}></span>
            <span className={navOpen ? 'linebottom spin' : 'linebottom'}></span>
            
          </div>
        </div>

        
      
    </nav>
  )
}

export default Navbar
