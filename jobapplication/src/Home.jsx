import React from "react";

import Signup from './Signup'
import Login from './Login'
import Navbar from './Components/NavBar/Navbar'
import Search from './Components/Serach/Search'
import Jobs from './Components/Job/Job'
import Value from './Components/Value/Value'
import Footer from './Components/Footer/Footer'
import Otp from './otp'
// import Profile from "./Profile";

function Home(){
    return(
        <>
        <div className='w-[93%] sm:text-center m-auto bg-white'>
      {/* <Signup/>
      <Login/> */}
      <Navbar/>
      <Search/>
      <Jobs/>
      <Value/>
      <Footer/>
      {/* <Otp/> */}

      



{/* <button class="motion-safe:hover:-translate-x-0.5 motion-safe:transition ...">
  Save changes
</button> */}
{/* <button type="button" class="bg-indigo-500 ..." disabled>
  <svg class="motion-reduce:hidden animate-spin ..." viewBox="0 0 24 24">abc</svg>
  Processing...
</button>
<button class="hover:-translate-y-0.5 transition motion-reduce:hover:translate-y-0 motion-reduce:transition-none ...">
  Save changes
</button>
      {/* <Profile userProfile={userProfile} /> */}
    </div> 
        </>
    )
}

export default Home;