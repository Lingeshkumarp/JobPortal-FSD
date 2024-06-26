import { useState } from 'react'
import TeslaLogo from '../../../public/TeslaLogo.png'
import { Link } from 'react-router-dom'
const Value=()=>{
  return(
    <div className='mb-[4rem] mt-[6rem]'>
      <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block'>The value</h1>

      <div className='grid-gap-[10rem] grid-cols-3 items-center'>
        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
              <img src={TeslaLogo} alt="img" className='w-[70%]'/>
            </div>
            <span className='font-semibold text-textColor text-[18px]'>
              DSA
            </span>
          </div>
          <p className='text-[25px] text-textColor opacity-[.7] py-[1rem] font-semibold'>Things</p>
        </div>
      </div>

      <div className="card mt-[2rem] flex justify-between bg-blueColor p-[5rem] rounded-[10px]">
        <div>
          <h1 className='text-blueColor text-[30px] font-bold'>Ready to switch a career</h1>
          <h2 className='text-textColor text-[25px] font-bold'>Let's get started!</h2>
          
        </div>
        <button className='border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18xp] font-semibold text-blueColor hover:bg-white border-blueColor'><Link to={"https://www.naukri.com/"}>Get Started</Link></button>
      </div>

    </div>
  )
}

export default Value