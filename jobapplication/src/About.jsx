import { useState } from 'react'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillGoogleCircle } from 'react-icons/ai'
import office from '../../jobapplication/public/office.jpg'

const About=()=>{
  return(
    <>
    <img className='w=90%'src={office}/>
    <div className="relative h-32 w-320 ...">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.0361190749!2d-74.30933632161012!3d40.69753995481264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1717091459186!5m2!1sen!2sin" className='map absolute inset-y-0 right-0'></iframe>
    </div>
    <div className='footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-8 grid grid-cols-5 m-auto items-center justify-center'>
      <div>
        <div className='logoDiv'>
            <h1 className="logo text-[25px] text-white pb-[1.5rem]">
                <strong>Job</strong> Portal</h1>
        </div>
        <p className='text-white pb-[13px] opacity-70 leading-7'>
        <div class="google-map">
            {/* <iframe src="https://maps.app.goo.gl/NVYtEbe8BeVE6bZg9" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
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
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Noida - 201304, India</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Phone: +91-120-4841100,</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Fax: +91-120-3082095</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Email: investors@jobportal.com</li>
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
    </>
  )
}

export default About;