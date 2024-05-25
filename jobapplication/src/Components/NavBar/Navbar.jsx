import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar=()=>{
  return(
    <div className='navBar flex justify-between items-center p-[3rem]'>
        <div className='logoDiv'>
            <h1 className="logo md:text-[20px] sm:text-[10px] text-[7px] text-blueColor">
                <strong>Job</strong> Portal</h1>
    </div>

    <div className="menu flex gap-8">
        <li className="menuList text-[#6f6f6f] hover:text-blueColor"><Link to={"/jobs"}>Jobs</Link></li>
        {/* <li className="menuList text-[#6f6f6f] hover:text-blueColor">Companies</li> */}
        {/* <li className="menuList text-[#6f6f6f] hover:text-blueColor"><Link to={"/about"}>About</Link></li> */}
        <li className="menuList text-[#6f6f6f] hover:text-blueColor"><Link to={"/profile"}>Profile</Link></li>
        {/* <li className="menuList text-[#6f6f6f] hover:text-blueColor">Blog</li> */}
        <li className="menuList text-[#6f6f6f] hover:text-blueColor"><Link to={"/login"}>Login</Link></li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor"><Link to={"/"}>Register</Link></li>
    </div>
    </div>
  )
}

export default Navbar