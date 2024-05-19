import React from "react";

import Signup from './Signup'
import Login from './Login'
import Navbar from './Components/NavBar/Navbar'
// import Search from './Components/Serach/Search'
import Jobs from './Components/Job/Job'
import Value from './Components/Value/Value'
import Footer from './Components/Footer/Footer'
// import Profile from "./Profile";

function Jobs(){
    return(
        <>
        <div className='w-[93%] sm:text-center m-auto bg-white'>
          <Navbar/>
          <Jobs/>
          <Value/>
          <Footer/>
        </div> 
        </>
    )
}

export default Jobs;