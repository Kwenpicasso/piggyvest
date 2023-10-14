
import Image from 'next/image'
import Link from 'next/link'




export default function  Page ()   {

  return (
    <div className='bg-[#27262C] w-full h-[135vh] sm:h-[120vh] md:h-[130vh] lg:h-[130vh] flex flex-col gap-4 login py-[4%]'>
    <div className='mx-auto w-[30%] h-[50px] flex justify-center items-center lg:w-[40%] '>
      <Image width={200} height={200} src='/loginpi.svg'  alt='loginpig'/>
    </div>

    {/* login form */}
    <div className='form'>
      <div className='w-full flex flex-col justify-center items-center gap-1 mb-7'>
        <h1 className='font-bold text-bblue text-2xl sm:text-lg'>Create a Secure Account</h1>
        <p className='text-xs font-light text-center'>Welcome to the future of Savings & Investments</p>
      </div>

      {/* input for email */}
     <form  action="" className='flex flex-col gap-4'>
      <div className='inputcont'>
        <label htmlFor="">FirstName</label>
        <input type="text" name="name"  placeholder='FirstName' className=' innerinput'  />
      </div>
     
      <div className='inputcont'>
        <label htmlFor="">LastName</label>
        <input type="text" name="name"  placeholder='LastName'  className=' innerinput'  />
      </div>
     
      <div className='inputcont'>
        <label htmlFor="">Email</label>
        <input type='text' name="email" placeholder='Email'  className=' innerinput'  />
      </div>
      <div className='inputcont'>
        <label htmlFor="">Password</label>
        <input type="password" name="password"  className=' innerinput'/>
      </div>
    

      <button type="submit" className='loginbtn'>CREATE ACCOUNT</button>
     
     </form>
              
     

    </div>

    <div className='mx-auto w-[100%] h-[50px] flex justify-center items-center text-white text-sm  mt-3'>
      <Link href='/login'>
      <h1 className='animate-pulse'>Already have an account? Log In</h1>
      </Link>  
    </div>
    
   </div>
  )
}

