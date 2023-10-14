'use client'
import Image from 'next/image'
import Link from 'next/link'





export default function  Page ()  {
  
  
  return (
   <div className='bg-[#27262C] w-full h-screen flex flex-col gap-4 login py-[4%]'>
    <div className='mx-auto w-[30%] h-[50px] flex justify-center items-center  '>
      <Image width={200} height={200} src='/loginpi.svg'  alt='loginpig'/>
    </div>

    {/* login form */}
    <div className='loginform'>
      <div className='w-full flex flex-col justify-center items-center gap-1 mb-7'>
        <h1 className='font-bold text-bblue text-2xl sm:text-xl'>Login to your account</h1>
        <p className='text-xs font-light'>Securely login to your PiggyVest</p>
      </div>

      {/* input for email */}
     <form action="" className='flex flex-col gap-6'>
      <div className='flex flex-col gap-2 text-sm font-semibold text-[#4a5568]'>
        <label htmlFor="">Email</label>
        <input  type="email"  name="email" className=' px-4 outline-none w-full py-[15px] bg-[#edf2f7] border rounded-[10px]' />
      </div>
      <div className='flex flex-col gap-2 text-sm font-semibold text-[#4a5568]'>
        <label htmlFor="">Password</label>
        <input  type="password" name="password" className=' px-4 outline-none w-full py-[15px] bg-[#edf2f7] border rounded-[10px]' />
      </div>

    

      <button type="submit" className='loginbtn'>LOG IN</button>
     
     </form>
              
     

    </div>

    <div className='mx-auto w-[100%] h-[50px] flex justify-center flex-col items-center text-white text-sm gap-3 mt-3'>
      <Link href='/register'>
      <h1 className='animate-pulse'>Don't have an account? Register</h1>
      </Link>

      <h1>
        Forgot password?
      </h1>
      
    </div>
    
   </div>


  )
}

