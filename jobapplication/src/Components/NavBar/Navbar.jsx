import { useState } from 'react'

const Navbar=()=>{
  return(
    <div className='navBar flex justify-between items-center p-[3rem]'>
        <div className='logoDiv'>
            <h1 className="logo text-[25px] text-blueColor">
                <strong>Job</strong> Portal</h1>
    </div>

    <div className="menu flex gap-8">
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Jobs</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Companies</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">About</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Profile</li>
        {/* <li className="menuList text-[#6f6f6f] hover:text-blueColor">Blog</li> */}
        <li className="menuList text-[#6f6f6f] hover:text-blueColor" to='/login'>Login</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Register</li>
    </div>
    </div>
  )
}

export default Navbar