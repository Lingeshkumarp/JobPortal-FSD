import React from "react";

import Navbar from './Components/NavBar/Navbar'
// import Search from './Components/Serach/Search'
import Jobs from './Components/Job/Job'
import Value from './Components/Value/Value'
import Footer from './Components/Footer/Footer'
// import Profile from "./Profile";

function NewJobs(){
    return(
        <>
        <div className='w-[93%] sm:text-center m-auto bg-white'>
          <Navbar/>
          <div className="line w-1 text-black"></div>
          <Jobs/>
          <Footer/>
        </div> 
        </>
    )
}

export default NewJobs;