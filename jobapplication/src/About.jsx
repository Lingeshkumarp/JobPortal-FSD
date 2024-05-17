import { useState } from 'react'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillGoogleCircle } from 'react-icons/ai'

const About=()=>{
  return(
    <div className='footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-8 grid grid-cols-5 m-auto items-center justify-center'>
      <div>
        <div className='logoDiv'>
            <h1 className="logo text-[25px] text-white pb-[1.5rem]">
                <strong>Job</strong> Portal</h1>
        </div>
        <p className='text-white pb-[13px] opacity-70 leading-7'>
        <div class="google-map">
            <iframe src="https://maps.app.goo.gl/NVYtEbe8BeVE6bZg9" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </p>
      </div>
      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
        Corporate Office
        </span>
        <div className='grid gap-3'>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>LK (India) Limited</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>B - 8, Sector - 132</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Noida - 201304</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>India</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Phone: +91-120-4841100,</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>+91-120-3082000</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Fax: +91-120-3082095</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>E-mail: investors@jobportal.com</li>
        </div>
      </div>

      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
        Registered Office
        </span>
        <div className='grid gap-3'>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>LK (India) Limited</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>GF-12A, 94 Meghdoot</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Building,</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Nehru Place,</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>New Delhi-110019</li>
        </div>
      </div>

      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
        Other Office
        </span>
        <div className='grid gap-3'>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>LK (India) Limited</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>A-88, Sector -2,</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Noida-201301</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>India</li>
        </div>
      </div>

      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Contact Info
        </span>
        <div className='grid gap-3'>
         <small className='text-[14px] text-white'>jobportal@gmail.com</small>
         <div className='icons flex gap-4 py-[1rem]'>
          <AiFillFacebook className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
          <AiFillGithub className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
          <AiFillGoogleCircle className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
         </div>
        </div>
      </div>

    </div>
  )
}

export default About