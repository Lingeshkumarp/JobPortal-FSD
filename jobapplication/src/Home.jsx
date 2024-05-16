import React from "react";

import Signup from './Signup'
import Login from './Login'
import Navbar from './Components/NavBar/Navbar'
import Search from './Components/Serach/Search'
import Jobs from './Components/Job/Job'
import Value from './Components/Value/Value'
import Footer from './Components/Footer/Footer'
import Otp from './otp'
import Profile from "./Profile";

function Home(){
    return(
        <>
        <div className='w-[93%] m-auto bg-white'>
      {/* <Signup/>
      <Login/> */}
      <Navbar/>
      <Search/>
      <Jobs/>
      <Value/>
      <Footer/>
      <Otp/>
      <Profile/>
    </div>
        </>
    )
}

export default Home;